// Генерація зірок
function createStars() {
  const starsContainer = document.getElementById("stars");
  const numberOfStars = 150;

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    star.style.opacity = Math.random() * 0.7 + 0.3;
    starsContainer.appendChild(star);
  }
}

createStars();

// Плавна прокрутка
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Обробка форми
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Дякуємо за звернення! Ми зв'яжемося з вами найближчим часом.");
  this.reset();
});

const rocket = document.getElementById("scroll-rocket");

window.addEventListener("scroll", () => {
  const y = window.scrollY;

  if (y > 1) {
    rocket.style.opacity = "1";
  } else {
    rocket.style.opacity = "0";
  }

  // Ракета рухається вниз повільніше за скрол
  const offset = Math.max(0, y - 500);

  // Можна зробити легкий нахил, ніби летить
  const tilt = offset * 0.03;

  rocket.style.transform = `translateY(${offset * 0.4}px) rotate(${tilt}deg)`;
});

// Функція для прокрутки до контактів
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function ex() { }