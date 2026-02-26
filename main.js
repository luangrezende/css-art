const animations = [
  {
    id: "square",
    label: "Square",
    css: "animations/square.css",
    html: `<div class="square"></div>`,
  },
];

let currentCSS = null;

function loadAnimation(id) {
  const anim = animations.find((a) => a.id === id);
  if (!anim) return;

  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.id === id);
  });

  if (currentCSS) currentCSS.remove();
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = anim.css;
  document.head.appendChild(link);
  currentCSS = link;

  const stage = document.getElementById("stage");
  stage.innerHTML = anim.html;
}

function buildNav() {
  const nav = document.getElementById("nav");
  animations.forEach((anim) => {
    const btn = document.createElement("button");
    btn.className = "nav-btn";
    btn.dataset.id = anim.id;
    btn.textContent = anim.label;
    btn.addEventListener("click", () => loadAnimation(anim.id));
    nav.appendChild(btn);
  });
}

buildNav();
loadAnimation(animations[0].id);
