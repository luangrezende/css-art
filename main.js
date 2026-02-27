const catalog = [
  {
    section: "animations",
    items: [
      { label: "Square", css: "animations/square.css", html: `<div class="square"></div>` },
    ],
  },
  {
    section: "paintings",
    items: [
      {
        label: "Sunset",
        css: "paintings/sunset.css",
        html: `<div class="painting-sunset"><div class="ps-sky"></div><div class="ps-cloud ps-c1"></div><div class="ps-cloud ps-c2"></div><div class="ps-cloud ps-c3"></div><div class="ps-sun"></div><div class="ps-mountain-far"></div><div class="ps-mountain-near"></div><div class="ps-tree-line-l"></div><div class="ps-tree-line-r"></div><div class="ps-water"></div><div class="ps-ground"></div></div>`,
      },
    ],
  },
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

catalog.forEach((section, i) => {
  if (i > 0) {
    const divider = document.createElement("span");
    divider.className = "nav-divider";
    nav.appendChild(divider);
  }

  const label = document.createElement("span");
  label.className = "nav-section";
  label.textContent = section.section;
  nav.appendChild(label);

  section.items.forEach((item) => {
    const btn = document.createElement("button");
    btn.className = "nav-btn";
    btn.textContent = item.label;
    btn.addEventListener("click", () => load(item, btn));
    nav.appendChild(btn);
  });
});

nav.querySelector(".nav-btn").click();
