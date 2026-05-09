const REPLICATE_MODEL = process.env.REPLICATE_MODEL || "bria/video-remove-background";
const FILE_FIELD = process.env.REPLICATE_INPUT_FILE_FIELD || "video";
const BACKGROUND_FIELD = process.env.REPLICATE_BACKGROUND_FIELD || "background_color";
const OUTPUT_FIELD = process.env.REPLICATE_OUTPUT_PRESET_FIELD || "output_preset";
const DEFAULT_OUTPUT_PRESET = process.env.REPLICATE_OUTPUT_PRESET || "mp4_h264";
const MAX_DATA_URL_LENGTH = Number(process.env.MAX_VIDEO_DATA_URL_LENGTH || 8_000_000);

const modeBackground = {
  transparent: process.env.REPLICATE_TRANSPARENT_BACKGROUND || "White",
  brand: process.env.REPLICATE_BRAND_BACKGROUND || "Green",
  social: process.env.REPLICATE_SOCIAL_BACKGROUND || "White",
};

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
    },
    body: JSON.stringify(body),
  };
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return json(204, {});
  }

  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  if (!process.env.REPLICATE_API_TOKEN) {
    return json(500, {
      error: "Replicate API token is not configured. Add REPLICATE_API_TOKEN in Netlify environment variables.",
    });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "Invalid JSON body" });
  }

  const { videoDataUrl, mode = "transparent" } = payload;
  if (!videoDataUrl || !videoDataUrl.startsWith("data:video/")) {
    return json(400, { error: "videoDataUrl must be a video data URL" });
  }

  if (videoDataUrl.length > MAX_DATA_URL_LENGTH) {
    return json(413, {
      error: "Video is too large for this MVP upload path. Try a shorter clip or lower resolution.",
    });
  }

  const [owner, model] = REPLICATE_MODEL.split("/");
  if (!owner || !model) {
    return json(500, { error: "REPLICATE_MODEL must look like owner/model" });
  }

  const input = {
    [FILE_FIELD]: videoDataUrl,
    [BACKGROUND_FIELD]: modeBackground[mode] || modeBackground.transparent,
    [OUTPUT_FIELD]: DEFAULT_OUTPUT_PRESET,
  };

  try {
    const response = await fetch(`https://api.replicate.com/v1/models/${owner}/${model}/predictions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json",
        Prefer: "wait=1",
      },
      body: JSON.stringify({ input }),
    });

    const prediction = await response.json();
    if (!response.ok) {
      return json(response.status, {
        error: prediction.detail || prediction.error || "Replicate prediction failed to start",
        replicate: prediction,
      });
    }

    return json(200, {
      id: prediction.id,
      status: prediction.status,
      output: prediction.output,
      urls: prediction.urls,
    });
  } catch (error) {
    return json(500, { error: error.message || "Unexpected Replicate error" });
  }
};
