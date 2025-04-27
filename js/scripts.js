// Global Variables
let s0slideState;

// Initialize and build kiosk
function kioskInitialize() {
  // Loading screen
  const loadStatus = document.querySelector("#loadStatus");
  const loadDot1 = document.querySelector("#loadDot1");
  const loadDot2 = document.querySelector("#loadDot2");
  const loadDot3 = document.querySelector("#loadDot3");
  const loadMessages = [
    "Initializing kiosk.baseX42.conf",
    "Initializing kiosk.baseLoader",
    "Initializing kiosk.contentText",
    "Initializing kiosk.contentMedia",
    "Finishing kiosk initialization",
    "Finishing content and media downloads",
  ];
  let loadCount = 0;
  let dotCount = 0;
  const loadTimer = document.querySelector(".loading-container__progress-text");

  const loadDotter = setInterval(() => {
    loadCount++;
    dotCount++;
    if (dotCount === 1) loadDot1.classList.add("show");
    if (dotCount === 2) loadDot2.classList.add("show");
    if (dotCount === 3) loadDot3.classList.add("show");
    if (dotCount === 4) {
      dotCount = 0;
      loadDot1.classList.remove("show");
      loadDot2.classList.remove("show");
      loadDot3.classList.remove("show");
    }
    if (loadCount === 120) clearInterval(loadDotter);
  }, 250);

  let loadNum = 0;
  loadStatus.innerText = loadMessages[loadNum];
  const loadLooker = setInterval(() => {
    loadNum++;
    loadStatus.innerText = loadMessages[loadNum];
    if (loadNum === 5) {
      clearInterval(loadLooker);
    }
  }, 5000);

  let timerCount = 0;
  const countTimer = setInterval(() => {
    timerCount++;
    loadTimer.innerText = `${String(timerCount)}%`;
    if (timerCount === 100) clearInterval(countTimer);
  }, 600);

  // Settings retrieval and set defaults if not found
  // Layout
  // Slide or vid
  let storedSlideOrVid = localStorage.getItem("slideorvid");
  if (!storedSlideOrVid) {
    storedSlideOrVid = "slide";
    localStorage.setItem("slideorvid", storedSlideOrVid);
  }

  // Text Content
  // OID slots
  let storedoidSlot1 = localStorage.getItem("oidslot1");
  if (!storedoidSlot1) {
    storedoidSlot1 = "";
    localStorage.setItem("oidslot1", storedoidSlot1);
  }
  let storedoidSlot2 = localStorage.getItem("oidslot2");
  if (!storedoidSlot2) {
    storedoidSlot2 = "";
    localStorage.setItem("oidslot2", storedoidSlot2);
  }
  let storedoidSlot3 = localStorage.getItem("oidslot3");
  if (!storedoidSlot3) {
    storedoidSlot3 = "NORIX EMPLOYEES TAKE ON NORIX";
    localStorage.setItem("oidslot3", storedoidSlot3);
  }
  let storedoidSlot4 = localStorage.getItem("oidslot4");
  if (!storedoidSlot4) {
    storedoidSlot4 = "NORIX HEADQUARTERS FLY THROUGH";
    localStorage.setItem("oidslot4", storedoidSlot4);
  }
  let storedoidSlot5 = localStorage.getItem("oidslot5");
  if (!storedoidSlot5) {
    storedoidSlot5 = "CONVENTIONAL MOLDING PROCESS";
    localStorage.setItem("oidslot5", storedoidSlot5);
  }
  let storedoidSlot6 = localStorage.getItem("oidslot6");
  if (!storedoidSlot6) {
    storedoidSlot6 = "";
    localStorage.setItem("oidslot6", storedoidSlot6);
  }
  let storedoidSlot7 = localStorage.getItem("oidslot7");
  if (!storedoidSlot7) {
    storedoidSlot7 = "";
    localStorage.setItem("oidslot7", storedoidSlot7);
  }

  // Literature Block Titles
  let litblock1title = localStorage.getItem("litblock1title");
  if (!litblock1title) {
    litblock1title = "MARKETS";
    localStorage.setItem("litblock1title", litblock1title);
  }
  let litblock2title = localStorage.getItem("litblock2title");
  if (!litblock2title) {
    litblock2title = "GUIDES";
    localStorage.setItem("litblock2title", litblock2title);
  }
  let litblock3title = localStorage.getItem("litblock3title");
  if (!litblock3title) {
    litblock3title = "ADDITIONAL RESOURCES";
    localStorage.setItem("litblock3title", litblock3title);
  }

  // Literature block slot titles
  let litblock1slot1title = localStorage.getItem("litblock1slot1title");
  if (!litblock1slot1title) {
    litblock1slot1title = "BEHAVIORAL<br />HEALTHCARE MARKET";
    localStorage.setItem("litblock1slot1title", litblock1slot1title);
  }
  let litblock1slot2title = localStorage.getItem("litblock1slot2title");
  if (!litblock1slot2title) {
    litblock1slot2title = "CORRECTIONS<br />MARKET";
    localStorage.setItem("litblock1slot2title", litblock1slot2title);
  }
  let litblock1slot3title = localStorage.getItem("litblock1slot3title");
  if (!litblock1slot3title) {
    litblock1slot3title = "TRANSITIONAL<br />HOUSING MARKET";
    localStorage.setItem("litblock1slot3title", litblock1slot3title);
  }
  let litblock1slot4title = localStorage.getItem("litblock1slot4title");
  if (!litblock1slot4title) {
    litblock1slot4title = "";
    localStorage.setItem("litblock1slot4title", litblock1slot4title);
  }
  let litblock2slot1title = localStorage.getItem("litblock2slot1title");
  if (!litblock2slot1title) {
    litblock2slot1title = "DESIGN GUIDE";
    localStorage.setItem("litblock2slot1title", litblock2slot1title);
  }
  let litblock2slot2title = localStorage.getItem("litblock2slot2title");
  if (!litblock2slot2title) {
    litblock2slot2title = "BEDROOM GUIDE";
    localStorage.setItem("litblock2slot2title", litblock2slot2title);
  }
  let litblock2slot3title = localStorage.getItem("litblock2slot3title");
  if (!litblock2slot3title) {
    litblock2slot3title = "SEATING GUIDE";
    localStorage.setItem("litblock2slot3title", litblock2slot3title);
  }
  let litblock2slot4title = localStorage.getItem("litblock2slot4title");
  if (!litblock2slot4title) {
    litblock2slot4title = "MATTRESS GUIDE";
    localStorage.setItem("litblock2slot4title", litblock2slot4title);
  }
  let litblock3slot1title = localStorage.getItem("litblock3slot1title");
  if (!litblock3slot1title) {
    litblock3slot1title = "RESPITE BROCHURE";
    localStorage.setItem("litblock3slot1title", litblock3slot1title);
  }
  let litblock3slot2title = localStorage.getItem("litblock3slot2title");
  if (!litblock3slot2title) {
    litblock3slot2title = "FENIX BROCHURE";
    localStorage.setItem("litblock3slot2title", litblock3slot2title);
  }
  let litblock3slot3title = localStorage.getItem("litblock3slot3title");
  if (!litblock3slot3title) {
    litblock3slot3title = "RIPPLE BROCHURE";
    localStorage.setItem("litblock3slot3title", litblock3slot3title);
  }
  let litblock3slot4title = localStorage.getItem("litblock3slot4title");
  if (!litblock3slot4title) {
    litblock3slot4title = "EVVOLVE BROCHURE";
    localStorage.setItem("litblock3slot4title", litblock3slot4title);
  }

  // Video slide video titles
  let videovideo1 = localStorage.getItem("videovideo1");
  if (!videovideo1) {
    videovideo1 = "TITAN";
    localStorage.setItem("videovideo1", videovideo1);
  }
  let videovideo2 = localStorage.getItem("videovideo2");
  if (!videovideo2) {
    videovideo2 = "PRODIGY";
    localStorage.setItem("videovideo2", videovideo2);
  }
  let videovideo3 = localStorage.getItem("videovideo3");
  if (!videovideo3) {
    videovideo3 = "TORO";
    localStorage.setItem("videovideo3", videovideo3);
  }
  let videovideo4 = localStorage.getItem("videovideo4");
  if (!videovideo4) {
    videovideo4 = "WINK";
    localStorage.setItem("videovideo4", videovideo4);
  }

  // Tonik screen pdf block title
  let tonikpdfblocktitle = localStorage.getItem("tonikpdfblocktitle");
  if (!tonikpdfblocktitle) {
    tonikpdfblocktitle = "LITERATURE";
    localStorage.setItem("tonikpdfblocktitle", tonikpdfblocktitle);
  }

  // Tonik screen pdf block slot title
  let tonikpdfblocktitleslot1 = localStorage.getItem("tonikpdfblocktitleslot1");
  if (!tonikpdfblocktitleslot1) {
    tonikpdfblocktitleslot1 = "LOOK BOOK<br>BROCHURE";
    localStorage.setItem("tonikpdfblocktitleslot1", tonikpdfblocktitleslot1);
  }
  let tonikpdfblocktitleslot2 = localStorage.getItem("tonikpdfblocktitleslot2");
  if (!tonikpdfblocktitleslot2) {
    tonikpdfblocktitleslot2 = "TONIK DESIGN<br>GUIDE";
    localStorage.setItem("tonikpdfblocktitleslot2", tonikpdfblocktitleslot2);
  }
  let tonikpdfblocktitleslot3 = localStorage.getItem("tonikpdfblocktitleslot3");
  if (!tonikpdfblocktitleslot3) {
    tonikpdfblocktitleslot3 = "TONIK OCEAN BOUND<br>BROCHURE";
    localStorage.setItem("tonikpdfblocktitleslot3", tonikpdfblocktitleslot3);
  }
  let tonikpdfblocktitleslot4 = localStorage.getItem("tonikpdfblocktitleslot4");
  if (!tonikpdfblocktitleslot4) {
    tonikpdfblocktitleslot4 = "TONIK<br>PRICE LIST";
    localStorage.setItem("tonikpdfblocktitleslot4", tonikpdfblocktitleslot4);
  }

  // Tonik screen video slot titles
  let tonikvideoblockslot1 = localStorage.getItem("tonikvideoblockslot1");
  if (!tonikvideoblockslot1) {
    tonikvideoblockslot1 = "TONIK ROTOMOLDING";
    localStorage.setItem("tonikvideoblockslot1", tonikvideoblockslot1);
  }
  let tonikvideoblockslot2 = localStorage.getItem("tonikvideoblockslot2");
  if (!tonikvideoblockslot2) {
    tonikvideoblockslot2 = "TONIK OUTDOOR FURNITURE";
    localStorage.setItem("tonikvideoblockslot2", tonikvideoblockslot2);
  }
  let tonikvideoblockslot3 = localStorage.getItem("tonikvideoblockslot3");
  if (!tonikvideoblockslot3) {
    tonikvideoblockslot3 = "CLEANING TONIK FURNITURE";
    localStorage.setItem("tonikvideoblockslot3", tonikvideoblockslot3);
  }
  let tonikvideoblockslot4 = localStorage.getItem("tonikvideoblockslot4");
  if (!tonikvideoblockslot4) {
    tonikvideoblockslot4 = "BIKINI POOL LOUNGER";
    localStorage.setItem("tonikvideoblockslot4", tonikvideoblockslot4);
  }
  let tonikvideoblockslot5 = localStorage.getItem("tonikvideoblockslot5");
  if (!tonikvideoblockslot5) {
    tonikvideoblockslot5 = "KARIM - BEHIND THE DESIGN";
    localStorage.setItem("tonikvideoblockslot5", tonikvideoblockslot5);
  }
  let tonikvideoblockslot6 = localStorage.getItem("tonikvideoblockslot6");
  if (!tonikvideoblockslot6) {
    tonikvideoblockslot6 = "CHICAGO O'HARE AIRPORT";
    localStorage.setItem("tonikvideoblockslot6", tonikvideoblockslot6);
  }
  let tonikvideoblockslot7 = localStorage.getItem("tonikvideoblockslot7");
  if (!tonikvideoblockslot7) {
    tonikvideoblockslot7 = "TONIK TRANSFORMATION";
    localStorage.setItem("tonikvideoblockslot7", tonikvideoblockslot7);
  }

  // Link Settings
  // Dashboard media
  let dashvid = localStorage.getItem("dashvid");
  if (!dashvid) {
    dashvid =
      "https://norix.com/wp-content/uploads/2022/04/Launch-Your-Career-With-Norix-Furniture-compressed.mp4";
    localStorage.setItem("dashvid", dashvid);
  }
  let dashimg1 = localStorage.getItem("dashimg1");
  if (!dashimg1) {
    dashimg1 =
      "https://norix.com/wp-content/uploads/2022/03/NORIX_1stFloor_CoffeeBar.webp";
    localStorage.setItem("dashimg1", dashimg1);
  }
  let dashimg2 = localStorage.getItem("dashimg2");
  if (!dashimg2) {
    dashimg2 =
      "https://norix.com/wp-content/uploads/2022/03/NORIX_Entrance_Plane.webp";
    localStorage.setItem("dashimg2", dashimg2);
  }
  let dashimg3 = localStorage.getItem("dashimg3");
  if (!dashimg3) {
    dashimg3 =
      "https://norix.com/wp-content/uploads/2022/03/NORIX_Entrance_Southend.webp";
    localStorage.setItem("dashimg3", dashimg3);
  }
  let dashimg4 = localStorage.getItem("dashimg4");
  if (!dashimg4) {
    dashimg4 =
      "https://norix.com/wp-content/uploads/2022/03/NORIX_Exec_Boardroom.webp";
    localStorage.setItem("dashimg4", dashimg4);
  }
  let dashimg5 = localStorage.getItem("dashimg5");
  if (!dashimg5) {
    dashimg5 = "https://norix.com/wp-content/uploads/2022/03/NORIX_Field.webp";
    localStorage.setItem("dashimg5", dashimg5);
  }
  let dashimg6 = localStorage.getItem("dashimg6");
  if (!dashimg6) {
    dashimg6 =
      "https://norix.com/wp-content/uploads/2022/03/NORIX_Monument_Sign.webp";
    localStorage.setItem("dashimg6", dashimg6);
  }
  let dashimg7 = localStorage.getItem("dashimg7");
  if (!dashimg7) {
    dashimg7 =
      "https://norix.com/wp-content/uploads/2022/03/NORIX_Showroom.webp";
    localStorage.setItem("dashimg7", dashimg7);
  }

  // OID Slots
  let oidslot1link = localStorage.getItem("oidslot1link");
  if (!oidslot1link) {
    oidslot1link = "";
    localStorage.setItem("oidslot1link", oidslot1link);
  }
  let oidslot2link = localStorage.getItem("oidslot2link");
  if (!oidslot2link) {
    oidslot2link = "";
    localStorage.setItem("oidslot2link", oidslot2link);
  }
  let oidslot3link = localStorage.getItem("oidslot3link");
  if (!oidslot3link) {
    oidslot3link =
      "https://norix.com/wp-content/uploads/2022/11/launch_your_career_with_norix_furniture-1080p.mp4";
    localStorage.setItem("oidslot3link", oidslot3link);
  }
  let oidslot4link = localStorage.getItem("oidslot4link");
  if (!oidslot4link) {
    oidslot4link =
      "https://norix.com/wp-content/uploads/2022/04/OID_Flythough_Final-compressed.mp4";
    localStorage.setItem("oidslot4link", oidslot4link);
  }
  let oidslot5link = localStorage.getItem("oidslot5link");
  if (!oidslot5link) {
    oidslot5link =
      "https://norix.com/wp-content/uploads/2022/04/ConventionalMolding_Video-compressed.mp4";
    localStorage.setItem("oidslot5link", oidslot5link);
  }
  let oidslot6link = localStorage.getItem("oidslot6link");
  if (!oidslot6link) {
    oidslot6link = "";
    localStorage.setItem("oidslot6link", oidslot6link);
  }
  let oidslot7link = localStorage.getItem("oidslot7link");
  if (!oidslot7link) {
    oidslot7link = "";
    localStorage.setItem("oidslot7link", oidslot7link);
  }

  // Lit slide slot images
  let litblock1slot1img = localStorage.getItem("litblock1slot1img");
  if (!litblock1slot1img) {
    litblock1slot1img =
      "https://norix.com/wp-content/uploads/2024/08/BHC_Thumbnail.jpg";
    localStorage.setItem("litblock1slot1img", litblock1slot1img);
  }
  let litblock1slot2img = localStorage.getItem("litblock1slot2img");
  if (!litblock1slot2img) {
    litblock1slot2img =
      "https://norix.com/wp-content/uploads/2024/08/Justice_Thumbnail.jpg";
    localStorage.setItem("litblock1slot2img", litblock1slot2img);
  }
  let litblock1slot3img = localStorage.getItem("litblock1slot3img");
  if (!litblock1slot3img) {
    litblock1slot3img =
      "https://norix.com/wp-content/uploads/2024/08/TransHousing_Thumbnail.jpg";
    localStorage.setItem("litblock1slot3img", litblock1slot3img);
  }
  let litblock1slot4img = localStorage.getItem("litblock1slot4img");
  if (!litblock1slot4img) {
    litblock1slot4img = "";
    localStorage.setItem("litblock1slot4img", litblock1slot4img);
  }
  let litblock2slot1img = localStorage.getItem("litblock2slot1img");
  if (!litblock2slot1img) {
    litblock2slot1img =
      "https://norix.com/wp-content/uploads/2025/04/DesignGuide_Thumbnail.jpg";
    localStorage.setItem("litblock2slot1img", litblock2slot1img);
  }
  let litblock2slot2img = localStorage.getItem("litblock2slot2img");
  if (!litblock2slot2img) {
    litblock2slot2img =
      "https://norix.com/wp-content/uploads/2024/08/BedroomGuide_Thumbnail.jpg";
    localStorage.setItem("litblock2slot2img", litblock2slot2img);
  }
  let litblock2slot3img = localStorage.getItem("litblock2slot3img");
  if (!litblock2slot3img) {
    litblock2slot3img =
      "https://norix.com/wp-content/uploads/2025/04/SeatingGuide_Thumbnail.jpg";
    localStorage.setItem("litblock2slot3img", litblock2slot3img);
  }
  let litblock2slot4img = localStorage.getItem("litblock2slot4img");
  if (!litblock2slot4img) {
    litblock2slot4img =
      "https://norix.com/wp-content/uploads/2024/08/MattressGuide_Thumbnail.jpg";
    localStorage.setItem("litblock2slot4img", litblock2slot4img);
  }
  let litblock3slot1img = localStorage.getItem("litblock3slot1img");
  if (!litblock3slot1img) {
    litblock3slot1img =
      "https://norix.com/wp-content/uploads/2025/04/Respite_Thumbnail.jpg";
    localStorage.setItem("litblock3slot1img", litblock3slot1img);
  }
  let litblock3slot2img = localStorage.getItem("litblock3slot2img");
  if (!litblock3slot2img) {
    litblock3slot2img =
      "https://norix.com/wp-content/uploads/2025/04/Fenix_Thumbnail.jpg";
    localStorage.setItem("litblock3slot2img", litblock3slot2img);
  }
  let litblock3slot3img = localStorage.getItem("litblock3slot3img");
  if (!litblock3slot3img) {
    litblock3slot3img =
      "https://norix.com/wp-content/uploads/2025/04/Ripple_Thumbnail.jpg";
    localStorage.setItem("litblock3slot3img", litblock3slot3img);
  }
  let litblock3slot4img = localStorage.getItem("litblock3slot4img");
  if (!litblock3slot4img) {
    litblock3slot4img =
      "https://norix.com/wp-content/uploads/2025/04/Evvolve_Thumbnail.jpg";
    localStorage.setItem("litblock3slot4img", litblock3slot4img);
  }

  // Lit slide pdf links
  let litblock1slot1pdf = localStorage.getItem("litblock1slot1pdf");
  if (!litblock1slot1pdf) {
    litblock1slot1pdf =
      "https://drive.google.com/file/d/1_Eq89wSG0_KnxEDTOJ769ISQS0gM6c-c/preview";
    localStorage.setItem("litblock1slot1pdf", litblock1slot1pdf);
  }
  let litblock1slot2pdf = localStorage.getItem("litblock1slot2pdf");
  if (!litblock1slot2pdf) {
    litblock1slot2pdf =
      "https://drive.google.com/file/d/1Eiz2VgdjINl3fk0jCiMKYy-xICgjSQ_Y/preview";
    localStorage.setItem("litblock1slot2pdf", litblock1slot2pdf);
  }
  let litblock1slot3pdf = localStorage.getItem("litblock1slot3pdf");
  if (!litblock1slot3pdf) {
    litblock1slot3pdf =
      "https://drive.google.com/file/d/1GftQH__H9Ho2frg2RxwGqCjBSiR-l8m-/preview";
    localStorage.setItem("litblock1slot3pdf", litblock1slot3pdf);
  }
  let litblock1slot4pdf = localStorage.getItem("litblock1slot4pdf");
  if (!litblock1slot4pdf) {
    litblock1slot4pdf = "";
    localStorage.setItem("litblock1slot4pdf", litblock1slot4pdf);
  }
  let litblock2slot1pdf = localStorage.getItem("litblock2slot1pdf");
  if (!litblock2slot1pdf) {
    litblock2slot1pdf =
      "https://drive.google.com/file/d/1ScxIN9gkm3lmc--Vi4kbdYDc-nckMREZ/preview";
    localStorage.setItem("litblock2slot1pdf", litblock2slot1pdf);
  }
  let litblock2slot2pdf = localStorage.getItem("litblock2slot2pdf");
  if (!litblock2slot2pdf) {
    litblock2slot2pdf =
      "https://drive.google.com/file/d/1hAjrnMV_wiVsfEgfQPAgWdESebTdkcKN/preview";
    localStorage.setItem("litblock2slot2pdf", litblock2slot2pdf);
  }
  let litblock2slot3pdf = localStorage.getItem("litblock2slot3pdf");
  if (!litblock2slot3pdf) {
    litblock2slot3pdf =
      "https://drive.google.com/file/d/10QM1RJcXbWTC8N09LVJuX3GF26pxkytG/preview";
    localStorage.setItem("litblock2slot3pdf", litblock2slot3pdf);
  }
  let litblock2slot4pdf = localStorage.getItem("litblock2slot4pdf");
  if (!litblock2slot4pdf) {
    litblock2slot4pdf =
      "https://drive.google.com/file/d/1fJ3W2JzPNcnJ5Y12IOlZTk7bfWKeP7EX/preview";
    localStorage.setItem("litblock2slot4pdf", litblock2slot4pdf);
  }
  let litblock3slot1pdf = localStorage.getItem("litblock3slot1pdf");
  if (!litblock3slot1pdf) {
    litblock3slot1pdf =
      "https://drive.google.com/file/d/1_isdIqcfTaUp7n31RPf62kyGqbQjjzr2/preview";
    localStorage.setItem("litblock3slot1pdf", litblock3slot1pdf);
  }
  let litblock3slot2pdf = localStorage.getItem("litblock3slot2pdf");
  if (!litblock3slot2pdf) {
    litblock3slot2pdf =
      "https://drive.google.com/file/d/1bXFKdqx84kp7-bwaX4RokyMBrZFvoCVs/preview";
    localStorage.setItem("litblock3slot2pdf", litblock3slot2pdf);
  }
  let litblock3slot3pdf = localStorage.getItem("litblock3slot3pdf");
  if (!litblock3slot3pdf) {
    litblock3slot3pdf =
      "https://drive.google.com/file/d/1lH5YO4g65e6iBYhizADG--bA-e2UOXNp/preview";
    localStorage.setItem("litblock3slot3pdf", litblock3slot3pdf);
  }
  let litblock3slot4pdf = localStorage.getItem("litblock3slot4pdf");
  if (!litblock3slot4pdf) {
    litblock3slot4pdf =
      "https://drive.google.com/file/d/1J6wtDc2twDtg2blNgdRLpCZJcCIq90Jg/preview";
    localStorage.setItem("litblock3slot4pdf", litblock3slot4pdf);
  }

  // Video slide video links
  let vidvid1link = localStorage.getItem("vidvid1link");
  if (!vidvid1link) {
    vidvid1link =
      "https://norix.com/wp-content/uploads/2025/04/Titan_MultiPurpose_Promo.mp4";
    localStorage.setItem("vidvid1link", vidvid1link);
  }
  let vidvid2link = localStorage.getItem("vidvid2link");
  if (!vidvid2link) {
    vidvid2link =
      "https://norix.com/wp-content/uploads/2022/04/Prodigy_Social_Promo-compressed.mp4";
    localStorage.setItem("vidvid2link", vidvid2link);
  }
  let vidvid3link = localStorage.getItem("vidvid3link");
  if (!vidvid3link) {
    vidvid3link =
      "https://norix.com/wp-content/uploads/2022/04/Toro-Product-Promo-compressed.mp4";
    localStorage.setItem("vidvid3link", vidvid3link);
  }
  let vidvid4link = localStorage.getItem("vidvid4link");
  if (!vidvid4link) {
    vidvid4link =
      "https://norix.com/wp-content/uploads/2022/04/Wink_commercial-compressed.mp4";
    localStorage.setItem("vidvid4link", vidvid4link);
  }

  // Green Story link
  let greenlink = localStorage.getItem("greenlink");
  if (!greenlink) {
    greenlink =
      "https://norix.com/wp-content/uploads/2022/04/Kiosk_test_infographic-compressed-scaled.webp";
    localStorage.setItem("greenlink", greenlink);
  }

  // Tonik PDf block slot image links
  let tonikpdf1 = localStorage.getItem("tonikpdf1");
  if (!tonikpdf1) {
    tonikpdf1 =
      "https://norix.com/wp-content/uploads/2022/03/Tonik_Brochure_Cover.webp";
    localStorage.setItem("tonikpdf1", tonikpdf1);
  }
  let tonikpdf2 = localStorage.getItem("tonikpdf2");
  if (!tonikpdf2) {
    tonikpdf2 =
      "https://norix.com/wp-content/uploads/2022/03/Tonik_DGuide_Cover.webp";
    localStorage.setItem("tonikpdf2", tonikpdf2);
  }
  let tonikpdf3 = localStorage.getItem("tonikpdf3");
  if (!tonikpdf3) {
    tonikpdf3 =
      "https://norix.com/wp-content/uploads/2022/04/Tonik_OceanBound_Cover.webp";
    localStorage.setItem("tonikpdf3", tonikpdf3);
  }
  let tonikpdf4 = localStorage.getItem("tonikpdf4");
  if (!tonikpdf4) {
    tonikpdf4 =
      "https://norix.com/wp-content/uploads/2022/04/Tonik_Pricer_Cover.webp";
    localStorage.setItem("tonikpdf4", tonikpdf4);
  }

  // Tonik PDf block slot pdf links
  let tonikpdf1link = localStorage.getItem("tonikpdf1link");
  if (!tonikpdf1link) {
    tonikpdf1link =
      "https://drive.google.com/file/d/1AzSnIa8mnbzF1IN9e0RVsbsD5aijG97b/preview";
    localStorage.setItem("tonikpdf1link", tonikpdf1link);
  }
  let tonikpdf2link = localStorage.getItem("tonikpdf2link");
  if (!tonikpdf2link) {
    tonikpdf2link =
      "https://drive.google.com/file/d/1703svqAtiLCWu7UuZW8g1GzqX0WjCFLv/preview";
    localStorage.setItem("tonikpdf2link", tonikpdf2link);
  }
  let tonikpdf3link = localStorage.getItem("tonikpdf3link");
  if (!tonikpdf3link) {
    tonikpdf3link =
      "https://drive.google.com/file/d/1YxjMKO1exezv412Ble8_bsRQKDXATpX1/preview";
    localStorage.setItem("tonikpdf3link", tonikpdf3link);
  }
  let tonikpdf4link = localStorage.getItem("tonikpdf4link");
  if (!tonikpdf4link) {
    tonikpdf4link =
      "https://drive.google.com/file/d/1-f4cTPbwd4Titi4G9-Tp5fKoaQz02vHf/preview";
    localStorage.setItem("tonikpdf4link", tonikpdf4link);
  }

  // Tonik slide video links
  let tonikvideo1 = localStorage.getItem("tonikvideo1");
  if (!tonikvideo1) {
    tonikvideo1 =
      "https://norix.com/wp-content/uploads/2022/04/tonik_rotomolding-1080p-compressed.mp4";
    localStorage.setItem("tonikvideo1", tonikvideo1);
  }
  let tonikvideo2 = localStorage.getItem("tonikvideo2");
  if (!tonikvideo2) {
    tonikvideo2 =
      "https://norix.com/wp-content/uploads/2022/04/tonik_outdoor_furniture-1080p-compressed.mp4";
    localStorage.setItem("tonikvideo2", tonikvideo2);
  }
  let tonikvideo3 = localStorage.getItem("tonikvideo3");
  if (!tonikvideo3) {
    tonikvideo3 =
      "https://norix.com/wp-content/uploads/2022/04/cleaning_tonik_rotomolded_furniture-1080p-compressed.mp4";
    localStorage.setItem("tonikvideo3", tonikvideo3);
  }
  let tonikvideo4 = localStorage.getItem("tonikvideo4");
  if (!tonikvideo4) {
    tonikvideo4 =
      "https://norix.com/wp-content/uploads/2022/04/bikini_pool_lounger_featured_in_interior_design-1080p-compressed.mp4";
    localStorage.setItem("tonikvideo4", tonikvideo4);
  }
  let tonikvideo5 = localStorage.getItem("tonikvideo5");
  if (!tonikvideo5) {
    tonikvideo5 =
      "https://norix.com/wp-content/uploads/2022/04/karim_rashid_-_behind_the_design_-_bikini_lounger-1080p-compressed.mp4";
    localStorage.setItem("tonikvideo5", tonikvideo5);
  }
  let tonikvideo6 = localStorage.getItem("tonikvideo6");
  if (!tonikvideo6) {
    tonikvideo6 =
      "https://norix.com/wp-content/uploads/2022/04/Ohare_install_promo-compressed.mp4";
    localStorage.setItem("tonikvideo6", tonikvideo6);
  }
  let tonikvideo7 = localStorage.getItem("tonikvideo7");
  if (!tonikvideo7) {
    tonikvideo7 =
      "https://norix.com/wp-content/uploads/2022/04/tonik_transformation_-_fuseneo_st._charles_il-1080p-compressed.mp4";
    localStorage.setItem("tonikvideo7", tonikvideo7);
  }

  // Web slide image links
  let webtopimg = localStorage.getItem("webtopimg");
  if (!webtopimg) {
    webtopimg = "https://norix.com/wp-content/uploads/2022/03/norixweb.webp";
    localStorage.setItem("webtopimg", webtopimg);
  }
  let webbottomimg = localStorage.getItem("webbottomimg");
  if (!webbottomimg) {
    webbottomimg = "https://norix.com/wp-content/uploads/2022/03/tonikweb.webp";
    localStorage.setItem("webbottomimg", webbottomimg);
  }

  // Build settings from storage
  // Layout
  // Slide or vid
  if (storedSlideOrVid === "slide") {
    document
      .querySelector("#settings-slideorvideo-slide")
      .classList.add("selected");
  } else {
    document
      .querySelector("#settings-slideorvideo-video")
      .classList.add("selected");
  }

  // Text Content
  // OID slots
  document.querySelector("#settings-oidslot1").innerText = storedoidSlot1;
  document.querySelector("#settings-oidslot2").innerText = storedoidSlot2;
  document.querySelector("#settings-oidslot3").innerText = storedoidSlot3;
  document.querySelector("#settings-oidslot4").innerText = storedoidSlot4;
  document.querySelector("#settings-oidslot5").innerText = storedoidSlot5;
  document.querySelector("#settings-oidslot6").innerText = storedoidSlot6;
  document.querySelector("#settings-oidslot7").innerText = storedoidSlot7;

  // Literature Block Titles
  document.querySelector("#settings-litblock1-title").innerText =
    litblock1title;
  document.querySelector("#settings-litblock2-title").innerText =
    litblock2title;
  document.querySelector("#settings-litblock3-title").innerText =
    litblock3title;

  // Literature block slot titles
  document.querySelector("#settings-litblock1slot1-title").innerText =
    litblock1slot1title;
  document.querySelector("#settings-litblock1slot2-title").innerText =
    litblock1slot2title;
  document.querySelector("#settings-litblock1slot3-title").innerText =
    litblock1slot3title;
  document.querySelector("#settings-litblock1slot4-title").innerText =
    litblock1slot4title;
  document.querySelector("#settings-litblock2slot1-title").innerText =
    litblock2slot1title;
  document.querySelector("#settings-litblock2slot2-title").innerText =
    litblock2slot1title;
  document.querySelector("#settings-litblock2slot3-title").innerText =
    litblock2slot3title;
  document.querySelector("#settings-litblock2slot4-title").innerText =
    litblock2slot4title;
  document.querySelector("#settings-litblock3slot1-title").innerText =
    litblock3slot1title;
  document.querySelector("#settings-litblock3slot2-title").innerText =
    litblock3slot2title;
  document.querySelector("#settings-litblock3slot3-title").innerText =
    litblock3slot3title;
  document.querySelector("#settings-litblock3slot4-title").innerText =
    litblock3slot4title;

  // Video slide video titles
  document.querySelector("#settings-videovideo1-title").innerText = videovideo1;
  document.querySelector("#settings-videovideo2-title").innerText = videovideo2;
  document.querySelector("#settings-videovideo3-title").innerText = videovideo3;
  document.querySelector("#settings-videovideo4-title").innerText = videovideo4;

  // Tonik pdf block title
  document.querySelector("#settings-tonikpdfblock-title").innerText =
    tonikpdfblocktitle;

  // Tonik PDF block slot titles
  document.querySelector("#settings-tonikpdfblockslot1-title").innerText =
    tonikpdfblocktitleslot1;
  document.querySelector("#settings-tonikpdfblockslot2-title").innerText =
    tonikpdfblocktitleslot2;
  document.querySelector("#settings-tonikpdfblockslot3-title").innerText =
    tonikpdfblocktitleslot3;
  document.querySelector("#settings-tonikpdfblockslot4-title").innerText =
    tonikpdfblocktitleslot4;

  // Tonik video block slot titles
  document.querySelector("#settings-tonikvideoblockslot1-title").innerText =
    tonikvideoblockslot1;
  document.querySelector("#settings-tonikvideoblockslot2-title").innerText =
    tonikvideoblockslot2;
  document.querySelector("#settings-tonikvideoblockslot3-title").innerText =
    tonikvideoblockslot3;
  document.querySelector("#settings-tonikvideoblockslot4-title").innerText =
    tonikvideoblockslot4;
  document.querySelector("#settings-tonikvideoblockslot5-title").innerText =
    tonikvideoblockslot5;
  document.querySelector("#settings-tonikvideoblockslot6-title").innerText =
    tonikvideoblockslot6;
  document.querySelector("#settings-tonikvideoblockslot7-title").innerText =
    tonikvideoblockslot7;

  // Link Settings
  // Dashboard media
  document.querySelector("#settings-dashvid-link").innerText = dashvid;
  document.querySelector("#settings-dashimg1-link").innerText = dashimg1;
  document.querySelector("#settings-dashimg2-link").innerText = dashimg2;
  document.querySelector("#settings-dashimg3-link").innerText = dashimg3;
  document.querySelector("#settings-dashimg4-link").innerText = dashimg4;
  document.querySelector("#settings-dashimg5-link").innerText = dashimg5;
  document.querySelector("#settings-dashimg6-link").innerText = dashimg6;
  document.querySelector("#settings-dashimg7-link").innerText = dashimg7;

  // OID slots
  document.querySelector("#settings-oidslot1-link").innerText = oidslot1link;
  document.querySelector("#settings-oidslot2-link").innerText = oidslot2link;
  document.querySelector("#settings-oidslot3-link").innerText = oidslot3link;
  document.querySelector("#settings-oidslot4-link").innerText = oidslot4link;
  document.querySelector("#settings-oidslot5-link").innerText = oidslot5link;
  document.querySelector("#settings-oidslot6-link").innerText = oidslot6link;
  document.querySelector("#settings-oidslot7-link").innerText = oidslot7link;

  // Lit slide slot images
  document.querySelector("#settings-litblock1slot1-image").innerText =
    litblock1slot1img;
  document.querySelector("#settings-litblock1slot2-image").innerText =
    litblock1slot2img;
  document.querySelector("#settings-litblock1slot3-image").innerText =
    litblock1slot3img;
  document.querySelector("#settings-litblock1slot4-image").innerText =
    litblock1slot4img;
  document.querySelector("#settings-litblock2slot1-image").innerText =
    litblock2slot1img;
  document.querySelector("#settings-litblock2slot2-image").innerText =
    litblock2slot2img;
  document.querySelector("#settings-litblock2slot3-image").innerText =
    litblock2slot3img;
  document.querySelector("#settings-litblock2slot4-image").innerText =
    litblock2slot4img;
  document.querySelector("#settings-litblock3slot1-image").innerText =
    litblock3slot1img;
  document.querySelector("#settings-litblock3slot2-image").innerText =
    litblock3slot2img;
  document.querySelector("#settings-litblock3slot3-image").innerText =
    litblock3slot3img;
  document.querySelector("#settings-litblock3slot4-image").innerText =
    litblock3slot4img;

  // Lit slide pdf links
  document.querySelector("#settings-litblock1slot1-pdf").innerText =
    litblock1slot1pdf;
  document.querySelector("#settings-litblock1slot2-pdf").innerText =
    litblock1slot2pdf;
  document.querySelector("#settings-litblock1slot3-pdf").innerText =
    litblock1slot3pdf;
  document.querySelector("#settings-litblock1slot4-pdf").innerText =
    litblock1slot4pdf;
  document.querySelector("#settings-litblock2slot1-pdf").innerText =
    litblock2slot1pdf;
  document.querySelector("#settings-litblock2slot2-pdf").innerText =
    litblock2slot2pdf;
  document.querySelector("#settings-litblock2slot3-pdf").innerText =
    litblock2slot3pdf;
  document.querySelector("#settings-litblock2slot4-pdf").innerText =
    litblock2slot4pdf;
  document.querySelector("#settings-litblock3slot1-pdf").innerText =
    litblock3slot1pdf;
  document.querySelector("#settings-litblock3slot2-pdf").innerText =
    litblock3slot2pdf;
  document.querySelector("#settings-litblock3slot3-pdf").innerText =
    litblock3slot3pdf;
  document.querySelector("#settings-litblock3slot4-pdf").innerText =
    litblock3slot4pdf;

  // Video slide links
  document.querySelector("#settings-vidvid1-link").innerText = vidvid1link;
  document.querySelector("#settings-vidvid2-link").innerText = vidvid2link;
  document.querySelector("#settings-vidvid3-link").innerText = vidvid3link;
  document.querySelector("#settings-vidvid4-link").innerText = vidvid4link;

  // Green Story link
  document.querySelector("#settings-green-link").innerText = greenlink;

  // Tonik PDF block slot images
  document.querySelector("#settings-tonikpdf1-image").innerText = tonikpdf1;
  document.querySelector("#settings-tonikpdf2-image").innerText = tonikpdf2;
  document.querySelector("#settings-tonikpdf3-image").innerText = tonikpdf3;
  document.querySelector("#settings-tonikpdf4-image").innerText = tonikpdf4;

  // Tonik PDf block slot pdf links
  document.querySelector("#settings-tonikpdf1-link").innerText = tonikpdf1link;
  document.querySelector("#settings-tonikpdf2-link").innerText = tonikpdf2link;
  document.querySelector("#settings-tonikpdf3-link").innerText = tonikpdf3link;
  document.querySelector("#settings-tonikpdf4-link").innerText = tonikpdf4link;

  // Tonik slide video links
  document.querySelector("#settings-tonikvideo1-link").innerText = tonikvideo1;
  document.querySelector("#settings-tonikvideo2-link").innerText = tonikvideo2;
  document.querySelector("#settings-tonikvideo3-link").innerText = tonikvideo3;
  document.querySelector("#settings-tonikvideo4-link").innerText = tonikvideo4;
  document.querySelector("#settings-tonikvideo5-link").innerText = tonikvideo5;
  document.querySelector("#settings-tonikvideo6-link").innerText = tonikvideo6;
  document.querySelector("#settings-tonikvideo7-link").innerText = tonikvideo7;

  // Web slide image links
  document.querySelector("#settings-webtop-image").innerText = webtopimg;
  document.querySelector("#settings-webbottom-image").innerText = webbottomimg;

  // Build app from settings
  // Layout
  // Slide or vid
  if (storedSlideOrVid === "video") {
    s0slideState = "video";
  }

  // Text Content
  // OID slots
  document.querySelector("#scrollMenuSlot0").innerText = storedoidSlot1;
  document.querySelector("#scrollMenuSlot1").innerText = storedoidSlot2;
  document.querySelector("#scrollMenuSlot2").innerText = storedoidSlot3;
  document.querySelector("#scrollMenuSlot3").innerText = storedoidSlot4;
  document.querySelector("#scrollMenuSlot4").innerText = storedoidSlot5;
  document.querySelector("#scrollMenuSlot5").innerText = storedoidSlot6;
  document.querySelector("#scrollMenuSlot6").innerText = storedoidSlot7;

  // Literature Block Titles
  document.querySelector("#litblock1titleid").innerText = litblock1title;
  document.querySelector("#litblock2titleid").innerText = litblock2title;
  document.querySelector("#litblock3titleid").innerText = litblock3title;

  // Literature block slot titles
  document.querySelector("#litblock1slot1id").innerHTML = litblock1slot1title;
  document.querySelector("#litblock1slot2id").innerHTML = litblock1slot2title;
  document.querySelector("#litblock1slot3id").innerHTML = litblock1slot3title;
  document.querySelector("#litblock1slot4id").innerHTML = litblock1slot4title;
  document.querySelector("#litblock2slot1id").innerHTML = litblock2slot1title;
  document.querySelector("#litblock2slot2id").innerHTML = litblock2slot2title;
  document.querySelector("#litblock2slot3id").innerHTML = litblock2slot3title;
  document.querySelector("#litblock2slot4id").innerHTML = litblock2slot4title;
  document.querySelector("#litblock3slot1id").innerHTML = litblock3slot1title;
  document.querySelector("#litblock3slot2id").innerHTML = litblock3slot2title;
  document.querySelector("#litblock3slot3id").innerHTML = litblock3slot3title;
  document.querySelector("#litblock3slot4id").innerHTML = litblock3slot4title;

  // Video slide video titles
  document.querySelector("#scrollMenuSlot03").innerHTML = videovideo1;
  document.querySelector("#scrollMenuSlot13").innerHTML = videovideo2;
  document.querySelector("#scrollMenuSlot23").innerHTML = videovideo3;
  document.querySelector("#scrollMenuSlot33").innerHTML = videovideo4;

  // Tonik PDF block title
  document.querySelector("#toniklitblocktitleid").innerText =
    tonikpdfblocktitle;

  // Tonik PDF block slot titles
  document.querySelector("#toniklitblockslot1id").innerHTML =
    tonikpdfblocktitleslot1;
  document.querySelector("#toniklitblockslot2id").innerHTML =
    tonikpdfblocktitleslot2;
  document.querySelector("#toniklitblockslot3id").innerHTML =
    tonikpdfblocktitleslot3;
  document.querySelector("#toniklitblockslot4id").innerHTML =
    tonikpdfblocktitleslot4;

  // Tonik video slot titles
  document.querySelector("#scrollMenu2Slot0").innerHTML = tonikvideoblockslot1;
  document.querySelector("#scrollMenu2Slot1").innerHTML = tonikvideoblockslot2;
  document.querySelector("#scrollMenu2Slot2").innerHTML = tonikvideoblockslot3;
  document.querySelector("#scrollMenu2Slot3").innerHTML = tonikvideoblockslot4;
  document.querySelector("#scrollMenu2Slot4").innerHTML = tonikvideoblockslot5;
  document.querySelector("#scrollMenu2Slot5").innerHTML = tonikvideoblockslot6;
  document.querySelector("#scrollMenu2Slot6").innerHTML = tonikvideoblockslot7;

  // Link Settings
  // Dashboard media
  document.querySelector("#dashvid").src = dashvid;
  document.querySelector("#dashimg1").src = dashimg1;
  document.querySelector("#dashimg2").src = dashimg2;
  document.querySelector("#dashimg3").src = dashimg3;
  document.querySelector("#dashimg4").src = dashimg4;
  document.querySelector("#dashimg5").src = dashimg5;
  document.querySelector("#dashimg6").src = dashimg6;
  document.querySelector("#dashimg7").src = dashimg7;

  // OID slots
  if (
    oidslot1link === "https://norix.com/wp-content/uploads/2022/04/standby.mp4"
  ) {
    document
      .querySelector("#videoModalSlot1 .vid-coming-soon")
      .classList.add("show");
  }
  if (
    oidslot2link === "https://norix.com/wp-content/uploads/2022/04/standby.mp4"
  ) {
    document
      .querySelector("#videoModalSlot2 .vid-coming-soon")
      .classList.add("show");
  }
  if (
    oidslot3link === "https://norix.com/wp-content/uploads/2022/04/standby.mp4"
  ) {
    document
      .querySelector("#videoModalSlot3 .vid-coming-soon")
      .classList.add("show");
  }
  if (
    oidslot4link === "https://norix.com/wp-content/uploads/2022/04/standby.mp4"
  ) {
    document
      .querySelector("#videoModalSlot4 .vid-coming-soon")
      .classList.add("show");
  }
  if (
    oidslot5link === "https://norix.com/wp-content/uploads/2022/04/standby.mp4"
  ) {
    document
      .querySelector("#videoModalSlot5 .vid-coming-soon")
      .classList.add("show");
  }
  if (
    oidslot6link === "https://norix.com/wp-content/uploads/2022/04/standby.mp4"
  ) {
    document
      .querySelector("#videoModalSlot6 .vid-coming-soon")
      .classList.add("show");
  }
  if (
    oidslot7link === "https://norix.com/wp-content/uploads/2022/04/standby.mp4"
  ) {
    document
      .querySelector("#videoModalSlot7 .vid-coming-soon")
      .classList.add("show");
  }
  document.querySelector("#videoModalSlot1 video").src = oidslot1link;
  document.querySelector("#videoModalSlot2 video").src = oidslot2link;
  document.querySelector("#videoModalSlot3 video").src = oidslot3link;
  document.querySelector("#videoModalSlot4 video").src = oidslot4link;
  document.querySelector("#videoModalSlot5 video").src = oidslot5link;
  document.querySelector("#videoModalSlot6 video").src = oidslot6link;
  document.querySelector("#videoModalSlot7 video").src = oidslot7link;

  // Lit slide slot images
  document.querySelector("#litblock1slot1id").previousElementSibling.src =
    litblock1slot1img;
  document.querySelector("#litblock1slot2id").previousElementSibling.src =
    litblock1slot2img;
  document.querySelector("#litblock1slot3id").previousElementSibling.src =
    litblock1slot3img;
  document.querySelector("#litblock1slot4id").previousElementSibling.src =
    litblock1slot4img;
  document.querySelector("#litblock2slot1id").previousElementSibling.src =
    litblock2slot1img;
  document.querySelector("#litblock2slot2id").previousElementSibling.src =
    litblock2slot2img;
  document.querySelector("#litblock2slot3id").previousElementSibling.src =
    litblock2slot3img;
  document.querySelector("#litblock2slot4id").previousElementSibling.src =
    litblock2slot4img;
  document.querySelector("#litblock3slot1id").previousElementSibling.src =
    litblock3slot1img;
  document.querySelector("#litblock3slot2id").previousElementSibling.src =
    litblock3slot2img;
  document.querySelector("#litblock3slot3id").previousElementSibling.src =
    litblock3slot3img;
  document.querySelector("#litblock3slot4id").previousElementSibling.src =
    litblock3slot4img;

  // Lit slide pdf links
  document.querySelector("#a1").querySelector("iframe").src = litblock1slot1pdf;
  document.querySelector("#a2").querySelector("iframe").src = litblock1slot2pdf;
  document.querySelector("#a3").querySelector("iframe").src = litblock1slot3pdf;
  document.querySelector("#a4").querySelector("iframe").src = litblock1slot4pdf;
  document.querySelector("#b1").querySelector("iframe").src = litblock2slot1pdf;
  document.querySelector("#b2").querySelector("iframe").src = litblock2slot2pdf;
  document.querySelector("#b3").querySelector("iframe").src = litblock2slot3pdf;
  document.querySelector("#b4").querySelector("iframe").src = litblock2slot4pdf;
  document.querySelector("#c1").querySelector("iframe").src = litblock3slot1pdf;
  document.querySelector("#c2").querySelector("iframe").src = litblock3slot2pdf;
  document.querySelector("#c3").querySelector("iframe").src = litblock3slot3pdf;
  document.querySelector("#c4").querySelector("iframe").src = litblock3slot4pdf;

  // Video slide links
  document.querySelector("#videoModalSlot31 video").src = vidvid1link;
  document.querySelector("#videoModalSlot32 video").src = vidvid2link;
  document.querySelector("#videoModalSlot33 video").src = vidvid3link;
  document.querySelector("#videoModalSlot34 video").src = vidvid4link;

  // Green Story link
  document.querySelector("#greenstoryimg").src = greenlink;

  // Tonik PDF block slot images
  document.querySelector("#toniklitblockslot1id").previousElementSibling.src =
    tonikpdf1;
  document.querySelector("#toniklitblockslot2id").previousElementSibling.src =
    tonikpdf2;
  document.querySelector("#toniklitblockslot3id").previousElementSibling.src =
    tonikpdf3;
  document.querySelector("#toniklitblockslot4id").previousElementSibling.src =
    tonikpdf4;

  // Tonik PDf block slot pdf links
  document.querySelector("#ta1").querySelector("iframe").src = tonikpdf1link;
  document.querySelector("#ta2").querySelector("iframe").src = tonikpdf2link;
  document.querySelector("#ta3").querySelector("iframe").src = tonikpdf3link;
  document.querySelector("#ta4").querySelector("iframe").src = tonikpdf4link;

  // Tonik slide video links
  document.querySelector("#videoModalSlot21 video").src = tonikvideo1;
  document.querySelector("#videoModalSlot22 video").src = tonikvideo2;
  document.querySelector("#videoModalSlot23 video").src = tonikvideo3;
  document.querySelector("#videoModalSlot24 video").src = tonikvideo4;
  document.querySelector("#videoModalSlot25 video").src = tonikvideo5;
  document.querySelector("#videoModalSlot26 video").src = tonikvideo6;
  document.querySelector("#videoModalSlot27 video").src = tonikvideo7;

  // Web slide image links
  document.querySelector(
    ".slide__slide-six__linkbox-top"
  ).style.background = `url(${webtopimg}) no-repeat center center`;
  document.querySelector(
    ".slide__slide-six__linkbox-bottom"
  ).style.background = `url(${webbottomimg}) no-repeat center center`;
}

