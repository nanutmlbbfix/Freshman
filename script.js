/* ============================================================
   THE LIBRARY OF MEMORIES — SCRIPT
   ============================================================ */

/* ---------- 1. DATA: THE NINE FRESHMEN ---------- */
const LETTERS_DATA = {
  stillwater: {
    name: "Alinsyira",
    photo: "images/alinsyira.jpg",
    letter: "Alin, dari pertama kali kenal sampai sekarang, aku selalu melihat kamu sebagai orang yang tenang. Kamu bukan tipe yang banyak bicara, tapi setiap kali berbicara selalu ada makna di dalamnya. Sikap sabar dan kelembutanmu adalah sesuatu yang menurutku akan menjadi kekuatan besar di mana pun nanti kamu berada. Tetaplah mengejar impianmu menjadi UI/UX Designer di perusahaan multinasional. Jangan pernah merasa kamu harus menjadi orang lain untuk berhasil, karena justru ketenanganmu adalah identitasmu. Semoga suatu hari nanti kita bertemu lagi sebagai orang-orang yang berhasil mewujudkan impian masing-masing.",
    memory: "Hal yang paling aku ingat darimu adalah bagaimana kamu selalu mendengarkan lebih banyak daripada berbicara. Tidak semua orang memiliki kualitas itu.",
  },

  northstar: {
    name: "Rayhan",
    photo: "images/rayhan.jpg",
    letter: `Rayhan, aku tahu kamu punya target yang jelas untuk mendapatkan IPK di atas 3.51. Dari cara kamu belajar dan berpikir, menurutku itu bukan target yang mustahil. Aku hanya berharap satu hal, jangan biarkan rasa kurang percaya diri membuatmu meragukan kemampuanmu sendiri. Orang lain mungkin melihat potensi yang lebih besar dalam dirimu daripada yang kamu sadari. Terus berkembang, tetap rendah hati, dan jangan takut menunjukkan kemampuanmu.`,
    memory: `Aku selalu mengingatmu sebagai orang yang tenang, tetapi sebenarnya memiliki banyak potensi yang belum sepenuhnya kamu tunjukkan.`
  },

  architect: {
    name: "Andhika Ditama",
    photo: "images/andhika-ditama.jpg",
    letter: `Dhika, aku senang melihat kamu sudah memiliki tujuan yang ingin kamu capai, yaitu bergabung dengan IT Division. Tetap pertahankan rasa ingin tahu, cara berpikir kritis, dan semangat belajarmu. Dunia teknologi selalu berubah, jadi jangan pernah berhenti berkembang. Aku yakin, dengan konsistensi yang kamu miliki, kamu akan menemukan banyak kesempatan yang lebih besar dari yang kamu bayangkan sekarang.`,
    memory: `Aku paling mengingat bagaimana kamu selalu mencoba memahami sesuatu sebelum mengambil kesimpulan. Sikap itu akan sangat membantumu di masa depan.`
  },

  wildfire: {
    name: "Tristan",
    photo: "images/tristan.jpg",
    letter: `Tristan, energimu selalu terasa setiap kali berada di dalam kelompok. Sebagai seorang atlet, aku bisa melihat semangat kompetitif dan kerja keras yang sudah menjadi bagian dari dirimu. Pertahankan rasa percaya dirimu, tetapi jangan pernah kehilangan kerendahan hati. Orang yang hebat bukan hanya dikenal karena prestasinya, tetapi juga karena sikapnya terhadap orang lain. Tetap jadi dirimu yang berani dan penuh semangat.`,
    memory: `Yang paling aku ingat darimu adalah bagaimana kamu selalu membawa energi positif dan membuat suasana menjadi lebih hidup.`
  },

  gentleman: {
    name: "Thrianggoro",
    photo: "images/goro.jpg",
    letter: `Goro, salah satu hal yang paling aku kagumi darimu adalah bagaimana kamu menjaga dirimu sendiri sekaligus tetap memperlakukan orang lain dengan sangat baik. Tidak banyak orang yang bisa menyeimbangkan keduanya. Pertahankan sikap rendah hati, disiplin, dan attitude baikmu. Hal-hal itu mungkin terlihat sederhana hari ini, tetapi suatu saat nanti akan menjadi alasan banyak kesempatan datang kepadamu.`,
    memory: `Aku selalu mengingatmu sebagai pribadi yang rapi, sopan, dan mampu membuat orang lain merasa nyaman ketika berbicara.`
  },

  relentless: {
    name: "Nabil",
    photo: "images/nabil.jpg",
    letter: `Nabil, aku masih ingat ketika kamu bercerita tentang targetmu untuk meraih SIS Excellence di tahun pertama. Aku suka cara berpikirmu yang berani menetapkan tujuan tinggi. Jalan menuju target itu mungkin tidak akan mudah, tetapi selama kamu terus belajar dan tetap konsisten, aku percaya hasilnya akan mengikuti. Jangan takut gagal, karena setiap langkah kecil tetap membawamu lebih dekat kepada impianmu.`,
    memory: `Aku paling mengingat keberanianmu untuk memiliki target yang jelas sejak awal perjalanan kuliahmu.`
  },

  lily: {
    name: "Charma",
    photo: "images/charma.jpg",
    letter: `Charma, selamat sekali lagi karena berhasil diterima di UNPAD. Aku benar-benar berharap kamu menikmati setiap proses yang akan kamu jalani di sana. Kamu adalah pribadi yang lembut, ramah, dan selalu menghargai orang lain. Jangan pernah kehilangan kualitas itu, karena dunia selalu membutuhkan lebih banyak orang baik. Walaupun nanti kita berada di kampus yang berbeda, aku berharap suatu hari nanti kita bisa bertemu lagi dengan cerita-cerita baru yang membanggakan.`,
    memory: `Yang paling aku ingat darimu adalah ketenangan dan keramahanmu kepada semua orang di sekitarmu.`
  },

  wanderer: {
    name: "Andhika Putra",
    photo: "images/andhika-putra.jpg",
    letter: `Dhika, mungkin saat ini kamu masih merasa belum benar-benar menemukan arah yang ingin kamu tuju, dan menurutku itu bukan sesuatu yang salah. Banyak orang menemukan passion mereka justru setelah mencoba berbagai hal. Jangan terburu-buru membandingkan dirimu dengan orang lain. Teruslah bereksplorasi, mencoba, dan belajar. Aku percaya suatu hari nanti kamu akan menemukan sesuatu yang benar-benar membuatmu bersemangat.`,
    memory: `Aku paling mengingat bagaimana kamu selalu mencoba memahami dirimu sendiri, meskipun mungkin kamu belum menemukan semua jawabannya hari ini.`
  },

  spark: {
    name: "Farrel",
    photo: "images/farrel.jpg",
    letter: `Farrel, aku melihat kamu sebagai orang yang sebenarnya memiliki potensi besar. Kamu berani, mudah beradaptasi ketika sudah merasa nyaman, dan menurutku memiliki kemampuan yang masih bisa berkembang jauh. Yang aku harapkan hanyalah kamu bisa lebih konsisten terhadap apa yang ingin kamu capai. Potensi tanpa usaha akan tetap menjadi potensi. Aku percaya kamu mampu menjadi pribadi yang jauh lebih hebat jika mau terus bertumbuh.`,
    memory: `Hal yang paling aku ingat darimu adalah bagaimana kamu berubah dari sosok yang cukup pendiam menjadi jauh lebih aktif ketika mulai merasa nyaman dengan orang-orang di sekitarmu.`
  },
};

