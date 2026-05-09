function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
    },
    body: JSON.stringify(body),
  };
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return json(204, {});
  }

  if (event.httpMethod !== "GET") {
    return json(405, { error: "Method not allowed" });
  }

  if (!process.env.REPLICATE_API_TOKEN) {
    return json(500, {
      error: "Replicate API token is not configured. Add REPLICATE_API_TOKEN in Netlify environment variables.",
    });
  }

  const id = event.queryStringParameters && event.queryStringParameters.id;
  if (!id) {
    return json(400, { error: "Missing prediction id" });
  }

  try {
    const response = await fetch(`https://api.replicate.com/v1/predictions/${encodeURIComponent(id)}`, {
      headers: {
        Authorization: `Bearer ${process.env.REPLICATE_API_TOKEN}`,
      },
    });

    const prediction = await response.json();
    if (!response.ok) {
      return json(response.status, {
        error: prediction.detail || prediction.error || "Failed to fetch Replicate prediction",
        replicate: prediction,
      });
    }

    return json(200, {
      id: prediction.id,
      status: prediction.status,
      output: prediction.output,
      error: prediction.error,
      logs: prediction.logs,
      urls: prediction.urls,
      metrics: prediction.metrics,
    });
  } catch (error) {
    return json(500, { error: error.message || "Unexpected Replicate error" });
  }
};
