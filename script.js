const translations = {
  ru: {
    pageTitle: "VideoCut BG - удалить фон у видео",
    metaDescription:
      "Сервис для удаления фона у видео: загрузите ролик, проверьте результат и получите готовый файл за несколько минут.",
    navAria: "Разделы",
    navDemo: "Демо",
    navAudience: "Для кого",
    navWorkflow: "Как работает",
    navPricing: "Цена",
    navWaitlist: "Ранний доступ",
    navFaq: "Вопросы",
    joinEarly: "Ранний доступ",
    heroKicker: "Малый сервис для одной боли",
    heroTitle: "Удаляй фон у видео без монтажера.",
    heroSubtitle:
      "Загрузи ролик, получи чистый объект на прозрачном, цветном или фирменном фоне. Для рекламы, коротких видео, карточек товара и сайтов.",
    watchDemo: "Смотреть демо",
    getEarlyAccess: "Получить ранний доступ",
    metricTimeValue: "7 мин",
    metricTimeLabel: "среднее время",
    metricQualityLabel: "качество файла",
    metricSettingsLabel: "сложных настроек",
    previewAria: "Интерфейс удаления фона",
    beforeLabel: "До",
    afterLabel: "После",
    frameCleaning: "Очистка кадра",
    problemKicker: "Проблема",
    problemTitle: "Автору нужен готовый ролик, а не еще один видеоредактор.",
    problemOneTitle: "Монтаж занимает вечер",
    problemOneText: "Даже простая маска превращается в ручную работу, особенно если роликов много.",
    problemTwoTitle: "Инструменты с ИИ слишком общие",
    problemTwoText: "Они умеют все понемногу, но не дают один быстрый и понятный результат.",
    problemThreeTitle: "Готовый файл теряет качество",
    problemThreeText: "Нужен чистый результат в понятном виде: прозрачный фон, цвет или фирменная сцена.",
    demoKicker: "Демо",
    demoTitle: "Выбери результат. Остальное делает сервис.",
    modeAria: "Формат результата",
    modeTransparent: "Прозрачный фон",
    modeBrand: "Цвет бренда",
    modeSocial: "Ролик для соцсетей",
    uploadAria: "Демо загрузки видео",
    uploadButton: "Загрузить видео",
    chooseFile: "Выбери MP4 или MOV",
    waitingFile: "Ждет файл",
    stepUpload: "Загрузка",
    stepMask: "Поиск объекта",
    stepClean: "Очистка краев",
    stepExport: "Подготовка файла",
    uploadProgress: "Загрузка видео",
    detectProgress: "Поиск объекта",
    cleanProgress: "Очистка краев",
    exportProgress: "Подготовка файла",
    doneProgress: "Фон удален",
    apiStarting: "Отправляем видео в обработку",
    apiProcessing: "Видео обрабатывается",
    apiSucceeded: "Готовый файл создан",
    apiFailed: "Не удалось обработать видео",
    apiUnavailable:
      "Обработка через Replicate пока не подключилась. Если сайт загружен через Netlify Drop, функции могли не задеплоиться. Нужен деплой через GitHub или Netlify CLI.",
    apiTooLarge: "Файл слишком большой для первой версии. Попробуй короткий ролик до 5-8 МБ.",
    downloadMp4: "Скачать готовый файл",
    getRealFile: "Получить настоящий файл",
    copyLink: "Скопировать ссылку",
    copied: "Скопировано",
    linkReady: "Ссылка готова",
    sampleBadge: "Пример результата",
    sampleKicker: "Проверка результата",
    historyAria: "История обработок",
    historyTitle: "История обработки",
    historyLatest: "Последние файлы",
    ready: "Готово",
    audienceKicker: "Для кого",
    audienceTitle: "Не для всех. Для тех, кому нужен чистый ролик сегодня.",
    audienceOneLabel: "Авторы",
    audienceOneTitle: "Короткие видео и уроки",
    audienceOneText: "Быстро отделить человека или товар от фона и вставить в готовый формат.",
    audienceTwoLabel: "Маркетологи",
    audienceTwoTitle: "Реклама и карточки товара",
    audienceTwoText: "Собрать несколько вариантов под разные кампании без очереди к дизайнеру или монтажеру.",
    audienceThreeLabel: "Основатели",
    audienceThreeTitle: "Демо для сайта",
    audienceThreeText: "Показать продукт на сайте, в презентации или запуске, даже если видеокоманды еще нет.",
    outputsKicker: "Что получится",
    outputsTitle: "На выходе не магия ИИ, а конкретные файлы.",
    outputOneTitle: "Видео с прозрачным фоном",
    outputOneText: "Для монтажа, презентаций и сайтов.",
    outputTwoTitle: "Видео с цветным фоном",
    outputTwoText: "Для быстрых роликов в цветах бренда.",
    outputThreeTitle: "Вертикальный ролик",
    outputThreeText: "Для соцсетей и рекламы.",
    outputFourTitle: "Ссылка для просмотра",
    outputFourText: "Для согласования результата с командой.",
    workflowKicker: "Как работает",
    workflowTitle: "Три шага вместо сложного видеопроцесса.",
    workflowOneTitle: "Загрузи видео",
    workflowOneText: "Перетащи ролик до 3 минут. Сервис сам найдет объект и начнет обработку.",
    workflowTwoTitle: "Проверь маску",
    workflowTwoText: "Посмотри ключевые кадры. Если нужно, поправь край одним ползунком.",
    workflowThreeTitle: "Скачай файл",
    workflowThreeText: "Получи видео с прозрачным фоном, цветным фоном или готовый ролик для соцсетей.",
    pricingKicker: "Цена",
    pricingTitle: "Одна задача. Одна подписка.",
    pricingText: "Без большого пакета лишних функций, без сложного обучения и без десятков настроек.",
    planName: "Для автора",
    perMonth: "в месяц",
    planOne: "30 видео в месяц",
    planTwo: "качество 1080p",
    planThree: "прозрачный фон, цветной фон, формат для соцсетей",
    planFour: "история обработок 14 дней",
    trustKicker: "Первые сигналы",
    trustTitle: "Такой продукт легко проверить разговорами и заявками.",
    quoteOne: "“Мне не нужен редактор. Мне нужно 12 чистых роликов для рекламы до завтра.”",
    quoteOneAuthor: "Маркетолог, бренд товаров",
    quoteTwo: "“Если это стабильно работает с волосами и руками, я буду платить сразу.”",
    quoteTwoAuthor: "Автор обучающего канала",
    quoteThree: "“Главная ценность не в ИИ, а в том, что человек не тратит полдня на маски.”",
    quoteThreeAuthor: "Основатель сервиса",
    limitsKicker: "Что не делает",
    limitsTitle: "Это не видеоредактор.",
    limitOne: "Не монтирует ролики по дорожкам.",
    limitTwo: "Не пишет сценарии и не делает озвучку.",
    limitThree: "Не заменяет профессиональные программы для монтажа.",
    limitFour: "Не хранит файлы дольше срока тарифа.",
    waitlistKicker: "Ранний доступ",
    waitlistTitle: "Собери первые заявки до разработки продукта.",
    waitlistText:
      "Форма работает локально: после отправки скопирует заявку и откроет Telegram. Напиши сообщение в чат, чтобы попасть в ранний доступ.",
    emailLabel: "Почта",
    useCaseLabel: "Какие видео хочешь обрабатывать?",
    useCasePlaceholder: "Выбери сценарий",
    useCaseAds: "Реклама",
    useCaseShorts: "Короткие видео для соцсетей",
    useCaseProduct: "Карточки товара",
    useCaseEducation: "Обучающие видео",
    useCaseOther: "Другое",
    painLabel: "Что сейчас болит сильнее всего?",
    painPlaceholder: "Например: долго чистить фон, плохие края, нет быстрого готового файла",
    telegramDirect: "Написать напрямую: @mellstroymarket",
    closeAria: "Закрыть",
    modalKicker: "Настоящий файл",
    modalTitle: "Настоящий видеофайл доступен в раннем доступе.",
    modalText:
      "Сейчас это честное демо: оно показывает сценарий обработки и пример результата, но не создает настоящий MP4. Напиши в Telegram, чтобы получить ранний доступ.",
    telegramButton: "Написать в Telegram",
    fillForm: "Заполнить форму",
    faqKicker: "Вопросы",
    faqTitle: "Коротко и по делу.",
    faqOneQuestion: "Это полноценный видеоредактор?",
    faqOneAnswer: "Нет. VideoCut BG делает одну вещь: удаляет фон у видео и отдает готовый файл.",
    faqTwoQuestion: "Можно ли использовать для рекламы?",
    faqTwoAnswer: "Да. Есть формат для вертикальных роликов с безопасными отступами и цветным фоном.",
    faqThreeQuestion: "Что если маска ошиблась?",
    faqThreeAnswer: "Можно проверить ключевые кадры и поправить край маски перед созданием файла.",
    formCopied: "Заявка скопирована. Открываю Telegram @mellstroymarket.",
    formFallback: "Открываю Telegram @mellstroymarket. Заявку можно вставить вручную.",
    noPain: "Не указано",
    waitlistMessageTitle: "Заявка VideoCut BG",
    fieldEmail: "Почта",
    fieldUseCase: "Сценарий",
    fieldPain: "Боль",
    modes: {
      transparent: {
        label: "Файл с прозрачным фоном",
        title: "Объект без фона",
        text: "Для вставки в сайт, презентацию, редактор или ролик о продукте.",
        sampleTitle: "Прозрачный фон готов",
        sampleText: "Пример показывает, как объект будет выглядеть на прозрачном фоне.",
      },
      brand: {
        label: "Фон в цвет бренда",
        title: "Фон в фирменном цвете",
        text: "Для быстрых рекламных роликов и карточек товара без отдельного дизайнера.",
        sampleTitle: "Фирменный фон готов",
        sampleText: "Пример показывает, как ролик будет смотреться на фоне в цветах бренда.",
      },
      social: {
        label: "Формат для соцсетей",
        title: "Готовый вертикальный ролик",
        text: "Для коротких видео, лент и рекламы с безопасными отступами.",
        sampleTitle: "Вертикальный ролик готов",
        sampleText: "Пример показывает вертикальный ролик для соцсетей и рекламы.",
      },
    },
    finishedTitle: "Фон удален. Файл готов",
    finishedText: "Готовый файл создан. Его можно скачать по ссылке ниже.",
  },
  en: {
    pageTitle: "VideoCut BG - remove video backgrounds",
    metaDescription:
      "A focused tool for removing video backgrounds: upload a clip, check the result, and get a clean file in minutes.",
    navAria: "Sections",
    navDemo: "Demo",
    navAudience: "Use cases",
    navWorkflow: "How it works",
    navPricing: "Pricing",
    navWaitlist: "Early access",
    navFaq: "FAQ",
    joinEarly: "Early access",
    heroKicker: "A tiny SaaS for one painful job",
    heroTitle: "Remove video backgrounds without an editor.",
    heroSubtitle:
      "Upload a clip and get a clean subject on a transparent, colored, or branded background. Built for ads, short videos, product shots, and websites.",
    watchDemo: "Watch demo",
    getEarlyAccess: "Get early access",
    metricTimeValue: "7 min",
    metricTimeLabel: "average time",
    metricQualityLabel: "file quality",
    metricSettingsLabel: "complex settings",
    previewAria: "Background removal interface",
    beforeLabel: "Before",
    afterLabel: "After",
    frameCleaning: "Frame cleanup",
    problemKicker: "Problem",
    problemTitle: "Creators need a finished clip, not another video editor.",
    problemOneTitle: "Editing takes an evening",
    problemOneText: "Even a simple mask becomes manual work, especially when there are many clips.",
    problemTwoTitle: "AI tools are too broad",
    problemTwoText: "They do a little bit of everything, but rarely give one fast and predictable result.",
    problemThreeTitle: "Export quality breaks",
    problemThreeText: "You need a clean result in a useful format: transparent background, color, or branded scene.",
    demoKicker: "Demo",
    demoTitle: "Choose the result. The tool handles the rest.",
    modeAria: "Result format",
    modeTransparent: "Transparent",
    modeBrand: "Brand color",
    modeSocial: "Social video",
    uploadAria: "Video upload demo",
    uploadButton: "Upload video",
    chooseFile: "Choose MP4 or MOV",
    waitingFile: "Waiting for file",
    stepUpload: "Upload",
    stepMask: "Detect subject",
    stepClean: "Clean edges",
    stepExport: "Prepare file",
    uploadProgress: "Uploading video",
    detectProgress: "Detecting subject",
    cleanProgress: "Cleaning edges",
    exportProgress: "Preparing file",
    doneProgress: "Background removed",
    apiStarting: "Sending video for processing",
    apiProcessing: "Video is processing",
    apiSucceeded: "Final file created",
    apiFailed: "Video processing failed",
    apiUnavailable:
      "Replicate processing is not connected yet. If the site was uploaded with Netlify Drop, functions may not have deployed. Use GitHub or Netlify CLI deploy.",
    apiTooLarge: "The file is too large for this first version. Try a short 5-8 MB clip.",
    downloadMp4: "Download final file",
    getRealFile: "Get real file",
    copyLink: "Copy link",
    copied: "Copied",
    linkReady: "Link ready",
    sampleBadge: "Sample result",
    sampleKicker: "Result check",
    historyAria: "Processing history",
    historyTitle: "Processing history",
    historyLatest: "Latest files",
    ready: "Ready",
    audienceKicker: "Use cases",
    audienceTitle: "Not for everyone. For people who need a clean clip today.",
    audienceOneLabel: "Creators",
    audienceOneTitle: "Shorts and tutorials",
    audienceOneText: "Separate a person or product from the background and place it into a ready format.",
    audienceTwoLabel: "Marketers",
    audienceTwoTitle: "Ads and product shots",
    audienceTwoText: "Create variants for different campaigns without waiting on a designer or video editor.",
    audienceThreeLabel: "Founders",
    audienceThreeTitle: "Website demos",
    audienceThreeText: "Show the product on a site, in a deck, or in a launch even before you have a video team.",
    outputsKicker: "Outputs",
    outputsTitle: "The output is not AI magic. It is a concrete file.",
    outputOneTitle: "Transparent video",
    outputOneText: "For editing, decks, and websites.",
    outputTwoTitle: "Colored background video",
    outputTwoText: "For quick branded clips.",
    outputThreeTitle: "Vertical video",
    outputThreeText: "For social media and ads.",
    outputFourTitle: "Review link",
    outputFourText: "For sharing the result with your team.",
    workflowKicker: "How it works",
    workflowTitle: "Three steps instead of a complex video workflow.",
    workflowOneTitle: "Upload a video",
    workflowOneText: "Drop in a clip up to 3 minutes. The tool finds the subject and starts processing.",
    workflowTwoTitle: "Check the mask",
    workflowTwoText: "Review key frames. If needed, adjust the edge with one slider.",
    workflowThreeTitle: "Download the file",
    workflowThreeText: "Get transparent video, colored background video, or a ready social clip.",
    pricingKicker: "Pricing",
    pricingTitle: "One job. One subscription.",
    pricingText: "No bulky feature suite, no long onboarding, and no maze of settings.",
    planName: "Creator",
    perMonth: "per month",
    planOne: "30 videos per month",
    planTwo: "1080p quality",
    planThree: "transparent, color, and social formats",
    planFour: "14-day processing history",
    trustKicker: "Early signals",
    trustTitle: "This product can be tested with conversations and signups.",
    quoteOne: "“I do not need an editor. I need 12 clean ad clips by tomorrow.”",
    quoteOneAuthor: "Marketer, consumer brand",
    quoteTwo: "“If it works reliably with hair and hands, I would pay right away.”",
    quoteTwoAuthor: "Education creator",
    quoteThree: "“The value is not AI. The value is saving half a day of masking work.”",
    quoteThreeAuthor: "SaaS founder",
    limitsKicker: "What it does not do",
    limitsTitle: "This is not a video editor.",
    limitOne: "It does not edit full timelines.",
    limitTwo: "It does not write scripts or create voiceovers.",
    limitThree: "It does not replace professional editing tools.",
    limitFour: "It does not store files beyond the plan limit.",
    waitlistKicker: "Early access",
    waitlistTitle: "Collect the first requests before building the product.",
    waitlistText:
      "The form works locally: after submission it copies the request and opens Telegram. Send the message to join early access.",
    emailLabel: "Email",
    useCaseLabel: "What videos do you want to process?",
    useCasePlaceholder: "Choose a use case",
    useCaseAds: "Ads",
    useCaseShorts: "Short social videos",
    useCaseProduct: "Product shots",
    useCaseEducation: "Education videos",
    useCaseOther: "Other",
    painLabel: "What is the biggest pain right now?",
    painPlaceholder: "Example: background cleanup takes too long, bad edges, no fast final file",
    telegramDirect: "Message directly: @mellstroymarket",
    closeAria: "Close",
    modalKicker: "Real file",
    modalTitle: "Real video files are available in early access.",
    modalText:
      "This is an honest demo: it shows the processing flow and a sample result, but it does not create a real MP4 yet. Message us on Telegram to get early access.",
    telegramButton: "Message on Telegram",
    fillForm: "Fill the form",
    faqKicker: "FAQ",
    faqTitle: "Short and practical.",
    faqOneQuestion: "Is this a full video editor?",
    faqOneAnswer: "No. VideoCut BG does one thing: removes video backgrounds and gives you a finished file.",
    faqTwoQuestion: "Can I use it for ads?",
    faqTwoAnswer: "Yes. There is a vertical format with safe spacing and a colored background.",
    faqThreeQuestion: "What if the mask is wrong?",
    faqThreeAnswer: "You can check key frames and adjust the mask edge before creating the file.",
    formCopied: "Request copied. Opening Telegram @mellstroymarket.",
    formFallback: "Opening Telegram @mellstroymarket. You can paste the request manually.",
    noPain: "Not specified",
    waitlistMessageTitle: "VideoCut BG request",
    fieldEmail: "Email",
    fieldUseCase: "Use case",
    fieldPain: "Pain",
    modes: {
      transparent: {
        label: "Transparent file",
        title: "Subject without background",
        text: "For websites, decks, editors, or product videos.",
        sampleTitle: "Transparent background ready",
        sampleText: "The sample shows how the subject will look on a transparent background.",
      },
      brand: {
        label: "Brand color",
        title: "Background in brand color",
        text: "For quick ad clips and product shots without a separate designer.",
        sampleTitle: "Brand background ready",
        sampleText: "The sample shows how the clip will look on a branded background.",
      },
      social: {
        label: "Social format",
        title: "Ready vertical video",
        text: "For short videos, feeds, and ads with safe spacing.",
        sampleTitle: "Vertical video ready",
        sampleText: "The sample shows a vertical clip for social media and ads.",
      },
    },
    finishedTitle: "Background removed. File ready",
    finishedText: "The final file is ready. You can download it below.",
  },
};

