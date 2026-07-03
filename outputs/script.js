const WA_NUMBER = "77086808254";
const finePointer = window.matchMedia("(pointer: fine)").matches;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const header = document.querySelector("[data-header]");
window.addEventListener("scroll", () => {
  header?.classList.toggle("is-solid", window.scrollY > 18);
}, { passive: true });

const statusNode = document.querySelector("[data-open-status]");
const minutes = new Date().getHours() * 60 + new Date().getMinutes();
const normalizedMinutes = minutes < 45 ? minutes + 1440 : minutes;
if (statusNode) statusNode.textContent = normalizedMinutes >= 600 && normalizedMinutes <= 1485 ? "Открыто сейчас" : "Закрыто сейчас";

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14, rootMargin: "0px 0px -50px" });
document.querySelectorAll("[data-reveal]").forEach((node) => revealObserver.observe(node));

const choices = {
  wings: {
    image: "./assets/images/wings.webp",
    title: "Крылышки как главный повод",
    text: "Хрустящая корочка, соусы и формат от 300 г до 1,5 кг. Для одного заказа или большой компании.",
    cta: "Заказать крылышки"
  },
  combo: {
    image: "./assets/images/combo.webp",
    title: "Комбо без долгих обсуждений",
    text: "Крылышки, пицца, картофель, наггетсы и напитки в одном наборе. Удобно для офиса и вечера дома.",
    cta: "Собрать комбо"
  },
  pizza: {
    image: "./assets/images/hero.webp",
    title: "Пицца к горячему сету",
    text: "Маргарита, пепперони, 4 сыра и мясная. Добавьте к крылышкам, чтобы закрыть стол полностью.",
    cta: "Добавить пиццу"
  },
  doner: {
    image: "./assets/images/about.webp",
    title: "Донер, гриль и быстрый обед",
    text: "Классический, куриный и большой донер для сценария, где нужно сытно и без ожидания.",
    cta: "Выбрать донер"
  }
};

const choiceImage = document.querySelector("[data-choice-image]");
const choiceTitle = document.querySelector("[data-choice-title]");
const choiceText = document.querySelector("[data-choice-text]");
const choiceCta = document.querySelector("[data-choice-cta]");

document.querySelectorAll("[data-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    const data = choices[button.dataset.choice];
    if (!data) return;
    document.querySelectorAll("[data-choice]").forEach((node) => node.classList.remove("is-active"));
    button.classList.add("is-active");
    if (choiceImage) choiceImage.src = data.image;
    if (choiceTitle) choiceTitle.textContent = data.title;
    if (choiceText) choiceText.textContent = data.text;
    if (choiceCta) choiceCta.textContent = data.cta;
  });
});

if (finePointer && !reduceMotion) {
  const cursor = document.querySelector(".cursor");
  const preview = document.querySelector("[data-hover-preview]");
  let tx = innerWidth / 2;
  let ty = innerHeight / 2;
  let x = tx;
  let y = ty;

  window.addEventListener("mousemove", (event) => {
    tx = event.clientX;
    ty = event.clientY;
    if (cursor) cursor.style.opacity = "1";
    if (preview?.classList.contains("is-visible")) {
      preview.style.left = `${event.clientX + 90}px`;
      preview.style.top = `${event.clientY}px`;
    }
  });

  document.querySelectorAll("a, button, input, textarea").forEach((node) => {
    node.addEventListener("mouseenter", () => cursor?.classList.add("is-active"));
    node.addEventListener("mouseleave", () => cursor?.classList.remove("is-active"));
  });

  document.querySelectorAll(".magnetic").forEach((node) => {
    node.addEventListener("mousemove", (event) => {
      const box = node.getBoundingClientRect();
      const mx = event.clientX - box.left - box.width / 2;
      const my = event.clientY - box.top - box.height / 2;
      node.style.transform = `translate(${mx * 0.16}px, ${my * 0.22}px)`;
    });
    node.addEventListener("mouseleave", () => {
      node.style.transform = "";
    });
  });

  document.querySelectorAll("[data-preview]").forEach((row) => {
    row.addEventListener("mouseenter", () => {
      if (!preview) return;
      preview.src = row.dataset.preview;
      preview.classList.add("is-visible");
    });
    row.addEventListener("mouseleave", () => preview?.classList.remove("is-visible"));
  });

  function tick() {
    x += (tx - x) * 0.18;
    y += (ty - y) * 0.18;
    if (cursor) cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  }
  tick();
}

document.querySelector("[data-order-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const lines = [
    "Здравствуйте! Хочу сделать заказ в NRfood.",
    `Имя: ${data.get("name") || ""}`,
    `Телефон: ${data.get("phone") || ""}`,
    `Когда удобно: ${data.get("time") || "уточнить"}`,
    `Заказ: ${data.get("order") || "уточнить"}`
  ];
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
});