/* ---------- 2. GALLERY DATA ---------- */
const GALLERY_DATA = [
  { img: "moment3.jpeg", caption: "Move-in day, boxes everywhere", span: "span-2-2" },
  { img: "pict.jpeg", caption: "The fire alarm night", span: "span-2-1" },
  { img: "pic4.jpeg", caption: "Midterms war room", span: "span-1-2" },
  { img: "bg.jpeg", caption: "3am diner run", span: "" },
  { img: "pict1.jpeg", caption: "Lake day, one sunburn", span: "" },
  { img: "moment.jpeg", caption: "Waffle machine rescue", span: "span-2-1" },
  { img: "pic3.jpeg", caption: "The thousand-piece puzzle", span: "" },
  { img: "pic2.jpeg", caption: "Talent show encore", span: "" },
  { img: "moment2.jpeg", caption: "Meteor shower, 2am", span: "span-2-1" },
  { img: "pic.jpeg", caption: "Rooftop send-off", span: "span-1-2" },
];

/* ============================================================
   3. INIT ON LOAD
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 900,
    easing: "ease-out-cubic",
    once: true,
    offset: 60,
  });

  renderGallery();
  initLightbox();
  initAmbientPlayer();
  initMusicPlayer();
  initVault();
  initHintModal();
  initLetterModal();
  initParticles();
  initSideNav();

  document.getElementById("year").textContent = new Date().getFullYear();
});

/* ============================================================
   4. GALLERY + LIGHTBOX
============================================================ */
let currentLightboxIndex = 0;