const langButtons = document.querySelectorAll(".lang-button");
const modeButtons = document.querySelectorAll(".mode");
const screen = document.querySelector("#demoScreen");
const modeLabel = document.querySelector("#modeLabel");
const modeTitle = document.querySelector("#modeTitle");
const modeText = document.querySelector("#modeText");
const upload = document.querySelector("#videoUpload");
const fileName = document.querySelector("#fileName");
const processLabel = document.querySelector("#processLabel");
const processPercent = document.querySelector("#processPercent");
const processFill = document.querySelector("#processFill");
const resultActions = document.querySelector("#resultActions");
const getRealExport = document.querySelector("#getRealExport");
const copyLink = document.querySelector("#copyLink");
const samplePreview = document.querySelector("#samplePreview");
const sampleVideo = document.querySelector(".sample-video");
const sampleTitle = document.querySelector("#sampleTitle");
const sampleText = document.querySelector("#sampleText");
const history = document.querySelector("#history");
const historyList = document.querySelector("#historyList");
const waitlistForm = document.querySelector("#waitlistForm");
const formStatus = document.querySelector("#formStatus");
const exportModal = document.querySelector("#exportModal");
const closeModal = document.querySelector("#closeModal");
const modalWaitlist = document.querySelector("#modalWaitlist");
const metaDescription = document.querySelector('meta[name="description"]');
const telegramUrl = "https://t.me/mellstroymarket";
const steps = [
  document.querySelector("#stepUpload"),
  document.querySelector("#stepMask"),
  document.querySelector("#stepClean"),
  document.querySelector("#stepExport"),
];

