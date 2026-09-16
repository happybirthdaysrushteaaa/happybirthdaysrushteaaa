/* ============================================================
   ✏️ CUSTOMIZE EVERYTHING HERE
   ============================================================ */
const CONFIG = {
  herName: "Srushteaaaa",
  yourName: "Chanduuuuu",

  // Change this to the secret code she needs to enter.
  secretCode: "1210",

  // Main text
  heroLine: "Today is a little more beautiful because you were born.",
  finalMessage: "May your days be full of laughter, love, peace and everything your heart wishes for.",

  // Your birthday letter
  letter: `Write your personal birthday letter here.

Tell her what she means to you, mention your favourite memories, thank her for being part of your life, and wish her everything beautiful.

You can write multiple paragraphs here.`,

  // Relationship timeline
  memories: [
    {
  date: "DD • MONTH • 2026",
  title: "Those Eyes",
  text: `I still remember the first time I saw your picture.

I don't know what it was about that moment,
but your eyes made me forget everything else around me.

I kept looking at them,
as if there was something in them
I couldn't look away from.

Beautiful eyes are easy to notice,
but yours...
they stayed with me.

Even now, whenever I look at you,
I still get lost in those same eyes
that caught my attention the very first time. ❤️`
},
    {
      date: "23 • June • 2026",
      title: "The Beginning",
      text: `I still remember the very first day we met.

You were wearing a saree, sitting quietly to the left of the door.

I walked into the studio, not knowing that something so ordinary was about to become one of the most beautiful memories of my life.

And then you looked at me.

Just one look.

It lasted only for a moment, but somehow, that moment stayed with me.

Even today, I can close my eyes and remember that look exactly the way it was.

Maybe you didn't know it then,

but somewhere in that little moment,

a beautiful story had already begun. ❤️`
    },
    {
      date: "20 • August • 2026",
      title: "The Day We Met Again",
     text: `And then came the day we met again—
this time, it wasn't by chance.

We planned it.
We chose a place.
And somehow, Malnad Cafe became the setting for another memory I'll never forget.

I still remember how nervous I was that day—
trying to act normal while butterflies were having a festival inside me.
Every little moment felt bigger than it should have.

I even brought you a pair of socks as a little gift,
probably trying to hide all that nervousness behind something simple.

And then, in your excitement,
you hit me on the shoulder...

And somehow, instead of making me less nervous,
you made me fall even harder for you. ❤️

Maybe you didn't realize it that day,
but somewhere between the nervousness, the butterflies, the little gift,
and that playful hit on my shoulder,
I was already falling a little deeper. ❤️`

    },
    {
      date: "DD • MONTH • YEAR",
      title: "That Day",
      text: "Add another meaningful memory here."
    },
    {
      date: "TODAY",
      title: "And here we are ❤️",
      text: "Write something about the journey you've shared so far."
    }
  ],

  // Things you love about her
  reasons: [
    "Your smile can change my entire mood.",
    "The way you care about the little things.",
    "Your laugh.",
    "The way you make ordinary moments special.",
    "Your kindness.",
    "The way you are simply yourself.",
    "Your beautiful heart.",
    "Because life feels better with you in it."
  ],

  // Gallery — put your images inside assets/photos/
  photos: [
    { file: "assets/photos/photo1.jpg", caption: "Our first favourite memory." },
    { file: "assets/photos/photo2.jpg", caption: "A moment I never want to forget." },
    { file: "assets/photos/photo3.jpg", caption: "Just us ❤️" },
    { file: "assets/photos/photo4.jpg", caption: "One of many beautiful days." },
    { file: "assets/photos/photo5.jpg", caption: "My favourite person." },
    { file: "assets/photos/photo6.jpg", caption: "Forever a special memory." }
  ]
};