function renderGallery() {
  const grid = document.getElementById("bentoGrid");
  grid.innerHTML = GALLERY_DATA.map((item, i) => `
    <div class="bento-item ${item.span}" data-index="${i}" data-aos="fade-up" data-aos-delay="${(i % 4) * 60}">
      <img src="${item.img}" alt="${item.caption}" loading="lazy">
      <div class="bento-glass-icon"><i class="fa-solid fa-expand"></i></div>
      <div class="bento-caption">${item.caption}</div>
    </div>
  `).join("");

  grid.querySelectorAll(".bento-item").forEach((el) => {
    el.addEventListener("click", () => openLightbox(parseInt(el.dataset.index, 10)));
  });
}

function initLightbox() {
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => stepLightbox(-1));
  document.getElementById("lightboxNext").addEventListener("click", () => stepLightbox(1));

  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    const lb = document.getElementById("lightbox");
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxImage();
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

function stepLightbox(dir) {
  currentLightboxIndex = (currentLightboxIndex + dir + GALLERY_DATA.length) % GALLERY_DATA.length;
  updateLightboxImage();
}

function updateLightboxImage() {
  const item = GALLERY_DATA[currentLightboxIndex];
  document.getElementById("lightboxImg").src = item.img;
  document.getElementById("lightboxImg").alt = item.caption;
  document.getElementById("lightboxCaption").textContent = item.caption;
}

/* ============================================================
   5. AMBIENT PLAYER (top bar)
============================================================ */
function initAmbientPlayer() {
  const audio = document.getElementById("ambientAudio");
  const btn = document.getElementById("ambientToggle");
  const icon = document.getElementById("ambientIcon");
  const volume = document.getElementById("ambientVolume");
  const bar = document.getElementById("ambient-player");

  audio.volume = parseFloat(volume.value);

  btn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().catch(() => { });
      icon.classList.remove("fa-play");
      icon.classList.add("fa-pause");
      bar.classList.add("playing");
    } else {
      audio.pause();
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
      bar.classList.remove("playing");
    }
  });

  volume.addEventListener("input", () => {
    audio.volume = parseFloat(volume.value);
  });
}

/* ============================================================
   6. MUSIC / VINYL PLAYER
============================================================ */
function initMusicPlayer() {
  const audio = document.getElementById("musicAudio");
  const playBtn = document.getElementById("musicPlay");
  const playIcon = document.getElementById("musicPlayIcon");
  const record = document.getElementById("vinylRecord");
  const tonearm = document.getElementById("tonearm");
  const progress = document.getElementById("musicProgress");
  const currentEl = document.getElementById("musicCurrent");
  const durationEl = document.getElementById("musicDuration");

  function formatTime(sec) {
    if (!isFinite(sec) || isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().catch(() => { });
      record.classList.add("spinning");
      tonearm.classList.add("dropped");
      playIcon.classList.remove("fa-play");
      playIcon.classList.add("fa-pause");
    } else {
      audio.pause();
      record.classList.remove("spinning");
      tonearm.classList.remove("dropped");
      playIcon.classList.remove("fa-pause");
      playIcon.classList.add("fa-play");
    }
  });

  audio.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(audio.duration);
  });

  audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
      progress.value = (audio.currentTime / audio.duration) * 100;
      currentEl.textContent = formatTime(audio.currentTime);
    }
  });

  audio.addEventListener("ended", () => {
    record.classList.remove("spinning");
    tonearm.classList.remove("dropped");
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
    progress.value = 0;
  });

  progress.addEventListener("input", () => {
    if (audio.duration) {
      audio.currentTime = (progress.value / 100) * audio.duration;
    }
  });
}