let processTimer;
let latestFileName = "";
let currentMode = "transparent";
let currentLang = localStorage.getItem("siteLang") || "ru";
let isProcessed = false;
let resultUrl = "";

function t(key) {
  return translations[currentLang][key];
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("siteLang", lang);
  document.documentElement.lang = lang;
  document.title = t("pageTitle");
  metaDescription.setAttribute("content", t("metaDescription"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  if (!latestFileName) {
    fileName.textContent = t("chooseFile");
  }

  if (!isProcessed) {
    processLabel.textContent = t("waitingFile");
  }

  getRealExport.textContent = resultUrl ? t("downloadMp4") : t("getRealFile");
  setMode(currentMode);
  updateHistoryStatuses();
}

function setMode(mode) {
  const content = translations[currentLang].modes[mode];
  currentMode = mode;
  screen.className = `demo-screen ${mode}`;
  sampleVideo.className = `sample-video ${mode}`;

  if (isProcessed) {
    modeTitle.textContent = t("finishedTitle");
    modeText.textContent = t("finishedText");
  } else {
    modeTitle.textContent = content.title;
    modeText.textContent = content.text;
  }

  modeLabel.textContent = content.label;
  sampleTitle.textContent = content.sampleTitle;
  sampleText.textContent = content.sampleText;
}

function updateProgress(percent, message) {
  processPercent.textContent = `${percent}%`;
  processFill.style.width = `${percent}%`;
  processLabel.textContent = message;

  const activeIndex = percent < 28 ? 0 : percent < 58 ? 1 : percent < 86 ? 2 : 3;
  steps.forEach((step, index) => {
    step.classList.toggle("active", index === activeIndex && percent < 100);
    step.classList.toggle("done", index < activeIndex || percent === 100);
  });
}

function runFakeProcessing(name) {
  clearInterval(processTimer);
  latestFileName = name;
  isProcessed = false;
  fileName.textContent = name;
  resultActions.hidden = true;
  samplePreview.hidden = true;
  history.hidden = true;
  setMode(currentMode);
  updateProgress(0, t("uploadProgress"));

  let progress = 0;
  processTimer = setInterval(() => {
    progress += Math.floor(Math.random() * 9) + 6;

    if (progress >= 100) {
      progress = 100;
      isProcessed = true;
      updateProgress(progress, t("doneProgress"));
      clearInterval(processTimer);
      setMode(currentMode);
      resultActions.hidden = false;
      samplePreview.hidden = false;
      addHistoryItem(name);
      return;
    }

    const message =
      progress < 28
        ? t("uploadProgress")
        : progress < 58
          ? t("detectProgress")
          : progress < 86
            ? t("cleanProgress")
            : t("exportProgress");

    updateProgress(progress, message);
  }, 420);
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function getOutputUrl(output) {
  if (!output) return "";
  if (typeof output === "string") return output;
  if (Array.isArray(output)) return output.find((item) => typeof item === "string") || "";
  if (typeof output === "object") {
    return output.url || output.uri || output.video || output.output || "";
  }
  return "";
}

async function pollPrediction(id) {
  for (let attempt = 0; attempt < 45; attempt += 1) {
    const response = await fetchWithTimeout(
      `/.netlify/functions/replicate-status?id=${encodeURIComponent(id)}`,
      {},
      15000,
    );
    const prediction = await response.json();

    if (!response.ok) {
      throw new Error(prediction.error || t("apiFailed"));
    }

    if (prediction.status === "succeeded") {
      return prediction;
    }

    if (prediction.status === "failed" || prediction.status === "canceled") {
      throw new Error(prediction.error || t("apiFailed"));
    }

    const progress = Math.min(95, 18 + attempt);
    updateProgress(progress, t("apiProcessing"));
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  throw new Error(t("apiFailed"));
}

function fetchWithTimeout(url, options = {}, timeoutMs = 20000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  return fetch(url, {
    ...options,
    signal: controller.signal,
  }).finally(() => clearTimeout(timeout));
}

async function runRealProcessing(file) {
  clearInterval(processTimer);
  latestFileName = file.name;
  resultUrl = "";
  isProcessed = false;
  fileName.textContent = file.name;
  getRealExport.textContent = t("getRealFile");
  resultActions.hidden = true;
  samplePreview.hidden = true;
  history.hidden = true;
  setMode(currentMode);
  updateProgress(3, t("apiStarting"));

  const videoDataUrl = await fileToDataUrl(file);
  const response = await fetchWithTimeout(
    "/.netlify/functions/replicate-start",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ videoDataUrl, mode: currentMode }),
    },
    30000,
  );
  const prediction = await response.json();

  if (!response.ok) {
    const message = response.status === 413 ? t("apiTooLarge") : prediction.error || t("apiUnavailable");
    throw new Error(message);
  }

  updateProgress(18, t("apiProcessing"));
  const finalPrediction =
    prediction.status === "succeeded" ? prediction : await pollPrediction(prediction.id);
  resultUrl = getOutputUrl(finalPrediction.output);

  if (!resultUrl) {
    throw new Error(t("apiFailed"));
  }

  isProcessed = true;
  updateProgress(100, t("apiSucceeded"));
  setMode(currentMode);
  getRealExport.textContent = t("downloadMp4");
  resultActions.hidden = false;
  samplePreview.hidden = false;
  addHistoryItem(file.name);
}

function addHistoryItem(name) {
  history.hidden = false;
  const item = document.createElement("div");
  const title = document.createElement("strong");
  const status = document.createElement("span");

  item.className = "history-item";
  title.textContent = name;
  status.dataset.status = "ready";
  status.textContent = t("ready");
  item.append(title, status);
  historyList.prepend(item);
}

function updateHistoryStatuses() {
  document.querySelectorAll('[data-status="ready"]').forEach((status) => {
    status.textContent = t("ready");
  });
}

function openExportModal() {
  exportModal.hidden = false;
  closeModal.focus();
}

function closeExportModal() {
  exportModal.hidden = true;
  getRealExport.focus();
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modeButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    setMode(button.dataset.mode);
  });
});

