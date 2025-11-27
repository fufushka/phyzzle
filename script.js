const rocket = document.getElementById("scroll-rocket");
const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

document.addEventListener("DOMContentLoaded", () => {
  const layers = document.querySelectorAll(".star-layer");

  const starsCount = {
    "layer-1": 250,
    "layer-2": 200,
    "layer-3": 100,
  };

  layers.forEach((layer) => {
    const layerClass = layer.classList[1];
    const count = starsCount[layerClass] || 50;

    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      const x = Math.random() * 100;
      const y = Math.random() * 100;

      const duration = 2 + Math.random() * 3;
      const delay = Math.random() * 5;

      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.setProperty("--duration", `${duration}s`);
      star.style.setProperty("--delay", `${delay}s`);

      layer.appendChild(star);
    }
  });

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    console.log(scrollY);
    console.log(totalHeight);
    layers.forEach((layer) => {
      const speed = layer.getAttribute("data-speed");

      const yPos = -(scrollY * speed);

      layer.style.transform = `translateY(${yPos}px)`;
    });
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Дякуємо за звернення! Ми зв'яжемося з вами найближчим часом.");
  this.reset();
});

window.addEventListener("scroll", () => {
  const y = window.scrollY;

  if (y > 100) {
    rocket.style.opacity = "1";
    rocket.style.transition = "opacity 0.3s ease, transform 0.1s linear";
  } else {
    rocket.style.opacity = "0";
  }

  let progress = y / totalHeight;

  const moveDistance = window.innerHeight - 100;

  const rocketY = progress * moveDistance;

  const tilt = Math.min(progress * 360, 45);

  rocket.style.transform = `translateY(${rocketY}px) rotate(${tilt}deg)`;
});

// Функція для прокрутки до контактів
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function ex() {}