/* ============================================================
   7. VAULT (KEYWORD VALIDATION)
============================================================ */
function initVault() {
  const form = document.getElementById("vaultForm");
  const input = document.getElementById("vaultInput");
  const error = document.getElementById("vaultError");
  const card = document.querySelector(".vault-card");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const raw = input.value.trim().toLowerCase().replace(/\s+/g, "");

    if (!raw) {
      showVaultError("Type your keyword to unlock your letter.");
      triggerShake();
      return;
    }

    const entry = LETTERS_DATA[raw];

    if (entry) {
      error.classList.remove("show");
      error.textContent = "";
      input.value = "";
      openLetterModal(entry);
    } else {
      showVaultError("That keyword doesn't match anything on this shelf. Try again.");
      triggerShake();
    }
  });

  function showVaultError(msg) {
    error.textContent = msg;
    error.classList.add("show");
  }

  function triggerShake() {
    card.classList.remove("shake");
    input.classList.remove("shake");
    // force reflow so animation can retrigger
    void card.offsetWidth;
    card.classList.add("shake");
    input.classList.add("shake");
    input.focus();
    setTimeout(() => {
      card.classList.remove("shake");
      input.classList.remove("shake");
    }, 550);
  }
}

/* ============================================================
   8. HINT MODAL
============================================================ */
function initHintModal() {
  const openBtn = document.getElementById("vaultHintBtn");
  const modal = document.getElementById("hintModal");
  const closeBtn = document.getElementById("hintClose");

  openBtn.addEventListener("click", () => modal.classList.add("open"));
  closeBtn.addEventListener("click", () => modal.classList.remove("open"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("open");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.classList.remove("open");
  });
}

/* ============================================================
   9. LETTER MODAL
============================================================ */
function initLetterModal() {
  const modal = document.getElementById("letterModal");
  const closeBtn = document.getElementById("letterClose");

  closeBtn.addEventListener("click", () => closeLetterModal());
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeLetterModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeLetterModal();
  });
}

function openLetterModal(entry) {
  document.getElementById("letterPhoto").src = entry.photo;
  document.getElementById("letterPhoto").alt = entry.name;
  document.getElementById("letterName").textContent = entry.name;
  document.getElementById("letterBody").textContent = entry.letter;
  document.getElementById("letterMemory").textContent = entry.memory;

  document.getElementById("letterModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLetterModal() {
  document.getElementById("letterModal").classList.remove("open");
  document.body.style.overflow = "";
}

/* ============================================================
   10. HERO PARTICLES (light dust motes)
============================================================ */
function initParticles() {
  const canvas = document.getElementById("particleCanvas");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let width, height;
  let animationId;

  function resize() {
    const hero = document.getElementById("hero");
    width = canvas.width = hero.offsetWidth;
    height = canvas.height = hero.offsetHeight;
  }

  function createParticles() {
    const count = Math.min(70, Math.floor((width * height) / 18000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.4,
      speedY: Math.random() * 0.25 + 0.05,
      speedX: (Math.random() - 0.5) * 0.15,
      alpha: Math.random() * 0.5 + 0.15,
      flicker: Math.random() * 0.02 + 0.005,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.y -= p.speedY;
      p.x += p.speedX;
      p.alpha += (Math.random() - 0.5) * p.flicker;
      p.alpha = Math.max(0.05, Math.min(0.65, p.alpha));

      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(230, 199, 120, ${p.alpha})`;
      ctx.fill();
    });
    animationId = requestAnimationFrame(draw);
  }

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  resize();
  createParticles();

  if (!prefersReduced) {
    draw();
  } else {
    // static single frame for reduced motion
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(230, 199, 120, ${p.alpha})`;
      ctx.fill();
    });
  }

  window.addEventListener("resize", () => {
    cancelAnimationFrame(animationId);
    resize();
    createParticles();
    if (!prefersReduced) draw();
  });
}

/* ============================================================
   11. SIDE NAV SCROLLSPY
============================================================ */
function initSideNav() {
  const dots = document.querySelectorAll(".side-dot");
  const sections = Array.from(dots).map((dot) =>
    document.querySelector(dot.getAttribute("href"))
  );

  function onScroll() {
    const scrollPos = window.scrollY + window.innerHeight / 2;
    let activeIndex = 0;

    sections.forEach((sec, i) => {
      if (sec && sec.offsetTop <= scrollPos) {
        activeIndex = i;
      }
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === activeIndex);
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(dot.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

const glow=document.querySelector(".cursor-glow");

window.addEventListener("mousemove",(e)=>{
    glow.style.left=e.clientX+"px";
    glow.style.top=e.clientY+"px";
});

window.addEventListener("scroll",()=>{

const y=window.scrollY;

document.querySelector(".hero-title").style.transform=
`translateY(${y*0.18}px)`;

document.querySelector(".hero-sub").style.transform=
`translateY(${y*0.1}px)`;

document.querySelector(".hero-frame").style.transform=
`translateY(${y*0.25}px) scale(${1+y*0.0002})`;

});