upload.addEventListener("change", () => {
  const file = upload.files && upload.files[0];
  if (!file) return;

  runRealProcessing(file).catch((error) => {
    updateProgress(0, t("apiFailed"));
    modeTitle.textContent = t("apiFailed");
    modeText.textContent =
      error.name === "AbortError" || error.message === "Failed to fetch"
        ? t("apiUnavailable")
        : error.message || t("apiUnavailable");
    resultActions.hidden = true;
    samplePreview.hidden = true;
  });
});

getRealExport.addEventListener("click", () => {
  if (resultUrl) {
    window.open(resultUrl, "_blank", "noreferrer");
    return;
  }

  openExportModal();
});
closeModal.addEventListener("click", closeExportModal);

modalWaitlist.addEventListener("click", () => {
  exportModal.hidden = true;
});

exportModal.addEventListener("click", (event) => {
  if (event.target === exportModal) {
    closeExportModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !exportModal.hidden) {
    closeExportModal();
  }
});

copyLink.addEventListener("click", async () => {
  const demoLink = `${window.location.href.split("#")[0]}#demo`;
  try {
    await navigator.clipboard.writeText(demoLink);
    copyLink.textContent = t("copied");
  } catch {
    copyLink.textContent = t("linkReady");
  }
  setTimeout(() => {
    copyLink.textContent = t("copyLink");
  }, 1600);
});

waitlistForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(waitlistForm);
  const email = data.get("email");
  const useCase = data.get("useCase");
  const pain = data.get("pain") || t("noPain");
  const message = `${t("waitlistMessageTitle")}\n${t("fieldEmail")}: ${email}\n${t("fieldUseCase")}: ${useCase}\n${t("fieldPain")}: ${pain}`;

  const copyRequest = navigator.clipboard
    ? navigator.clipboard.writeText(message)
    : Promise.reject(new Error("Clipboard unavailable"));

  copyRequest
    .then(() => {
      formStatus.textContent = t("formCopied");
    })
    .catch(() => {
      formStatus.textContent = t("formFallback");
    })
    .finally(() => {
      window.location.href = telegramUrl;
    });
});

applyLanguage(currentLang);
