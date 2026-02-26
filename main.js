const animations = [
  { label: "Square", css: "animations/square.css", html: `<div class="square"></div>` },
];

const nav = document.getElementById("nav");
const stage = document.getElementById("stage");
let currentCSS = null;

function load(item, btn) {
  nav.querySelectorAll(".nav-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  if (currentCSS) currentCSS.remove();
  currentCSS = Object.assign(document.createElement("link"), {
    rel: "stylesheet",
    href: item.css,
  });
  document.head.appendChild(currentCSS);
  stage.innerHTML = item.html;
}

animations.forEach((item) => {
  const btn = document.createElement("button");
  btn.className = "nav-btn";
  btn.textContent = item.label;
  btn.addEventListener("click", () => load(item, btn));
  nav.appendChild(btn);
});

nav.querySelector(".nav-btn").click();