/* ============================================================
   DON'T NEED TO EDIT BELOW THIS LINE
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("herNameHero").textContent = CONFIG.herName;
  document.getElementById("herNameLetter").textContent = CONFIG.herName;
  document.getElementById("yourNameLetter").textContent = CONFIG.yourName;
  document.getElementById("heroLine").textContent = CONFIG.heroLine;
  document.getElementById("letterText").innerText = CONFIG.letter;
  document.getElementById("finalMessage").textContent = CONFIG.finalMessage;

  renderTimeline();
  renderGallery();
  document.getElementById("reasonText").textContent = CONFIG.reasons[0];

  document.getElementById("secretInput").addEventListener("keydown", e => {
    if (e.key === "Enter") unlock();
  });

  createPetals();
});

function unlock() {
  const input = document.getElementById("secretInput").value.trim();

  if (input === CONFIG.secretCode) {
    document.getElementById("intro").classList.remove("active");
    document.getElementById("intro").style.display = "none";
    document.getElementById("main").classList.remove("hidden");
    document.getElementById("musicBtn").style.display = "block";
    window.scrollTo(0, 0);
  } else {
    document.getElementById("hint").textContent = "Hmm... that's not it. Try again ❤️";
    document.getElementById("secretInput").animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-8px)" },
        { transform: "translateX(8px)" },
        { transform: "translateX(0)" }
      ],
      { duration: 300 }
    );
  }
}

function renderTimeline() {
  const container = document.getElementById("timeline");

  container.innerHTML = CONFIG.memories.map(item => `
    <article class="timeline-item">
      <small>${item.date}</small>
      <h3>${item.title}</h3>
<p>${item.text.replace(/\n/g, "<br>")}</p>    </article>
  `).join("");
}

function renderGallery() {
  const container = document.getElementById("gallery");

  container.innerHTML = CONFIG.photos.map(item => `
    <article class="photo">
      <img src="${item.file}" alt="${item.caption}" loading="lazy"
           onerror="this.style.display='none'; this.parentElement.innerHTML += '<p>Add your photo here: ${item.file}</p>'">
      <p>${item.caption}</p>
    </article>
  `).join("");
}

let reasonIndex = 0;

function nextReason() {
  reasonIndex = (reasonIndex + 1) % CONFIG.reasons.length;
  document.getElementById("reasonNumber").textContent =
    String(reasonIndex + 1).padStart(2, "0");

  document.getElementById("reasonText").animate(
    [
      { opacity: 0, transform: "translateY(10px)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    { duration: 350 }
  );

  document.getElementById("reasonText").textContent = CONFIG.reasons[reasonIndex];
}

function openLetter() {
  document.getElementById("envelope").classList.toggle("open");
}

function scrollToId(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

let musicPlaying = false;

function toggleMusic() {
  const music = document.getElementById("music");
  const btn = document.getElementById("musicBtn");

  if (!musicPlaying) {
    music.play().catch(() => {
      alert("Add your song as assets/birthday-song.mp3 first.");
    });
    btn.textContent = "❚❚";
    musicPlaying = true;
  } else {
    music.pause();
    btn.textContent = "♫";
    musicPlaying = false;
  }
}

function createPetals() {
  const container = document.getElementById("petals");

  setInterval(() => {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.textContent = Math.random() > .35 ? "🌸" : "♡";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = (10 + Math.random() * 14) + "px";
    petal.style.setProperty("--x", (Math.random() * 180 - 90) + "px");
    petal.style.animationDuration = (6 + Math.random() * 6) + "s";
    container.appendChild(petal);
    setTimeout(() => petal.remove(), 13000);
  }, 650);
}

function celebrate() {
  for (let i = 0; i < 90; i++) {
    const spark = document.createElement("div");
    spark.className = "spark";

    const angle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * 280;

    spark.style.left = "50vw";
    spark.style.top = "55vh";
    spark.style.setProperty("--dx", Math.cos(angle) * distance + "px");
    spark.style.setProperty("--dy", Math.sin(angle) * distance + "px");

    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 1200);
  }

  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      const petal = document.createElement("div");
      petal.className = "petal";
      petal.textContent = "❤️";
      petal.style.left = Math.random() * 100 + "vw";
      petal.style.fontSize = "18px";
      petal.style.setProperty("--x", (Math.random() * 240 - 120) + "px");
      petal.style.animationDuration = (4 + Math.random() * 4) + "s";
      document.getElementById("petals").appendChild(petal);
      setTimeout(() => petal.remove(), 9000);
    }, i * 80);
  }
}



/* =========================================
   REAL-TIME BIRTHDAY COUNTDOWN
   October 12, 2026 - 12:00 AM IST
   ========================================= */

const birthdayDate = new Date(
  "2026-10-12T00:00:00+05:30"
).getTime();

function updateBirthdayCountdown() {

  // Current real time
  const now = Date.now();

  // Remaining milliseconds
  const difference = birthdayDate - now;

  // Birthday reached
  if (difference <= 0) {

    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";

    document
      .getElementById("birthdayLock")
      .classList.add("unlocked");

    clearInterval(countdownTimer);

    return;
  }

  // Calculate remaining time

  const totalSeconds = Math.floor(
    difference / 1000
  );

  const days = Math.floor(
    totalSeconds / 86400
  );

  const hours = Math.floor(
    (totalSeconds % 86400) / 3600
  );

  const minutes = Math.floor(
    (totalSeconds % 3600) / 60
  );

  const seconds =
    totalSeconds % 60;


  // Display actual countdown

  document.getElementById("days").textContent =
    String(days).padStart(2, "0");

  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}


/*
   Run immediately when page loads
*/
updateBirthdayCountdown();


/*
   Update every second
*/
const countdownTimer = setInterval(
  updateBirthdayCountdown,
  1000
);