// Run kiosk
function kioskLoad() {
  // Program Variables
  const sideBar = document.querySelector(".sidebar");
  const navbox = document.querySelector(".sidebar__navbox");
  const navboxText = document.querySelector(".sidebar__navright");
  const slideZero = document.querySelector(".slide__slide-zero");
  const slideOne = document.querySelector(".slide__slide-one");
  const slideTwo = document.querySelector(".slide__slide-two");
  const slideThree = document.querySelector(".slide__slide-three");
  const slideFour = document.querySelector(".slide__slide-four");
  const slideFive = document.querySelector(".slide__slide-five");
  const slideSix = document.querySelector(".slide__slide-six");
  const dotZero = document.querySelector("#dot-zero");
  const dotOne = document.querySelector("#dot-one");
  const dotTwo = document.querySelector("#dot-two");
  const dotThree = document.querySelector("#dot-three");
  const dotFour = document.querySelector("#dot-four");
  const dotFive = document.querySelector("#dot-five");
  const dotSix = document.querySelector("#dot-six");
  const dotZeroText = document.querySelector("#dotZeroText");
  const dotOneText = document.querySelector("#dotOneText");
  const dotTwoText = document.querySelector("#dotTwoText");
  const dotThreeText = document.querySelector("#dotThreeText");
  const dotFourText = document.querySelector("#dotFourText");
  const dotFiveText = document.querySelector("#dotFiveText");
  const dotSixText = document.querySelector("#dotSixText");
  let acreCount = document.querySelector("#acreCount");
  let sqfCount = document.querySelector("#sqfCount");
  let solarCount = document.querySelector("#solarCount");
  const litBox1 = document.querySelector("#litBox1");
  const litBox2 = document.querySelector("#litBox2");
  const slideTwoBox = document.querySelector(
    ".slide__slide-two .slide__text-box"
  );
  const slideFourBox = document.querySelector(".slide__slide-four__infoGBox");
  const kioskModal = document.querySelector("#masterModal");
  const pdfBoxes = document.querySelectorAll(".kioskModal__content__inner");
  const settingsTrigger = document.querySelector(".settings-modal");
  let activeSlide = 0;
  let videoplaying = false;
  const slideRecord = {
    0: slideZero,
    1: slideOne,
    2: slideTwo,
    3: slideThree,
    4: slideFour,
    5: slideFive,
    6: slideSix,
  };
  const slideIDRecord = {
    "dot-zero": [slideZero, dotZero, dotZeroText],
    "dot-one": [slideOne, dotOne, dotOneText],
    "dot-two": [slideTwo, dotTwo, dotTwoText],
    "dot-three": [slideThree, dotThree, dotThreeText],
    "dot-four": [slideFour, dotFour, dotFourText],
    "dot-five": [slideFive, dotFive, dotFiveText],
    "dot-six": [slideSix, dotSix, dotSixText],
  };
  const slideOneTopBox = document.querySelector(
    ".slide__slide-one__text-box__top"
  );
  const slide2PDFBoxes = document.querySelectorAll(
    ".kioskModal__content__inner-pdf"
  );
  let totalAcres = 22;
  const totalSQF = 205;
  const totalSolPanel = 3444;
  const keyboardBox = document.querySelector(
    ".kioskModal__content__inner__top-bottom-keyboard"
  );
  const slideZeroImgBox = document.querySelector(
    ".slide__slide-zero__imagebox"
  );
  const slideZeroVidBox = document.querySelector(
    ".slide__slide-zero__videobox"
  );
  const slideZeroImgs = document.querySelectorAll(
    ".slide__slide-zero__imagebox img"
  );
  const clickRecord = {
    dotZeroText: "dot-zero",
    dotOneText: "dot-one",
    dotTwoText: "dot-two",
    dotThreeText: "dot-three",
    dotFourText: "dot-four",
    dotFiveText: "dot-five",
    dotSixText: "dot-six",
  };
  let sliderActive = false;
  const sidenavDots = document.querySelectorAll(".sidebar__navbox__dot");
  const sidenavText = document.querySelectorAll(".sidebar__navbox__dot-text");
  const sidebarHeading = document.querySelector("#sidebarHeading");
  const webModalTrigger = document.querySelector(".slide__slide-six__linkbox");
  const slideZeroVid = document.querySelector(".slide-zero-video");
  const settingsBoxes = document.querySelectorAll(
    ".kioskModal__content__inner__top-top"
  );
  let settingsPanelActive = false;
  let activeBox = document.querySelector("#pwPanelBox p");
  const setBoxTouch = document.querySelector(
    ".kioskModal__content__inner__top-top.inner"
  );
  const settingsButtons = document.querySelector(".kioskModal__buttonrow");
  const kioskButtonSave = document.querySelector("#kioskButtonSave");
  const kioskButtonCancel = document.querySelector("#kioskButtonCancel");
  const kioskButtonReset = document.querySelector("#kioskButtonReset");
  const kioskButtonScroll = document.querySelector("#kioskButtonScroll");
  const settingInputText = document.querySelectorAll(
    ".kioskModal__content__inner__top-top-text-input-text"
  );
  const slideFiveBoxTop = document.querySelector(".slide__slide-five__box-top");
  const settingsScrollToTop = document.querySelectorAll(
    ".kioskModal__content__inner_top-top-scroll"
  );
  const settingsScrollBox = document.querySelector(
    ".kioskModal__content__inner__top-top-scrollBox"
  );
  const slideFiveLitBox = document.querySelector(".slide__slide-five__lit-box");
  const slideFiveTouch = document.querySelector("#slideFiveTouch");
  const gestureZone = document.getElementById("slideOneTouch");
  const gestureZone2 = document.getElementById("slideThreeTouch");
  const slideThreeZone = document.querySelector(
    ".slide__slide-three .slide__text-box"
  );
  const slideHeader = document.querySelector(".slide__slide-three__header p");

  // Drag guards
  winCon.addEventListener("touchstart", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });

  kioskModal.addEventListener("touchstart", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });

  // SIDEBAR
  function sideBarScroller(targetDot, clickTarget, direction) {
    if (direction === "up") {
      slideRecord[activeSlide].classList.remove(
        "show",
        "noshow",
        "show2",
        "noshow2"
      );
      slideRecord[activeSlide].classList.add("noshow");
      clickTarget.classList.remove("show", "noshow", "show2", "noshow2");
      clickTarget.classList.add("show");
    } else {
      slideRecord[activeSlide].classList.remove(
        "show",
        "noshow",
        "show2",
        "noshow2"
      );
      slideRecord[activeSlide].classList.add("noshow2");
      clickTarget.classList.remove("show", "noshow", "show2", "noshow2");
      clickTarget.classList.add("show2");
    }
    sidenavDots.forEach((i) => {
      i.classList.remove("filled");
    });
    sidenavText.forEach((i) => {
      i.classList.remove("active");
    });
    slideIDRecord[targetDot][1].classList.add("filled");
    slideIDRecord[targetDot][2].classList.add("active");
    activeSlide = Number(clickTarget.dataset.slidenum);
    if (activeSlide === 0) {
      slideZeroSlideShow();
    } else {
      slideZeroSlideStopper();
    }
    if (activeSlide === 1) {
      slideOneCounters();
    } else {
      slideOneDeactive();
    }
    if (activeSlide === 2) {
      slideTwoSlider();
    } else {
      slideTwoDeslider();
    }
    if (activeSlide === 3) {
      slideThreeActive();
    } else {
      slideThreeDeactive();
    }
    if (activeSlide === 4) {
      slideFourActive();
    } else {
      slideFourDeactive();
    }
    if (activeSlide === 5) {
      slideFiveActive();
    } else {
      slideFiveDeactive();
    }
    if (activeSlide === 6) {
      slideSixActive();
    } else {
      slideSixDeactive();
    }
  }

  // Event listener for dot clicks
  navbox.addEventListener("touchstart", (e) => {
    const clickTarget = e.target.id;
    if (clickTarget) {
      const targetDot = Number(e.target.dataset.dotnum);
      let clickTargetConv = slideIDRecord[clickTarget][0];
      if (targetDot < activeSlide) {
        sideBarScroller(clickTarget, clickTargetConv, "down");
      } else {
        sideBarScroller(clickTarget, clickTargetConv, "up");
      }
    }
  });

  // Event listener for dot text clicks
  navboxText.addEventListener("touchstart", (e) => {
    let clickTarget = e.target.id;
    clickTarget = clickRecord[clickTarget];
    if (clickTarget) {
      const targetDot = Number(e.target.dataset.dotnum);
      let clickTargetConv = slideIDRecord[clickTarget][0];
      if (targetDot < activeSlide) {
        sideBarScroller(clickTarget, clickTargetConv, "down");
      } else {
        sideBarScroller(clickTarget, clickTargetConv, "up");
      }
    }
  });

  // Swipe listener for sidebar
  let touchstartYSide = 0;
  let touchendYSide = 0;

  sideBar.addEventListener(
    "touchstart",
    function (event) {
      touchstartYSide = event.changedTouches[0].screenY;
      event.preventDefault();
      event.stopPropagation();
    },
    false
  );

  sideBar.addEventListener(
    "touchend",
    function (event) {
      touchendYSide = event.changedTouches[0].screenY;
      handleGestureSide();
    },
    false
  );

  function handleGestureSide() {
    let dSide = touchstartYSide - touchendYSide;
    let targetSlide;
    const slideKey = {
      0: [slideZero, "dot-zero"],
      1: [slideOne, "dot-one"],
      2: [slideTwo, "dot-two"],
      3: [slideThree, "dot-three"],
      4: [slideFour, "dot-four"],
      5: [slideFive, "dot-five"],
      6: [slideSix, "dot-six"],
    };
    if (dSide > 25 || dSide < -25) {
      if (dSide < 0) {
        targetSlide = activeSlide - 1;
        if (targetSlide === -1) {
          targetSlide = 5;
        } else {
          sideBarScroller(
            slideKey[targetSlide][1],
            slideKey[targetSlide][0],
            "down"
          );
        }
      } else {
        targetSlide = activeSlide + 1;
        if (targetSlide === 7) {
          targetSlide = 1;
        } else {
          sideBarScroller(
            slideKey[targetSlide][1],
            slideKey[targetSlide][0],
            "up"
          );
        }
      }
    }
  }

  // Heading tap animation
  sidebarHeading.addEventListener("touchstart", (e) => {
    sidebarHeading.classList.add("clicked");
  });

  sidebarHeading.addEventListener("touchend", (e) => {
    sidebarHeading.classList.remove("clicked");
  });

  // SLIDE ZERO
  // Image slideshow
  let imgLens = slideZeroImgs.length;
  let nextSlide;
  let slideZeroSlider;
  let activeSlideImg;
  let nextSlideImg;

  function slideZeroSlideShow() {
    if (!sliderActive) {
      slideZeroSlider = setInterval(() => {
        sliderActive = true;
        for (let i = 0; i < imgLens; i++) {
          if (slideZeroImgs[i].classList.contains("show")) {
            activeSlideImg = slideZeroImgs[i];
            nextSlide = i + 1;
            if (nextSlide === imgLens) nextSlide = 0;
            nextSlideImg = slideZeroImgs[nextSlide];
          }
        }
        activeSlideImg.classList.remove("show");
        nextSlideImg.classList.add("show");
      }, 10000);
    }
  }

  function slideZeroSlideStopper() {
    sliderActive = false;
    clearInterval(slideZeroSlider);
  }

  // Touch greyscale filter and image advancement / move to video box
  function handleSlideGestures(distance, video = false) {
    slideZeroSlideStopper();
    for (let i = 0; i < imgLens; i++) {
      if (slideZeroImgs[i].classList.contains("show")) {
        activeSlideImg = slideZeroImgs[i];
        if (distance > 0) {
          nextSlide = i + 1;
          if (nextSlide === imgLens) nextSlide = 0;
        } else {
          nextSlide = i - 1;
          if (nextSlide === -1) nextSlide = imgLens - 1;
        }
        nextSlideImg = slideZeroImgs[nextSlide];
      }
    }
    activeSlideImg.classList.remove("show");
    nextSlideImg.classList.add("show");
    if (video) {
      slideZeroImgBox.classList.toggle("hide");
      slideZeroVidBox.classList.toggle("hide");
      slideZeroVid.load();
      slideZeroVid.play();
    } else {
      slideZeroSlideShow();
      slideZeroVid.pause();
    }
  }

  slideZeroImgs.forEach((i) => {
    let touchstartXSlider;
    let touchendXSlider;
    let touchstartYSlider;
    let touchendYSlider;
    i.addEventListener("touchstart", (e) => {
      e.target.classList.add("filterer");
      touchstartXSlider = e.changedTouches[0].screenX;
      touchstartYSlider = e.changedTouches[0].screenY;
    });
    i.addEventListener("touchend", (e) => {
      e.target.classList.remove("filterer");
      touchendXSlider = e.changedTouches[0].screenX;
      touchendYSlider = e.changedTouches[0].screenY;
      slideGestureDist = touchstartXSlider - touchendXSlider;
      slideGestureDistY = touchstartYSlider - touchendYSlider;
      if (slideGestureDist < -100 || slideGestureDist > 100) {
        handleSlideGestures(slideGestureDist);
      }
      if (slideGestureDistY < -100 || slideGestureDistY > 100) {
        handleSlideGestures(slideGestureDistY, true);
      }
    });
  });

  let touchstartYVid;
  let touchendYVid;
  let slideZeroVidState = false;

  slideZeroVid.addEventListener("touchstart", (e) => {
    touchstartYVid = e.changedTouches[0].screenY;
    if (slideZeroVidState) {
      slideZeroVid.play();
      slideZeroVidState = false;
    } else {
      slideZeroVid.pause();
      slideZeroVidState = true;
    }
  });

  slideZeroVid.addEventListener("touchend", (e) => {
    touchendYVid = e.changedTouches[0].screenY;
    slideVidDist = touchstartYVid - touchendYVid;
    if (slideVidDist < -100 || slideVidDist > 100) {
      slideZeroVid.pause();
      slideZeroImgBox.classList.toggle("hide");
      slideZeroVidBox.classList.toggle("hide");
      slideZeroSlideShow();
    }
  });

  // SLIDE ONE
  function slideOneDeactive() {
    slideOneTopBox.classList.add("noshow");
    slideOneTopBox.classList.remove("show");
    gestureZone.classList.add("noshow");
    gestureZone.classList.remove("show");
  }

  // Counter animations
  // Counter animation function
  function counterAnimations() {
    slideOneTopBox.classList.remove("noshow");
    slideOneTopBox.classList.add("show");
    gestureZone.classList.remove("noshow");
    gestureZone.classList.add("show");

    // Acre Count
    let acreNum = 0;
    let acreCounter = setInterval(() => {
      acreNum++;
      acreCount.innerText = acreNum;
      if (acreNum === totalAcres) clearInterval(acreCounter);
    }, 25);

    // SQF Count
    let sqfNum = 0;
    let sqfCounter = setInterval(() => {
      if (sqfNum <= totalSQF - 15) {
        sqfNum = sqfNum + 10;
      } else {
        sqfNum++;
      }
      sqfString = String(sqfNum) + "K";
      sqfCount.innerText = sqfString;
      if (sqfNum === totalSQF) clearInterval(sqfCounter);
    }, 25);

    // Solar Count
    let solarNum = 0;
    let solarCounter = setInterval(() => {
      if (solarNum <= totalSolPanel - 110) {
        solarNum = solarNum + 100;
      } else if (
        solarNum > totalSolPanel - 50 &&
        solarNum <= totalSolPanel - 15
      ) {
        solarNum = solarNum + 10;
      } else {
        solarNum++;
      }
      let solarString = String(solarNum);
      if (solarNum > 999) {
        solarString = solarString.split("");
        solarString =
          solarString[0] +
          "," +
          solarString[1] +
          solarString[2] +
          solarString[3];
      }
      solarCount.innerText = solarString;
      if (solarNum === totalSolPanel) clearInterval(solarCounter);
    }, 25);
  }

  // On dot click
  function slideOneCounters() {
    acreCount.innerText = "0";
    sqfCount.innerText = "0";
    solarCount.innerText = "0";
    counterAnimations();
  }

  // Animated number tap effects
  acreCount.addEventListener("touchstart", (e) => {
    acreCount.classList.add("wiggler");
    setTimeout(() => {
      acreCount.classList.remove("wiggler");
    }, 1000);
  });

  sqfCount.addEventListener("touchstart", (e) => {
    sqfCount.classList.add("wiggler");
    setTimeout(() => {
      sqfCount.classList.remove("wiggler");
    }, 1000);
  });

  solarCount.addEventListener("touchstart", (e) => {
    solarCount.classList.add("wiggler");
    setTimeout(() => {
      solarCount.classList.remove("wiggler");
    }, 1000);
  });

  // Slide one scroll
  // Gestures and effects
  let touchstartY = 0;
  let touchendY = 0;
  let touchid;
  let swipeDistance;
  let touchStop1 = false;
  let touchStop2 = false;
  let touchStop3 = false;
  let touchStop4 = false;
  let touchStop5 = false;
  let touchPoint;
  let initalDirection;
  let nowDirection;

  gestureZone.addEventListener(
    "touchstart",
    function (event) {
      swipeDistance = 0;
      touchPoint = 0;
      initalDirection = "";
      nowDirection = "";
      touchstartY = event.changedTouches[0].screenY;
    },
    false
  );

  gestureZone.addEventListener(
    "touchmove",
    (e) => {
      swipeDistance = touchstartY - e.changedTouches[0].screenY;
      if (swipeDistance > touchPoint) {
        initalDirection = "up";
      } else {
        initalDirection = "down";
      }
      if (!touchStop1) {
        if (swipeDistance < -10 || swipeDistance > 10) {
          touchStop1 = true;
          handleGesture(swipeDistance);
        }
      }
      if (!touchStop2) {
        if (
          (swipeDistance > -140 && swipeDistance < -70) ||
          (swipeDistance > 70 && swipeDistance < 140)
        ) {
          touchStop2 = true;
          handleGesture(swipeDistance);
        }
      }
      if (!touchStop3) {
        if (
          (swipeDistance > -210 && swipeDistance < -140) ||
          (swipeDistance > 140 && swipeDistance < 210)
        ) {
          touchStop3 = true;
          handleGesture(swipeDistance);
        }
      }
      if (!touchStop4) {
        if (
          (swipeDistance > -280 && swipeDistance < -210) ||
          (swipeDistance > 210 && swipeDistance < 280)
        ) {
          touchStop4 = true;
          handleGesture(swipeDistance);
        }
      }
      if (!touchStop5) {
        if (
          (swipeDistance > -350 && swipeDistance < -280) ||
          (swipeDistance > 280 && swipeDistance < 350)
        ) {
          touchStop5 = true;
          handleGesture(swipeDistance);
        }
      }
      if (nowDirection !== initalDirection && nowDirection !== "") {
        touchstartY = e.changedTouches[0].screenY;
        if (touchStop1) touchStop1 = false;
        if (touchStop2) touchStop2 = false;
        if (touchStop3) touchStop3 = false;
        if (touchStop4) touchStop4 = false;
        if (touchStop5) touchStop5 = false;
      }
      touchPoint = swipeDistance;
      nowDirection = initalDirection;
    },
    false
  );

  gestureZone.addEventListener(
    "touchend",
    function (event) {
      touchStop1 = false;
      touchStop2 = false;
      touchStop3 = false;
      touchStop4 = false;
      touchStop5 = false;
      touchPoint = 0;
      touchendY = event.changedTouches[0].screenY;
      touchid = event.target.id;
      touchstate = event.target.dataset.currentpos;
      handleGesture(touchstartY - touchendY, "stop");
    },
    false
  );

  function handleGesture(distance, stopper = "go") {
    if (stopper === "go") {
      slideOneScroller(distance);
    } else {
      if (distance > -5 && distance < 5) {
        videoModalPopup();
      }
    }
  }

  function slideOneScroller(d) {
    let allSlots = document.querySelectorAll("#slideOneTouch p");
    for (let i of allSlots) {
      let slotPOS = i.dataset.currentpos;
      if (slotPOS === "0") {
        if (d > 0) {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu", "scrollMenuSlotSix", "scrollUp06");
          i.dataset.currentpos = "6";
        } else {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu", "scrollMenuSlotOne", "scrollDown01");
          i.dataset.currentpos = "1";
        }
      }
      if (slotPOS === "1") {
        if (d > 0) {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu", "scrollMenuSlotZero", "scrollUp10");
          i.dataset.currentpos = "0";
        } else {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu", "scrollMenuSlotTwo", "scrollDown12");
          i.dataset.currentpos = "2";
        }
      }
      if (slotPOS === "2") {
        if (d > 0) {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu", "scrollMenuSlotOne", "scrollUp21");
          i.dataset.currentpos = "1";
        } else {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu", "scrollMenuSlotThree", "scrollDown23");
          i.dataset.currentpos = "3";
        }
      }
      if (slotPOS === "3") {
        if (d > 0) {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu", "scrollMenuSlotTwo", "scrollUp32");
          i.dataset.currentpos = "2";
        } else {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu", "scrollMenuSlotFour", "scrollDown34");
          i.dataset.currentpos = "4";
        }
      }
      if (slotPOS === "4") {
        if (d > 0) {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu", "scrollMenuSlotThree", "scrollUp43");
          i.dataset.currentpos = "3";
        } else {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu", "scrollMenuSlotFive", "scrollDown45");
          i.dataset.currentpos = "5";
        }
      }
      if (slotPOS === "5") {
        if (d > 0) {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu", "scrollMenuSlotFour", "scrollUp54");
          i.dataset.currentpos = "4";
        } else {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu", "scrollMenuSlotSix", "scrollDown56");
          i.dataset.currentpos = "6";
        }
      }
      if (slotPOS === "6") {
        if (d > 0) {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu", "scrollMenuSlotFive", "scrollUp65");
          i.dataset.currentpos = "5";
        } else {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu", "scrollMenuSlotZero");
          i.dataset.currentpos = "0";
        }
      }
    }
  }

  // Video modal triggers
  function videoModalPopup() {
    let touchfind = "#" + touchid;
    let touchfinder = document.querySelector(touchfind);
    if (
      touchfinder.classList.contains("scrollMenu") ||
      touchfinder.classList.contains("scrollMenu2")
    ) {
      kioskModal.classList.remove("noshow");
      kioskModal.classList.remove("noshow2");
      kioskModal.classList.add("show");
      let targetVideo = "#" + touchfinder.dataset.videoid;
      document.querySelector(targetVideo).classList.remove("noshow");
      document.querySelector(targetVideo).classList.add("show");
      document.querySelector(targetVideo).children[0].classList.add("show");
      let kioskTitleChange = document.querySelector(".kioskModal__content h2");
      kioskTitleChange.innerText = touchfinder.innerText;
      videoplaying = true;
      const vidBox = document.querySelector(
        ".kioskModal__content__inner.show video"
      );
      vidBox.load();
      vidBox.play();
    }
  }

  // SLIDE TWO
  // Slide two scroll
  let touchstartYSlide2 = 0;
  let touchendYSlide2 = 0;
  let currentTouch = 0;
  let nextTouch = 0;
  let scrollPOS = 0;

  slideTwoBox.addEventListener(
    "touchstart",
    (e) => {
      touchstartYSlide2 = e.changedTouches[0].screenY;
    },
    false
  );

  slideTwoBox.addEventListener("touchmove", (e) => {
    currentTouch = touchstartYSlide2 - e.changedTouches[0].screenY;
    if (currentTouch > nextTouch) {
      scrollPOS = scrollPOS + 10;
    } else {
      scrollPOS = scrollPOS - 10;
      if (scrollPOS <= 0) scrollPOS = 0;
    }
    slideTwoBox.scrollTo(0, scrollPOS);
    nextTouch = currentTouch;
  });

  slideTwoBox.addEventListener(
    "touchend",
    (e) => {
      touchendYSlide2 = e.changedTouches[0].screenY;
      handleGestureSlide2(e);
    },
    false
  );

  function handleGestureSlide2(e) {
    const slide2SwipeDist = touchstartYSlide2 - touchendYSlide2;
    if (slide2SwipeDist > -5 || slide2SwipeDist < 5) {
      const clickID = e.target.dataset.modalid;
      let kioskTitleChange = document.querySelector(".kioskModal__content h2");
      if (clickID) {
        kioskModal.classList.remove("noshow");
        kioskModal.classList.remove("noshow2");
        kioskModal.classList.add("show");
        if (clickID !== "settingspanel") {
          let targetModal = "#" + clickID;
          const targetGet = document.querySelector(targetModal);
          targetGet.classList.remove("noshow");
          targetGet.classList.add("show");
          document
            .querySelector(targetModal)
            .children[0].children[0].classList.add("show");
        }
        let kioskTitle = e.target.parentElement.querySelector(
          ".slide__slide-two__lit-box__bottom__grid__text"
        ).innerText;
        kioskTitleArr = kioskTitle.split("\n");
        if (kioskTitleArr.length > 1) {
          kioskTitle = "";
          for (let i of kioskTitleArr) {
            kioskTitle += i + " ";
          }
        }
        kioskTitleChange.innerText = kioskTitle;
      }
    }
  }

  // Slide two effects
  function slideTwoSlider() {
    setTimeout(() => {
      litBox1.classList.remove("unslide");
      litBox1.classList.add("slide");
    }, 0);
    setTimeout(() => {
      litBox2.classList.remove("unslide2");
      litBox2.classList.add("slide2");
    }, 350);
  }

  function slideTwoDeslider() {
    litBox1.classList.remove("slide");
    litBox1.classList.add("unslide");
    litBox2.classList.remove("slide2");
    litBox2.classList.add("unslide2");
    litBox1.scrollIntoView();
  }

  // Master modal closers
  let touchstartXKiosk = 0;
  let touchendXKiosk = 0;

  kioskModal.addEventListener(
    "touchstart",
    function (event) {
      touchstartXKiosk = event.changedTouches[0].screenX;
      const vidBox = document.querySelector(
        ".kioskModal__content__inner.show video"
      );
      if (vidBox && videoplaying) {
        vidBox.pause();
        videoplaying = false;
      } else {
        if (vidBox) {
          vidBox.play();
          videoplaying = true;
        }
      }
    },
    false
  );

  kioskModal.addEventListener(
    "touchend",
    function (event) {
      if (event.changedTouches.length > 0) {
        touchendXKiosk = event.changedTouches[0].screenX;
        handleGestureKiosk(event);
      } else {
        handleGestureKiosk(event, true);
      }
    },
    false
  );

  function handleGestureKiosk(e, buttonTrigger = false) {
    let clickGet;
    let closer = false;
    if (buttonTrigger) {
      touchstartXKiosk = 0;
      touchendXKiosk = 0;
      closer = true;
    }
    const kioskSwipeDist = touchstartXKiosk - touchendXKiosk;
    if (closer) {
      clickGet = true;
    } else {
      clickGet = e.target.classList.contains("kioskModal__content__close");
    }
    const vidBox = document.querySelector(
      ".kioskModal__content__inner.show video"
    );
    if (clickGet && (kioskSwipeDist > -5 || kioskSwipeDist < 5)) {
      if (vidBox && videoplaying) {
        vidBox.pause();
        videoplaying = false;
      }
      kioskModal.classList.remove("show");
      kioskModal.classList.add("noshow");
      setTimeout(() => {
        for (let i of pdfBoxes) {
          i.classList.add("noshow");
          i.classList.remove("show");
        }
      }, 500);
    } else if (kioskSwipeDist < -100 || kioskSwipeDist > 100) {
      if (kioskSwipeDist > 0) {
        if (videoplaying) {
          vidBox.pause();
          videoplaying = false;
        }
        kioskModal.classList.remove("show");
        kioskModal.classList.add("noshow");
        setTimeout(() => {
          for (let i of pdfBoxes) {
            i.classList.add("noshow");
            i.classList.remove("show");
          }
        }, 500);
      } else {
        if (vidBox && videoplaying) {
          vidBox.pause();
          videoplaying = false;
        }
        kioskModal.classList.remove("show");
        kioskModal.classList.add("noshow2");
        setTimeout(() => {
          for (let i of pdfBoxes) {
            i.classList.add("noshow");
            i.classList.remove("show");
          }
        }, 500);
      }
      clickGet = true;
    } else {
    }
    if (clickGet && settingsPanelActive) {
      settingsBoxes[0].classList.add("show");
      settingsBoxes[1].classList.remove("show");
      settingsScrollToTop.forEach((i) => {
        i.classList.remove("show");
      });
      settingsPanelActive = false;
    }
  }

  // Event listeners to scroll PDF boxes
  slide2PDFBoxes.forEach((i) => {
    let touchstartYPDF;
    let touchendYPDF;
    i.addEventListener(
      "touchstart",
      (e) => {
        touchstartYPDF = e.changedTouches[0].screenY;
      },
      false
    );

    i.addEventListener(
      "touchend",
      (e) => {
        touchendYPDF = e.changedTouches[0].screenY;
        handlePDFGesture();
      },
      false
    );

    function handlePDFGesture() {
      let touchdistYPDF = touchstartYPDF - touchendYPDF;
      let currentScroll = i.scrollTop;
      if (touchdistYPDF < -25 || touchdistYPDF > 25) {
        if (touchdistYPDF > 0) {
          i.scrollTo({
            top: currentScroll + 100,
            left: 0,
            behavior: "smooth",
          });
        } else {
          i.scrollTo({
            top: currentScroll - 100,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    }
  });

  // SLIDE THREE
  function slideThreeActive() {
    slideThreeZone.classList.add("show");
    gestureZone2.classList.add("show");
    slideHeader.classList.add("show");
  }

  function slideThreeDeactive() {
    slideThreeZone.classList.remove("show");
    gestureZone2.classList.remove("show");
    slideHeader.classList.remove("show");
  }

  let touchstartY3 = 0;
  let touchendY3 = 0;
  let touchid3;
  let swipeDistance3;
  let touchStop13 = false;
  let touchStop23 = false;
  let touchStop33 = false;
  let touchStop43 = false;
  let touchPoint3;
  let initalDirection3;
  let nowDirection3;

  gestureZone2.addEventListener(
    "touchstart",
    function (event) {
      swipeDistance3 = 0;
      touchPoint3 = 0;
      initalDirection3 = "";
      nowDirection3 = "";
      touchstartY3 = event.changedTouches[0].screenY;
    },
    false
  );

  gestureZone2.addEventListener(
    "touchmove",
    (e) => {
      swipeDistance3 = touchstartY3 - e.changedTouches[0].screenY;
      if (swipeDistance3 > touchPoint3) {
        initalDirection3 = "up";
      } else {
        initalDirection3 = "down";
      }
      if (!touchStop13) {
        if (swipeDistance3 < -10 || swipeDistance3 > 10) {
          touchStop13 = true;
          handleGesture3(swipeDistance3);
        }
      }
      if (!touchStop23) {
        if (
          (swipeDistance3 > -125 && swipeDistance3 < -70) ||
          (swipeDistance3 > 70 && swipeDistance3 < 125)
        ) {
          touchStop23 = true;
          handleGesture3(swipeDistance3);
        }
      }
      if (!touchStop33) {
        if (
          (swipeDistance3 > -250 && swipeDistance3 < -125) ||
          (swipeDistance3 > 125 && swipeDistance3 < 250)
        ) {
          touchStop33 = true;
          handleGesture3(swipeDistance3);
        }
      }
      if (!touchStop43) {
        if (
          (swipeDistance3 > -400 && swipeDistance3 < -250) ||
          (swipeDistance3 > 250 && swipeDistance3 < 400)
        ) {
          touchStop43 = true;
          handleGesture3(swipeDistance3);
        }
      }
      if (nowDirection3 !== initalDirection3 && nowDirection3 !== "") {
        touchstartY3 = e.changedTouches[0].screenY;
        if (touchStop13) touchStop13 = false;
        if (touchStop23) touchStop23 = false;
        if (touchStop33) touchStop33 = false;
        if (touchStop43) touchStop43 = false;
      }
      touchPoint3 = swipeDistance3;
      nowDirection3 = initalDirection3;
    },
    false
  );

  gestureZone2.addEventListener(
    "touchend",
    function (event) {
      touchStop13 = false;
      touchStop23 = false;
      touchStop33 = false;
      touchStop43 = false;
      touchPoint3 = 0;
      touchendY3 = event.changedTouches[0].screenY;
      touchid3 = event.target.id;
      touchstate3 = event.target.dataset.currentpos;
      handleGesture3(touchstartY3 - touchendY3, "stop");
    },
    false
  );

  function handleGesture3(distance3, stopper3 = "go") {
    if (stopper3 === "go") {
      slideThreeScroller(distance3);
    } else {
      if (distance3 > -5 && distance3 < 5) {
        videoModalPopup3();
      }
    }
  }

  function slideThreeScroller(d) {
    let allSlots = document.querySelectorAll("#slideThreeTouch p");
    for (let i of allSlots) {
      let slotPOS3 = i.dataset.currentpos;
      if (slotPOS3 === "0") {
        if (d > 0) {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu", "scrollMenu3SlotThree", "scrollUp033");
          i.dataset.currentpos = "3";
        } else {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu", "scrollMenu3SlotOne", "scrollDown013");
          i.dataset.currentpos = "1";
        }
      }
      if (slotPOS3 === "1") {
        if (d > 0) {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu", "scrollMenu3SlotZero", "scrollUp103");
          i.dataset.currentpos = "0";
        } else {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu", "scrollMenu3SlotTwo", "scrollDown123");
          i.dataset.currentpos = "2";
        }
      }
      if (slotPOS3 === "2") {
        if (d > 0) {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu", "scrollMenu3SlotOne", "scrollUp213");
          i.dataset.currentpos = "1";
        } else {
          i.setAttribute("class", "");
          i.classList.add(
            "scrollMenu",
            "scrollMenu3SlotThree",
            "scrollDown233"
          );
          i.dataset.currentpos = "3";
        }
      }
      if (slotPOS3 === "3") {
        if (d > 0) {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu", "scrollMenu3SlotTwo", "scrollUp323");
          i.dataset.currentpos = "2";
        } else {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu", "scrollMenu3SlotZero", "scrollDown303");
          i.dataset.currentpos = "0";
        }
      }
    }
  }

  // Video modal triggers
  function videoModalPopup3() {
    let touchfind3 = "#" + touchid3;
    let touchfinder3 = document.querySelector(touchfind3);
    if (
      touchfinder3.classList.contains("scrollMenu") ||
      touchfinder3.classList.contains("scrollMenu2")
    ) {
      kioskModal.classList.remove("noshow");
      kioskModal.classList.remove("noshow2");
      kioskModal.classList.add("show");
      let targetVideo = "#" + touchfinder3.dataset.videoid;
      document.querySelector(targetVideo).classList.remove("noshow");
      document.querySelector(targetVideo).classList.add("show");
      document.querySelector(targetVideo).children[0].classList.add("show");
      let kioskTitleChange = document.querySelector(".kioskModal__content h2");
      kioskTitleChange.innerText = touchfinder3.innerText;
      videoplaying = true;
      const vidBox = document.querySelector(
        ".kioskModal__content__inner.show video"
      );
      vidBox.load();
      vidBox.play();
    }
  }

  // SLIDE FOUR
  // Effects
  function slideFourActive() {
    slideFourBox.classList.add("show");
  }

  function slideFourDeactive() {
    slideFourBox.classList.remove("show");
    slideFourBox.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  // Touch actions
  let touchstartYinfoG = 0;
  let currentTouchinfoG = 0;
  let nextTouchinfoG = 0;
  let scrollPOSinfoG = 0;

  slideFourBox.addEventListener(
    "touchstart",
    (e) => {
      touchstartYinfoG = e.changedTouches[0].screenY;
    },
    false
  );

  slideFourBox.addEventListener("touchmove", (e) => {
    currentTouchinfoG = touchstartYinfoG - e.changedTouches[0].screenY;
    if (currentTouchinfoG > nextTouchinfoG) {
      scrollPOSinfoG = scrollPOSinfoG + 25;
      if (scrollPOSinfoG >= 1650) scrollPOSinfoG = 1650;
    } else {
      scrollPOSinfoG = scrollPOSinfoG - 25;
      if (scrollPOSinfoG <= 0) scrollPOSinfoG = 0;
    }
    slideFourBox.scrollTo(0, scrollPOSinfoG);
    nextTouchinfoG = currentTouchinfoG;
  });

  // SLIDE FIVE
  function slideFiveActive() {
    slideFiveLitBox.classList.remove("unslide");
    slideFiveLitBox.classList.add("slide");
    slideFiveTouch.classList.add("show");
  }

  function slideFiveDeactive() {
    slideFiveLitBox.classList.remove("slide");
    slideFiveLitBox.classList.add("unslide");
    slideFiveTouch.classList.remove("show");
  }

  // Top box pdf modal trigger
  function handleGestureSlide5(e) {
    const clickID = e.target.dataset.modalid;
    let kioskTitleChange = document.querySelector(".kioskModal__content h2");
    if (clickID) {
      kioskModal.classList.remove("noshow");
      kioskModal.classList.remove("noshow2");
      kioskModal.classList.add("show");
      if (clickID !== "settingspanel") {
        let targetModal = "#" + clickID;
        const targetGet = document.querySelector(targetModal);
        targetGet.classList.remove("noshow");
        targetGet.classList.add("show");
        document
          .querySelector(targetModal)
          .children[0].children[0].classList.add("show");
      }
      let kioskTitle = e.target.parentElement.querySelector(
        ".slide__slide-five__lit-box__bottom__grid__text"
      ).innerText;
      kioskTitleArr = kioskTitle.split("\n");
      if (kioskTitleArr.length > 1) {
        kioskTitle = "";
        for (let i of kioskTitleArr) {
          kioskTitle += i + " ";
        }
      }
      kioskTitleChange.innerText = kioskTitle;
    }
  }

  slideFiveBoxTop.addEventListener("touchend", (e) => {
    handleGestureSlide5(e);
  });

  // Slide five bottom scroller
  let touchstartY5 = 0;
  let touchendY5 = 0;
  let swipeDistance5;
  let touchStop15 = false;
  let touchStop25 = false;
  let touchStop35 = false;
  let touchStop45 = false;
  let touchStop55 = false;
  let touchPoint5;
  let initalDirection5;
  let nowDirection5;

  slideFiveTouch.addEventListener(
    "touchstart",
    (e) => {
      swipeDistance5 = 0;
      touchPoint5 = 0;
      initalDirection5 = "";
      nowDirection5 = "";
      touchstartY5 = e.changedTouches[0].screenY;
    },
    false
  );

  slideFiveTouch.addEventListener(
    "touchmove",
    (e) => {
      swipeDistance5 = touchstartY5 - e.changedTouches[0].screenY;
      if (swipeDistance5 > touchPoint5) {
        initalDirection5 = "up";
      } else {
        initalDirection5 = "down";
      }
      if (!touchStop15) {
        if (swipeDistance5 < -10 || swipeDistance5 > 10) {
          touchStop15 = true;
          handleGesture5(swipeDistance5);
        }
      }
      if (!touchStop25) {
        if (
          (swipeDistance5 > -140 && swipeDistance5 < -70) ||
          (swipeDistance5 > 70 && swipeDistance5 < 140)
        ) {
          touchStop25 = true;
          handleGesture5(swipeDistance5);
        }
      }
      if (!touchStop35) {
        if (
          (swipeDistance5 > -210 && swipeDistance5 < -140) ||
          (swipeDistance5 > 140 && swipeDistance5 < 210)
        ) {
          touchStop35 = true;
          handleGesture5(swipeDistance5);
        }
      }
      if (!touchStop45) {
        if (
          (swipeDistance5 > -280 && swipeDistance5 < -210) ||
          (swipeDistance5 > 210 && swipeDistance5 < 280)
        ) {
          touchStop45 = true;
          handleGesture5(swipeDistance5);
        }
      }
      if (!touchStop55) {
        if (
          (swipeDistance5 > -350 && swipeDistance5 < -280) ||
          (swipeDistance5 > 280 && swipeDistance5 < 350)
        ) {
          touchStop55 = true;
          handleGesture5(swipeDistance5);
        }
      }
      if (nowDirection5 !== initalDirection5 && nowDirection5 !== "") {
        touchstartY5 = e.changedTouches[0].screenY;
        if (touchStop15) touchStop15 = false;
        if (touchStop25) touchStop25 = false;
        if (touchStop35) touchStop35 = false;
        if (touchStop45) touchStop45 = false;
        if (touchStop55) touchStop55 = false;
      }
      touchPoint5 = swipeDistance5;
      nowDirection5 = initalDirection5;
    },
    false
  );

  slideFiveTouch.addEventListener(
    "touchend",
    (e) => {
      touchStop15 = false;
      touchStop25 = false;
      touchStop35 = false;
      touchStop45 = false;
      touchStop55 = false;
      touchPoint5 = 0;
      touchendY5 = e.changedTouches[0].screenY;
      touchid = e.target.id;
      touchstate5 = e.target.dataset.currentpos;
      handleGesture5(touchstartY5 - touchendY5, "stop");
    },
    false
  );

  function handleGesture5(distance, stopper = "go") {
    if (stopper === "go") {
      slideFiveScroller(distance);
    } else {
      if (distance > -5 && distance < 5) {
        videoModalPopup();
      }
    }
  }

  function slideFiveScroller(d) {
    let allSlots = document.querySelectorAll("#slideFiveTouch p");
    for (let i of allSlots) {
      let slotPOS = i.dataset.currentpos;
      if (slotPOS === "0") {
        if (d > 0) {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu2", "scrollMenu2SlotSix", "scrollUp206");
          i.dataset.currentpos = "6";
        } else {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu2", "scrollMenu2SlotOne", "scrollDown201");
          i.dataset.currentpos = "1";
        }
      }
      if (slotPOS === "1") {
        if (d > 0) {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu2", "scrollMenu2SlotZero", "scrollUp210");
          i.dataset.currentpos = "0";
        } else {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu2", "scrollMenu2SlotTwo", "scrollDown212");
          i.dataset.currentpos = "2";
        }
      }
      if (slotPOS === "2") {
        if (d > 0) {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu2", "scrollMenu2SlotOne", "scrollUp221");
          i.dataset.currentpos = "1";
        } else {
          i.setAttribute("class", "");
          i.classList.add(
            "scrollMenu2",
            "scrollMenu2SlotThree",
            "scrollDown223"
          );
          i.dataset.currentpos = "3";
        }
      }
      if (slotPOS === "3") {
        if (d > 0) {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu2", "scrollMenu2SlotTwo", "scrollUp232");
          i.dataset.currentpos = "2";
        } else {
          i.setAttribute("class", "");
          i.classList.add(
            "scrollMenu2",
            "scrollMenu2SlotFour",
            "scrollDown234"
          );
          i.dataset.currentpos = "4";
        }
      }
      if (slotPOS === "4") {
        if (d > 0) {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu2", "scrollMenu2SlotThree", "scrollUp243");
          i.dataset.currentpos = "3";
        } else {
          i.setAttribute("class", "");
          i.classList.add(
            "scrollMenu2",
            "scrollMenu2SlotFive",
            "scrollDown245"
          );
          i.dataset.currentpos = "5";
        }
      }
      if (slotPOS === "5") {
        if (d > 0) {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu2", "scrollMenu2SlotFour", "scrollUp254");
          i.dataset.currentpos = "4";
        } else {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu2", "scrollMenu2SlotSix", "scrollDown256");
          i.dataset.currentpos = "6";
        }
      }
      if (slotPOS === "6") {
        if (d > 0) {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu2", "scrollMenu2SlotFive", "scrollUp265");
          i.dataset.currentpos = "5";
        } else {
          i.setAttribute("class", "");
          i.classList.add("scrollMenu2", "scrollMenu2SlotZero");
          i.dataset.currentpos = "0";
        }
      }
    }
  }

  // SLIDE SIX
  // Web modal trigger
  function slideSixActive() {
    webModalTrigger.classList.add("show");
  }

  function slideSixDeactive() {
    webModalTrigger.classList.remove("show");
  }

  webModalTrigger.addEventListener("touchend", (e) => {
    let triggeredURL = e.target.dataset.gotourl;
    const webModal = document.querySelector("#webmodal");
    const webModalFrame = document.querySelector("#webmodal iframe");
    if (triggeredURL) {
      kioskModal.classList.remove("noshow");
      kioskModal.classList.remove("noshow2");
      kioskModal.classList.add("show");
      webModalFrame.src = e.target.dataset.gotourl;
      webModal.classList.remove("show");
      webModal.classList.remove("noshow");
      webModal.classList.add("show");
      let kioskTitleChange = document.querySelector(".kioskModal__content h2");
      kioskTitleChange.innerText = e.target.dataset.linkname;
    }
  });

  // SETTINGS MODAL
  // Settings Modal Trigger
  if (settingsTrigger) {
    settingsTrigger.addEventListener("touchstart", () => {
      kioskModal.classList.remove("noshow");
      kioskModal.classList.remove("noshow2");
      kioskModal.classList.add("show");
      let targetSettings = "#" + settingsTrigger.dataset.modalid;
      document.querySelector(targetSettings).classList.remove("noshow");
      document.querySelector(targetSettings).classList.add("show");
      let kioskTitleChange = document.querySelector(".kioskModal__content h2");
      kioskTitleChange.innerText = "KIOSK SETTINGS";
      settingsPanelActive = true;
      document.querySelector("#pwPanelBox").classList.add("active");
      activeBox = document.querySelector("#pwPanel");
      activeBox.classList.toggle("caret");
    });
  }

  // Settings screen scroll
  let touchstartset = 0;
  let currentTouchset = 0;
  let nextTouchset = 0;
  let scrollPOSset;

  setBoxTouch.addEventListener(
    "touchstart",
    (e) => {
      touchstartset = e.changedTouches[0].screenY;
    },
    false
  );

  setBoxTouch.addEventListener(
    "touchmove",
    (e) => {
      currentTouchset = touchstartset - e.changedTouches[0].screenY;
      scrollPOSset = setBoxTouch.scrollTop;
      if (currentTouchset > nextTouchset) {
        scrollPOSset = scrollPOSset + 25;
        if (scrollPOSset >= setBoxTouch.scrollHeight)
          scrollPOSset = setBoxTouch.scrollHeight;
      } else {
        scrollPOSset = scrollPOSset - 25;
        if (scrollPOSset <= 0) scrollPOSset = 0;
      }
      setBoxTouch.scrollTo(0, scrollPOSset);
      nextTouchset = currentTouchset;
    },
    false
  );

  // Directory bookmarks
  const bookmarkBox = document.querySelector("#settings-bookmark-box");
  bookmarkBox.addEventListener("touchstart", (e) => {
    let clickID = e.target.id;
    if (clickID) {
      let targetIDArr = clickID.split("-");
      targetIDArr.length = targetIDArr.length - 1;
      let targetID = "#" + targetIDArr.join("-");
      document
        .querySelector(targetID)
        .scrollIntoView({ behavior: "smooth", block: "end" });
    }
  });

  // Radio Dots
  // Slide Or Video
  const settingsDotOne = document.querySelector("#settings-slideorvideo-slide");
  const settingsDotTwo = document.querySelector("#settings-slideorvideo-video");

  settingsDotOne.addEventListener(
    "touchstart",
    () => {
      if (settingsDotTwo.classList.contains("selected")) {
        settingsDotTwo.classList.toggle("selected");
      }
      if (!settingsDotOne.classList.contains("selected")) {
        settingsDotOne.classList.toggle("selected");
      }
    },
    false
  );

  settingsDotTwo.addEventListener(
    "touchstart",
    () => {
      if (settingsDotOne.classList.contains("selected")) {
        settingsDotOne.classList.toggle("selected");
      }
      if (!settingsDotTwo.classList.contains("selected")) {
        settingsDotTwo.classList.toggle("selected");
      }
    },
    false
  );

  // Settings buttons
  let exitLoad;
  settingsButtons.addEventListener(
    "touchstart",
    (e) => {
      let exitGo = false;
      exitLoad = false;
      if (e.target.dataset.settingsaction === "save") {
        kioskButtonSave.classList.add("active");
        settingsSave();
        exitGo = true;
      }
      if (e.target.dataset.settingsaction === "cancel") {
        kioskButtonCancel.classList.add("active");
        e.target.classList.toggle("active");
        exitGo = true;
        settingInputText.forEach((i) => {
          if (
            !i.classList.contains(
              "kioskModal__content__inner__top-top-text-box-right-no"
            )
          ) {
            i.classList.remove("active");
          }
        });
        kioskInitialize();
      }
      if (e.target.dataset.settingsaction === "reset") {
        kioskButtonReset.classList.add("active");
        e.target.classList.toggle("active");
        exitLoad = true;
      }
      if (e.target.dataset.settingsaction === "scroll") {
        kioskButtonScroll.classList.add("active");
        e.target.classList.toggle("active");
        settingInputText.forEach((i) => {
          if (
            !i.classList.contains(
              "kioskModal__content__inner__top-top-text-box-right-no"
            )
          ) {
            i.classList.remove("active");
          }
        });
        setBoxTouch.scrollTo({
          left: 0,
          top: 0,
          behavior: "smooth",
        });
      }
      if (exitGo) {
        let eCon = new TouchEvent("touchend");
        kioskModal.dispatchEvent(eCon);
      }
      if (exitLoad) {
        resetAppMemory();
      }
    },
    false
  );

  settingsButtons.addEventListener(
    "touchend",
    () => {
      kioskButtonSave.classList.remove("active");
      kioskButtonCancel.classList.remove("active");
      kioskButtonReset.classList.remove("active");
      kioskButtonScroll.classList.remove("active");
    },
    false
  );

  // Keyboard
  let pressedKey, pressedKeyLower, pressedKeyUpper;
  let capsState = "lower";
  const keyCollection = document.querySelectorAll(".keyboard-key");
  const inputBoxes = document.querySelectorAll(
    ".kioskModal__content__inner__top-top-text-box"
  );
  let spaceUpNext = false;

  // Listen for active input box
  inputBoxes.forEach((i) => {
    if (
      !i.classList.contains(
        "kioskModal__content__inner__top-top-text-box-right-no"
      )
    ) {
      i.addEventListener(
        "touchstart",
        (e) => {
          if (
            e.target.classList.contains(
              "kioskModal__content__inner__top-top-text-box-right"
            )
          ) {
            if (i.querySelector("p").classList.contains("active")) {
              i.querySelector("p").classList.remove("active");
            }
          }
          inputBoxes.forEach((j) => {
            if (j.classList.contains("active") && j !== e.target) {
              j.classList.remove("active");
              if (activeBox) {
                activeBox.classList.remove("caret");
              }
            }
          });
          i.classList.toggle("active");
          if (i.classList.contains("active")) {
            activeBox = i.querySelector("p");
            activeBox.classList.toggle("caret");
          } else {
            activeBox.classList.toggle("caret");
            activeBox = "";
          }
        },
        false
      );
    }
  });

  // Highlight input text
  settingInputText.forEach((i) => {
    if (
      !i.classList.contains(
        "kioskModal__content__inner__top-top-text-box-right-no"
      )
    ) {
      i.addEventListener(
        "touchstart",
        (e) => {
          i.classList.toggle("active");
        },
        false
      );
    }
  });

  function valPasswd(p) {
    p = btoa(p);
    // Production - password enabled - pass1234
    if (p == "cGFzczEyMzQ=") {
      return true;
    }
    return false;
    // Dev - blank password
    if (p == "") {
      return true;
    }
    return false;
  }

  function checkPassword() {
    const passwd = activeBox.innerText;
    if (valPasswd(passwd)) {
      activeBox.classList.remove("wrong");
      settingsBoxes[0].classList.remove("show");
      settingsBoxes[1].classList.add("show");
      settingsScrollToTop.forEach((i) => {
        i.classList.add("show");
      });
    } else {
      activeBox.classList.add("wrong");
    }
  }

  function handleEnterKey(action) {
    if (action === "password") {
      checkPassword();
    }
    if (action === "setting") {
      settingsButtons.scrollIntoView({ behavior: "smooth" });
    }
    inputBoxes.forEach((i) => {
      i.classList.remove("active");
      i.querySelector("p").classList.remove("caret");
    });
    activeBox = "";
    return false;
  }

  function handleKeyboard(key) {
    if (activeBox) {
      if (key === "delete") {
        if (!activeBox.classList.contains("active")) {
          let activeText = activeBox.innerText.split("");
          let atLen = activeText.length - 1;
          if (atLen >= 0) {
            activeText.length = atLen;
            activeText = activeText.join("");
            activeBox.innerText = activeText;
          }
        } else if (activeBox.classList.contains("active")) {
          activeBox.innerText = "";
          activeBox.classList.remove("active");
        } else {
          activeBox.innerText = "";
        }
      } else if (key === "caps") {
        return false;
      } else if (key === "enter") {
        let enterAction = activeBox.parentElement.dataset.action;
        handleEnterKey(enterAction);
      } else if (key === "space") {
        spaceUpNext = true;
      } else {
        if (spaceUpNext) {
          activeBox.innerText = activeBox.innerText + " " + key;
          spaceUpNext = false;
        } else {
          activeBox.innerText = activeBox.innerText + key;
        }
      }
    }
  }

  keyboardBox.addEventListener(
    "touchstart",
    (e) => {
      if (
        e.target.classList.contains("keyboard-key") ||
        e.target.classList.contains("keyboard-letter")
      ) {
        pressedKey = e.target;
        if (pressedKey.classList.contains("keyboard-letter")) {
          pressedKey = e.target.parentElement;
        }
        pressedKeyLower = pressedKey.dataset.keydatalower;
        pressedKeyUpper = pressedKey.dataset.keydataupper;
        if (pressedKey.classList.contains("pressed")) {
          pressedKey.classList.remove("pressed");
          capsState = "lower";
        } else {
          if (pressedKeyLower === "caps") capsState = "upper";
          pressedKey.classList.add("pressed");
        }
        let keyOutput;
        if (capsState === "lower") {
          keyOutput = pressedKeyLower;
        } else {
          keyOutput = pressedKeyUpper;
        }
        handleKeyboard(keyOutput);
      }
    },
    false
  );

  keyboardBox.addEventListener(
    "touchend",
    (e) => {
      if (pressedKeyLower !== "caps") {
        pressedKey.classList.remove("pressed");
      }
      keyCollection.forEach((i) => {
        const innerKey = i.querySelector(".keyboard-letter");
        const keyUpper = i.dataset.keydataupper;
        const keyLower = i.dataset.keydatalower;
        if (capsState === "upper") {
          innerKey.innerText = keyUpper;
        } else {
          innerKey.innerText = keyLower;
        }
      });
    },
    false
  );

  // Settings save
  function settingsSave() {
    // Layouts
    // Dashboard slide or video
    let slideorvideoSetting;
    if (settingsDotOne.classList.contains("selected"))
      slideorvideoSetting = "slide";
    if (settingsDotTwo.classList.contains("selected"))
      slideorvideoSetting = "video";
    localStorage.setItem("slideorvid", slideorvideoSetting);

    // Text Content
    // OID slots
    localStorage.setItem(
      "oidslot1",
      document.querySelector("#settings-oidslot1").innerText
    );
    localStorage.setItem(
      "oidslot2",
      document.querySelector("#settings-oidslot2").innerText
    );
    localStorage.setItem(
      "oidslot3",
      document.querySelector("#settings-oidslot3").innerText
    );
    localStorage.setItem(
      "oidslot4",
      document.querySelector("#settings-oidslot4").innerText
    );
    localStorage.setItem(
      "oidslot5",
      document.querySelector("#settings-oidslot5").innerText
    );
    localStorage.setItem(
      "oidslot6",
      document.querySelector("#settings-oidslot6").innerText
    );
    localStorage.setItem(
      "oidslot7",
      document.querySelector("#settings-oidslot7").innerText
    );

    // Literature Block Titles
    localStorage.setItem(
      "litblock1title",
      document.querySelector("#settings-litblock1-title").innerText
    );
    localStorage.setItem(
      "litblock2title",
      document.querySelector("#settings-litblock2-title").innerText
    );
    localStorage.setItem(
      "litblock3title",
      document.querySelector("#settings-litblock3-title").innerText
    );

    // Literature block slot titles
    localStorage.setItem(
      "litblock1slot1title",
      document.querySelector("#settings-litblock1slot1-title").innerText
    );
    localStorage.setItem(
      "litblock1slot2title",
      document.querySelector("#settings-litblock1slot2-title").innerText
    );
    localStorage.setItem(
      "litblock1slot3title",
      document.querySelector("#settings-litblock1slot3-title").innerText
    );
    localStorage.setItem(
      "litblock1slot4title",
      document.querySelector("#settings-litblock1slot4-title").innerText
    );
    localStorage.setItem(
      "litblock2slot1title",
      document.querySelector("#settings-litblock2slot1-title").innerText
    );
    localStorage.setItem(
      "litblock2slot2title",
      document.querySelector("#settings-litblock2slot2-title").innerText
    );
    localStorage.setItem(
      "litblock2slot3title",
      document.querySelector("#settings-litblock2slot3-title").innerText
    );
    localStorage.setItem(
      "litblock2slot4title",
      document.querySelector("#settings-litblock2slot4-title").innerText
    );
    localStorage.setItem(
      "litblock3slot1title",
      document.querySelector("#settings-litblock3slot1-title").innerText
    );
    localStorage.setItem(
      "litblock3slot2title",
      document.querySelector("#settings-litblock3slot2-title").innerText
    );
    localStorage.setItem(
      "litblock3slot3title",
      document.querySelector("#settings-litblock3slot3-title").innerText
    );
    localStorage.setItem(
      "litblock3slot4title",
      document.querySelector("#settings-litblock3slot4-title").innerText
    );

    // Video slide video titles
    localStorage.setItem(
      "videovideo1",
      document.querySelector("#settings-videovideo1-title").innerText
    );
    localStorage.setItem(
      "videovideo2",
      document.querySelector("#settings-videovideo2-title").innerText
    );
    localStorage.setItem(
      "videovideo3",
      document.querySelector("#settings-videovideo3-title").innerText
    );
    localStorage.setItem(
      "videovideo4",
      document.querySelector("#settings-videovideo4-title").innerText
    );

    // Tonik pdf block title
    localStorage.setItem(
      "tonikpdfblocktitle",
      document.querySelector("#settings-tonikpdfblock-title").innerText
    );

    // Tonik pdf block slot titles
    localStorage.setItem(
      "tonikpdfblocktitleslot1",
      document.querySelector("#settings-tonikpdfblockslot1-title").innerText
    );
    localStorage.setItem(
      "tonikpdfblocktitleslot2",
      document.querySelector("#settings-tonikpdfblockslot2-title").innerText
    );
    localStorage.setItem(
      "tonikpdfblocktitleslot3",
      document.querySelector("#settings-tonikpdfblockslot3-title").innerText
    );
    localStorage.setItem(
      "tonikpdfblocktitleslot4",
      document.querySelector("#settings-tonikpdfblockslot4-title").innerText
    );

    // Tonik video slot titles
    localStorage.setItem(
      "tonikvideoblockslot1",
      document.querySelector("#settings-tonikvideoblockslot1-title").innerText
    );
    localStorage.setItem(
      "tonikvideoblockslot2",
      document.querySelector("#settings-tonikvideoblockslot2-title").innerText
    );
    localStorage.setItem(
      "tonikvideoblockslot3",
      document.querySelector("#settings-tonikvideoblockslot3-title").innerText
    );
    localStorage.setItem(
      "tonikvideoblockslot4",
      document.querySelector("#settings-tonikvideoblockslot4-title").innerText
    );
    localStorage.setItem(
      "tonikvideoblockslot5",
      document.querySelector("#settings-tonikvideoblockslot5-title").innerText
    );
    localStorage.setItem(
      "tonikvideoblockslot6",
      document.querySelector("#settings-tonikvideoblockslot6-title").innerText
    );
    localStorage.setItem(
      "tonikvideoblockslot7",
      document.querySelector("#settings-tonikvideoblockslot7-title").innerText
    );

    // Link Settings
    // Dashboard media
    localStorage.setItem(
      "dashvid",
      document.querySelector("#settings-dashvid-link").innerText
    );
    localStorage.setItem(
      "dashimg1",
      document.querySelector("#settings-dashimg1-link").innerText
    );
    localStorage.setItem(
      "dashimg2",
      document.querySelector("#settings-dashimg2-link").innerText
    );
    localStorage.setItem(
      "dashimg3",
      document.querySelector("#settings-dashimg3-link").innerText
    );
    localStorage.setItem(
      "dashimg4",
      document.querySelector("#settings-dashimg4-link").innerText
    );
    localStorage.setItem(
      "dashimg5",
      document.querySelector("#settings-dashimg5-link").innerText
    );
    localStorage.setItem(
      "dashimg6",
      document.querySelector("#settings-dashimg6-link").innerText
    );
    localStorage.setItem(
      "dashimg7",
      document.querySelector("#settings-dashimg7-link").innerText
    );

    // OID Slots
    localStorage.setItem(
      "oidslot1link",
      document.querySelector("#settings-oidslot1-link").innerText
    );
    localStorage.setItem(
      "oidslot2link",
      document.querySelector("#settings-oidslot2-link").innerText
    );
    localStorage.setItem(
      "oidslot3link",
      document.querySelector("#settings-oidslot3-link").innerText
    );
    localStorage.setItem(
      "oidslot4link",
      document.querySelector("#settings-oidslot4-link").innerText
    );
    localStorage.setItem(
      "oidslot5link",
      document.querySelector("#settings-oidslot5-link").innerText
    );
    localStorage.setItem(
      "oidslot6link",
      document.querySelector("#settings-oidslot6-link").innerText
    );
    localStorage.setItem(
      "oidslot7link",
      document.querySelector("#settings-oidslot7-link").innerText
    );

    // Literature screen slot image links
    localStorage.setItem(
      "litblock1slot1img",
      document.querySelector("#settings-litblock1slot1-image").innerText
    );
    localStorage.setItem(
      "litblock1slot2img",
      document.querySelector("#settings-litblock1slot2-image").innerText
    );
    localStorage.setItem(
      "litblock1slot3img",
      document.querySelector("#settings-litblock1slot3-image").innerText
    );
    localStorage.setItem(
      "litblock1slot4img",
      document.querySelector("#settings-litblock1slot4-image").innerText
    );
    localStorage.setItem(
      "litblock2slot1img",
      document.querySelector("#settings-litblock2slot1-image").innerText
    );
    localStorage.setItem(
      "litblock2slot2img",
      document.querySelector("#settings-litblock2slot2-image").innerText
    );
    localStorage.setItem(
      "litblock2slot3img",
      document.querySelector("#settings-litblock2slot3-image").innerText
    );
    localStorage.setItem(
      "litblock2slot4img",
      document.querySelector("#settings-litblock2slot4-image").innerText
    );
    localStorage.setItem(
      "litblock3slot1img",
      document.querySelector("#settings-litblock3slot1-image").innerText
    );
    localStorage.setItem(
      "litblock3slot2img",
      document.querySelector("#settings-litblock3slot2-image").innerText
    );
    localStorage.setItem(
      "litblock3slot3img",
      document.querySelector("#settings-litblock3slot3-image").innerText
    );
    localStorage.setItem(
      "litblock3slot4img",
      document.querySelector("#settings-litblock3slot4-image").innerText
    );

    // Lit slide pdf links
    localStorage.setItem(
      "litblock1slot1pdf",
      document.querySelector("#settings-litblock1slot1-pdf").innerText
    );
    localStorage.setItem(
      "litblock1slot2pdf",
      document.querySelector("#settings-litblock1slot2-pdf").innerText
    );
    localStorage.setItem(
      "litblock1slot3pdf",
      document.querySelector("#settings-litblock1slot3-pdf").innerText
    );
    localStorage.setItem(
      "litblock1slot4pdf",
      document.querySelector("#settings-litblock1slot4-pdf").innerText
    );
    localStorage.setItem(
      "litblock2slot1pdf",
      document.querySelector("#settings-litblock2slot1-pdf").innerText
    );
    localStorage.setItem(
      "litblock2slot2pdf",
      document.querySelector("#settings-litblock2slot2-pdf").innerText
    );
    localStorage.setItem(
      "litblock2slot3pdf",
      document.querySelector("#settings-litblock2slot3-pdf").innerText
    );
    localStorage.setItem(
      "litblock2slot4pdf",
      document.querySelector("#settings-litblock2slot4-pdf").innerText
    );
    localStorage.setItem(
      "litblock3slot1pdf",
      document.querySelector("#settings-litblock3slot1-pdf").innerText
    );
    localStorage.setItem(
      "litblock3slot2pdf",
      document.querySelector("#settings-litblock3slot2-pdf").innerText
    );
    localStorage.setItem(
      "litblock3slot3pdf",
      document.querySelector("#settings-litblock3slot3-pdf").innerText
    );
    localStorage.setItem(
      "litblock3slot4pdf",
      document.querySelector("#settings-litblock3slot4-pdf").innerText
    );

    // Video slide links
    localStorage.setItem(
      "vidvid1link",
      document.querySelector("#settings-vidvid1-link").innerText
    );
    localStorage.setItem(
      "vidvid2link",
      document.querySelector("#settings-vidvid2-link").innerText
    );
    localStorage.setItem(
      "vidvid3link",
      document.querySelector("#settings-vidvid3-link").innerText
    );
    localStorage.setItem(
      "vidvid4link",
      document.querySelector("#settings-vidvid4-link").innerText
    );

    // Green Story link
    localStorage.setItem(
      "greenlink",
      document.querySelector("#settings-green-link").innerText
    );

    // Tonik PDF block slot images
    localStorage.setItem(
      "tonikpdf1",
      document.querySelector("#settings-tonikpdf1-image").innerText
    );
    localStorage.setItem(
      "tonikpdf2",
      document.querySelector("#settings-tonikpdf2-image").innerText
    );
    localStorage.setItem(
      "tonikpdf3",
      document.querySelector("#settings-tonikpdf3-image").innerText
    );
    localStorage.setItem(
      "tonikpdf4",
      document.querySelector("#settings-tonikpdf4-image").innerText
    );

    // Tonik PDf block slot pdf links
    localStorage.setItem(
      "tonikpdf1link",
      document.querySelector("#settings-tonikpdf1-link").innerText
    );
    localStorage.setItem(
      "tonikpdf2link",
      document.querySelector("#settings-tonikpdf2-link").innerText
    );
    localStorage.setItem(
      "tonikpdf3link",
      document.querySelector("#settings-tonikpdf3-link").innerText
    );
    localStorage.setItem(
      "tonikpdf4link",
      document.querySelector("#settings-tonikpdf4-link").innerText
    );

    // Tonik slide video links
    localStorage.setItem(
      "tonikvideo1",
      document.querySelector("#settings-tonikvideo1-link").innerText
    );
    localStorage.setItem(
      "tonikvideo2",
      document.querySelector("#settings-tonikvideo2-link").innerText
    );
    localStorage.setItem(
      "tonikvideo3",
      document.querySelector("#settings-tonikvideo3-link").innerText
    );
    localStorage.setItem(
      "tonikvideo4",
      document.querySelector("#settings-tonikvideo4-link").innerText
    );
    localStorage.setItem(
      "tonikvideo5",
      document.querySelector("#settings-tonikvideo5-link").innerText
    );
    localStorage.setItem(
      "tonikvideo6",
      document.querySelector("#settings-tonikvideo6-link").innerText
    );
    localStorage.setItem(
      "tonikvideo7",
      document.querySelector("#settings-tonikvideo7-link").innerText
    );

    // Web slide image links
    localStorage.setItem(
      "webtopimg",
      document.querySelector("#settings-webtop-image").innerText
    );
    localStorage.setItem(
      "webbottomimg",
      document.querySelector("#settings-webbottom-image").innerText
    );

    window.location.reload();
  }

  // Settings scroll buttons by keyboard
  let targetData;
  let targetType;

  function handleGestureSetBox(t) {
    if (t === "totop") {
      setBoxTouch.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
    if (t === "scrollup") {
      setBoxTouch.scrollTo({
        top: setBoxTouch.scrollTop - 100,
        left: 0,
        behavior: "smooth",
      });
    }
    if (t === "scrolldown") {
      setBoxTouch.scrollTo({
        top: setBoxTouch.scrollTop + 100,
        left: 0,
        behavior: "smooth",
      });
    }
    if (t === "tobottom") {
      setBoxTouch.scrollTo({
        top: setBoxTouch.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }

  let timer;

  settingsScrollBox.addEventListener(
    "touchstart",
    (e) => {
      targetData = e.target.dataset.touchaction;
      targetType = e.target.dataset.touchsource;
      if (targetData) {
        if (targetType === "div") {
          e.target.classList.add("active");
        } else {
          e.target.parentElement.classList.add("active");
        }
        timer = setInterval(() => {
          handleGestureSetBox(targetData);
        }, 250);
      }
    },
    false
  );

  settingsScrollBox.addEventListener("touchend", (e) => {
    clearInterval(timer);
    if (targetData) {
      if (targetType === "div") {
        e.target.classList.remove("active");
      } else {
        e.target.parentElement.classList.remove("active");
      }
      handleGestureSetBox(targetData);
      targetData = undefined;
      targetType = undefined;
    }
  });

  // Design Year
  let designYear = document.querySelector("#designYear");
  let setYear = new Date();
  setYear = setYear.getFullYear();
  designYear.innerText = setYear;

  slideZeroSlideShow();

  if (s0slideState === "video") {
    handleSlideGestures(101, true);
  }

  function resetAppMemory() {
    localStorage.clear();
    window.location.reload();
  }

  // Clean up visual elements
  let litSlideGrid = document.querySelectorAll(
    ".slide__slide-two__lit-box .slide__slide-two__lit-box__bottom .slide__slide-two__lit-box__bottom__grid"
  );
  litSlideGrid.forEach((i) => {
    if (i.querySelector("p").innerText == "") {
      i.style.visibility = "hidden";
    }
  });
}

// Keyboard Hide / Show
let kbState = 1;
const keyHider = document.querySelector("#hideKeyboard");
const textWindows = document.querySelectorAll(
  ".kioskModal__content__inner__top-top"
);
const textWinScroll = document.querySelector(
  ".kioskModal__content__inner__top-top-scrollBox"
);
const keyScreen = document.querySelector(
  ".kioskModal__content__inner__top-bottom"
);
const keyOuter = document.querySelector(
  ".kioskModal__content__inner__top-bottom-keyboard"
);
keyHider.addEventListener("touchstart", () => {
  textWindows.forEach((i) => {
    i.classList.toggle("showH");
  });
  keyScreen.classList.toggle("showH");
  if (kbState) {
    textWinScroll.classList.toggle("showH");
    keyOuter.style.display = "none";
    keyHider.innerText = "Show Keyboard";
    kbState = 0;
  } else {
    setTimeout(() => {
      textWinScroll.classList.toggle("showH");
    }, 500);
    keyOuter.style.display = "flex";
    keyHider.innerText = "Hide Keyboard";
    kbState = 1;
  }
});

// Some initial variables
const winCon = document.querySelector(".container");
const loadCon = document.querySelector(".loading-container");
// Clear localstorage on every run - testing only - comment out for production
localStorage.clear();
kioskInitialize();
setTimeout(() => {
  loadCon.classList.toggle("show");
  winCon.classList.toggle("show");
  kioskLoad();
}, 90000);
