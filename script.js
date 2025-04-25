// ===== CONFIGURABLE BIRTHDAY DATE =====
// Change this to the birthday date you want to celebrate
// Format: "YYYY-MM-DD"
const birthdayDate = "2025-04-25";

// ===== DOM ELEMENTS =====
document.addEventListener("DOMContentLoaded", () => {
  // Theme toggle
  const themeToggle = document.getElementById("themeToggle");
  const themeLight = document.querySelector(".theme-light");
  const themeDark = document.querySelector(".theme-dark");

  // Countdown elements
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const celebrateNowBtn = document.getElementById("celebrateNow");

  // Slideshow elements
  const slideshowContainer = document.getElementById("slideshow-container");
  const slides = document.querySelectorAll(".slide");
  const prevSlideBtn = document.getElementById("prev-slide");
  const nextSlideBtn = document.getElementById("next-slide");
  const indicators = document.querySelectorAll(".indicator");

  // Music player elements
  const audioPlayer = document.getElementById("audio-player");
  const playPauseBtn = document.getElementById("play-pause");
  const playIcon = document.querySelector(".play-icon");
  const pauseIcon = document.querySelector(".pause-icon");
  const prevSongBtn = document.getElementById("prev-song");
  const nextSongBtn = document.getElementById("next-song");
  const progressBar = document.getElementById("progress-bar");
  const currentTimeEl = document.getElementById("current-time");
  const durationEl = document.getElementById("duration");
  const currentSongTitleEl = document.getElementById("current-song-title");
  const playlist = document.getElementById("playlist");
  const playlistItems = document.querySelectorAll("#playlist li");

  // Guestbook elements
  const guestbookForm = document.getElementById("guestbook-form");
  const nameInput = document.getElementById("name");
  const messageInput = document.getElementById("message");
  const wishesContainer = document.getElementById("wishes-container");

  // ===== STARS BACKGROUND =====
  function createStars() {
    const starsContainer = document.getElementById("stars");
    const starsCount = 100;

    for (let i = 0; i < starsCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;

      // Random size
      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // Random twinkle animation delay
      star.style.animationDelay = `${Math.random() * 3}s`;
      star.style.animationDuration = `${Math.random() * 2 + 1}s`;
      star.classList.add("animate-twinkle");

      starsContainer.appendChild(star);
    }
  }

  // ===== COUNTDOWN TIMER =====
  function updateCountdown() {
    const currentDate = new Date();
    const targetDate = new Date(birthdayDate);

    // If the birthday has passed this year, calculate for next year
    if (targetDate < currentDate) {
      targetDate.setFullYear(targetDate.getFullYear() + 1);
    }

    const totalSeconds = (targetDate - currentDate) / 1000;

    if (totalSeconds <= 0) {
      // It's birthday time!
      daysEl.innerHTML = "00";
      hoursEl.innerHTML = "00";
      minutesEl.innerHTML = "00";
      secondsEl.innerHTML = "00";

      // Auto launch confetti
      launchConfetti();
      return;
    }

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days.toString().padStart(2, "0");
    hoursEl.innerHTML = hours.toString().padStart(2, "0");
    minutesEl.innerHTML = minutes.toString().padStart(2, "0");
    secondsEl.innerHTML = seconds.toString().padStart(2, "0");
  }

  // ===== CONFETTI ANIMATION =====
  function launchConfetti() {
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "1000";
    canvas.style.pointerEvents = "none";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const numberOfPieces = 200;
    const colors = [
      "#f44336",
      "#e91e63",
      "#9c27b0",
      "#673ab7",
      "#3f51b5",
      "#2196f3",
      "#03a9f4",
      "#00bcd4",
      "#009688",
      "#4CAF50",
      "#8BC34A",
      "#CDDC39",
      "#FFEB3B",
      "#FFC107",
      "#FF9800",
      "#FF5722",
    ];

    for (let i = 0; i < numberOfPieces; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        rotation: Math.random() * 360,
        size: Math.random() * 15 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        velocity: {
          x: Math.random() * 6 - 3,
          y: Math.random() * 3 + 2,
        },
        rotationSpeed: Math.random() * 2 - 1,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pieces.forEach((piece) => {
        ctx.save();
        ctx.translate(piece.x, piece.y);
        ctx.rotate((piece.rotation * Math.PI) / 180);

        ctx.fillStyle = piece.color;
        ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);

        ctx.restore();

        piece.x += piece.velocity.x;
        piece.y += piece.velocity.y;
        piece.rotation += piece.rotationSpeed;

        // Reset if out of screen
        if (piece.y > canvas.height) {
          piece.y = -piece.size;
          piece.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    // Remove confetti after 10 seconds
    setTimeout(() => {
      document.body.removeChild(canvas);
    }, 10000);
  }

  // ===== FIREWORKS ANIMATION =====
  function launchFireworks() {
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "1000";
    canvas.style.pointerEvents = "none";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fireworks = [];
    const particles = [];
    const colors = [
      "#f44336",
      "#e91e63",
      "#9c27b0",
      "#673ab7",
      "#3f51b5",
      "#2196f3",
      "#03a9f4",
      "#00bcd4",
      "#009688",
      "#4CAF50",
      "#8BC34A",
      "#CDDC39",
      "#FFEB3B",
      "#FFC107",
      "#FF9800",
      "#FF5722",
    ];

    function Firework() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height;
      this.targetX = Math.random() * canvas.width;
      this.targetY = (Math.random() * canvas.height) / 2;
      this.speed = 2;
      this.angle = Math.atan2(this.targetY - this.y, this.targetX - this.x);
      this.velocity = {
        x: Math.cos(this.angle) * this.speed,
        y: Math.sin(this.angle) * this.speed,
      };
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.particles = [];
      this.arrived = false;
    }

    Firework.prototype.update = function () {
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      // Check if firework has reached target
      const distanceToTarget = Math.sqrt(
        Math.pow(this.targetX - this.x, 2) + Math.pow(this.targetY - this.y, 2)
      );
      if (distanceToTarget < 5 && !this.arrived) {
        this.arrived = true;
        this.explode();
      }
    };

    Firework.prototype.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    };

    Firework.prototype.explode = function () {
      const particleCount = 100;
      for (let i = 0; i < particleCount; i++) {
        const particle = {
          x: this.x,
          y: this.y,
          color: this.color,
          velocity: {
            x: (Math.random() - 0.5) * 5,
            y: (Math.random() - 0.5) * 5,
          },
          alpha: 1,
          size: Math.random() * 3 + 1,
        };
        particles.push(particle);
      }
    };

    function createFireworks() {
      if (Math.random() < 0.05) {
        fireworks.push(new Firework());
      }
    }

    function updateFireworks() {
      for (let i = 0; i < fireworks.length; i++) {
        fireworks[i].update();
        fireworks[i].draw();

        if (fireworks[i].arrived) {
          fireworks.splice(i, 1);
          i--;
        }
      }
    }

    function updateParticles() {
      for (let i = 0; i < particles.length; i++) {
        particles[i].x += particles[i].velocity.x;
        particles[i].y += particles[i].velocity.y;
        particles[i].velocity.y += 0.05; // gravity
        particles[i].alpha -= 0.01;

        ctx.beginPath();
        ctx.arc(
          particles[i].x,
          particles[i].y,
          particles[i].size,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(${Number.parseInt(
          particles[i].color.slice(1, 3),
          16
        )}, ${Number.parseInt(
          particles[i].color.slice(3, 5),
          16
        )}, ${Number.parseInt(particles[i].color.slice(5, 7), 16)}, ${
          particles[i].alpha
        })`;
        ctx.fill();

        if (particles[i].alpha <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
    }

    function animate() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      createFireworks();
      updateFireworks();
      updateParticles();

      requestAnimationFrame(animate);
    }

    animate();

    // Remove fireworks after 15 seconds
    setTimeout(() => {
      document.body.removeChild(canvas);
    }, 15000);
  }

  // ===== SLIDESHOW =====
  let currentSlide = 0;

  function showSlide(index) {
    // Ensure index is valid
    if (index < 0 || index >= slides.length) {
      console.error("Invalid slide index:", index);
      return;
    }

    // Hide all slides
    slides.forEach((slide) => {
      slide.style.opacity = "0";
      slide.style.zIndex = "0";
      slide.style.display = "none";
    });

    // Show the selected slide
    slides[index].style.display = "flex";

    // Use setTimeout to ensure the display change has taken effect before changing opacity
    setTimeout(() => {
      slides[index].style.opacity = "1";
      slides[index].style.zIndex = "1";
    }, 10);

    // Update indicators
    indicators.forEach((indicator) => {
      indicator.classList.remove("active");
      indicator.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    });

    indicators[index].classList.add("active");
    indicators[index].style.backgroundColor = "rgba(255, 255, 255, 1)";

    currentSlide = index;

    // Adjust container for the current slide
    adjustSlideshowContainer();
  }

  function adjustSlideshowContainer() {
    // Get the current slide image
    const currentSlideImg = slides[currentSlide].querySelector("img");

    // Get the slideshow container
    const container = document.getElementById("slideshow-container");

    // Set a minimum height
    const minHeight = 300;

    // If the image is loaded, adjust container height
    if (currentSlideImg.complete) {
      const imgRatio =
        currentSlideImg.naturalWidth / currentSlideImg.naturalHeight;

      // For portrait images (taller than wide)
      if (imgRatio < 1) {
        container.style.minHeight = `${minHeight}px`;
      } else {
        // For landscape, maintain aspect ratio with max height
        container.style.minHeight = `${minHeight}px`;
      }
    }
  }

  function nextSlide() {
    const newIndex = (currentSlide + 1) % slides.length;
    showSlide(newIndex);
    console.log("Next slide:", newIndex);
  }

  function prevSlide() {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(newIndex);
    console.log("Previous slide:", newIndex);
  }

  // ===== MUSIC PLAYER =====
  let currentSongIndex = 0;
  let isPlaying = false;

  function loadSong(index) {
    const songs = Array.from(playlistItems);
    const song = songs[index];

    if (!song) return;

    const songSrc = song.getAttribute("data-src");
    const songTitle = song.querySelector("span").textContent;

    audioPlayer.src = songSrc;
    currentSongTitleEl.textContent = songTitle;

    // Highlight current song in playlist
    playlistItems.forEach((item) => {
      item.classList.remove("bg-primary-500/20");
    });
    songs[index].classList.add("bg-primary-500/20");

    currentSongIndex = index;
  }

  function playSong() {
    audioPlayer.play();
    isPlaying = true;
    playIcon.classList.add("hidden");
    pauseIcon.classList.remove("hidden");
  }

  function pauseSong() {
    audioPlayer.pause();
    isPlaying = false;
    playIcon.classList.remove("hidden");
    pauseIcon.classList.add("hidden");
  }

  function prevSong() {
    currentSongIndex =
      (currentSongIndex - 1 + playlistItems.length) % playlistItems.length;
    loadSong(currentSongIndex);
    if (isPlaying) playSong();
  }

  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlistItems.length;
    loadSong(currentSongIndex);
    if (isPlaying) playSong();
  }

  function updateProgress(e) {
    const { duration, currentTime } = e.target;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.value = progressPercent;

    // Format time
    const durationMinutes = Math.floor(duration / 60);
    const durationSeconds = Math.floor(duration % 60);
    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);

    if (duration) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds
        .toString()
        .padStart(2, "0")}`;
    }

    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds
      .toString()
      .padStart(2, "0")}`;
  }

  function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;

    audioPlayer.currentTime = (clickX / width) * duration;
  }

  // ===== GUESTBOOK =====
  function addWish(name, message) {
    // Save to localStorage
    const wishes = JSON.parse(localStorage.getItem("birthdayWishes") || "[]");
    wishes.push({ name, message, date: new Date().toISOString() });
    localStorage.setItem("birthdayWishes", JSON.stringify(wishes));

    // Reload wishes to avoid duplication
    loadWishes();
  }

  function loadWishes() {
    const wishes = JSON.parse(localStorage.getItem("birthdayWishes") || "[]");

    // Clear existing wishes
    wishesContainer.innerHTML = "";

    // If no wishes in localStorage, add example wishes
    if (wishes.length === 0) {
      const exampleWishes = [
        {
          name: "Aditya Kumar Pandey",
          message:
            "Wishing you the happiest birthday ever! May all your dreams come true.",
        },
        {
          name: "Abhishek Yadav",
          message:
            "Happy birthday! Hope your day is filled with joy and laughter!",
        },
      ];

      exampleWishes.forEach((wish) => {
        const wishElement = document.createElement("div");
        wishElement.classList.add(
          "bg-white/10",
          "backdrop-blur-md",
          "rounded-lg",
          "p-4",
          "shadow-lg"
        );

        wishElement.innerHTML = `
        <p class="mb-2 italic">"${wish.message}"</p>
        <p class="text-right text-sm text-gray-300">- ${wish.name}</p>
      `;

        wishesContainer.appendChild(wishElement);
      });
    } else {
      // Add wishes from localStorage
      wishes.forEach((wish) => {
        const wishElement = document.createElement("div");
        wishElement.classList.add(
          "bg-white/10",
          "backdrop-blur-md",
          "rounded-lg",
          "p-4",
          "shadow-lg"
        );

        wishElement.innerHTML = `
        <p class="mb-2 italic">"${wish.message}"</p>
        <p class="text-right text-sm text-gray-300">- ${wish.name}</p>
      `;

        wishesContainer.appendChild(wishElement);
      });
    }
  }

  // ===== EVENT LISTENERS =====

  // Theme toggle
  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    themeLight.classList.toggle("hidden");
    themeDark.classList.toggle("hidden");
  });

  // Countdown
  celebrateNowBtn.addEventListener("click", () => {
    launchFireworks();
  });

  // Slideshow
  prevSlideBtn.addEventListener("click", (e) => {
    e.preventDefault();
    prevSlide();
    console.log("Prev button clicked");
  });

  nextSlideBtn.addEventListener("click", (e) => {
    e.preventDefault();
    nextSlide();
    console.log("Next button clicked");
  });

  indicators.forEach((indicator) => {
    indicator.addEventListener("click", () => {
      const index = Number.parseInt(indicator.getAttribute("data-index"));
      showSlide(index);
    });
  });

  // Touch swipe for slideshow
  let touchStartX = 0;
  let touchEndX = 0;

  slideshowContainer.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  slideshowContainer.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    if (touchEndX < touchStartX) {
      nextSlide(); // Swipe left
    } else if (touchEndX > touchStartX) {
      prevSlide(); // Swipe right
    }
  }

  // Adjust slideshow container when images load
  slides.forEach((slide) => {
    const img = slide.querySelector("img");
    if (img) {
      img.addEventListener("load", adjustSlideshowContainer);
    }
  });

  // Adjust slideshow container on window resize
  window.addEventListener("resize", adjustSlideshowContainer);

  // Music player
  playPauseBtn.addEventListener("click", () => {
    if (audioPlayer.src) {
      if (isPlaying) {
        pauseSong();
      } else {
        playSong();
      }
    } else if (playlistItems.length > 0) {
      loadSong(0);
      playSong();
    }
  });

  prevSongBtn.addEventListener("click", prevSong);
  nextSongBtn.addEventListener("click", nextSong);

  audioPlayer.addEventListener("timeupdate", updateProgress);
  audioPlayer.addEventListener("ended", nextSong);

  progressBar.addEventListener("click", function (e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;

    audioPlayer.currentTime = (clickX / width) * duration;
  });

  playlistItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      loadSong(index);
      playSong();
    });
  });

  // Guestbook
  guestbookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (name && message) {
      addWish(name, message);
      nameInput.value = "";
      messageInput.value = "";
    }
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for fixed header
          behavior: "smooth",
        });
      }
    });
  });

  // Call the function after DOM content is loaded
  adjustSlideshowImages();

  // ===== INITIALIZATION =====
  function init() {
    // Create stars background
    createStars();

    // Start countdown
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Initialize slideshow
    showSlide(0);

    // Set auto-advance with a longer interval and store the interval ID
    const slideshowInterval = setInterval(() => {
      nextSlide();
    }, 7000); // Auto advance slides every 7 seconds

    // Load wishes from localStorage
    loadWishes();

    // Launch confetti on load
    setTimeout(launchConfetti, 1000);

    // Check if it's midnight to launch fireworks
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();

    if (currentHour === 0 && currentMinute === 0) {
      launchFireworks();
    }
  }

  // Initialize everything
  init();
});

// Function to adjust slideshow images
function adjustSlideshowImages() {
  const slides = document.querySelectorAll("#slideshow-container .slide img");

  slides.forEach((img) => {
    img.onload = () => {
      const isLandscape = img.naturalWidth > img.naturalHeight;
      if (isLandscape) {
        img.classList.add("landscape");
      } else {
        img.classList.remove("landscape");
      }
    };
  });
}
