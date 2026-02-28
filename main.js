const catalog = [
  {
    section: "animations",
    items: [
      { label: "Square", css: "animations/square/square.css", html: "animations/square/square.html" },
      { label: "Cube", css: "animations/cube/cube.css", html: "animations/cube/cube.html" },
    ],
  },
  {
    section: "paintings",
    items: [
      {
        label: "Sunset",
        css: "paintings/sunset/sunset.css",
        html: "paintings/sunset/sunset.html",
      },
      {
        label: "Moon",
        css: "paintings/moon/moon.css",
        html: "paintings/moon/moon.html",
      },
    ],
  },
];

const nav = document.getElementById("nav");
const stage = document.getElementById("stage");
let currentCSS = null;

async function load(item, btn) {
  nav.querySelectorAll(".nav-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  if (currentCSS) currentCSS.remove();
  currentCSS = document.createElement("link");
  currentCSS.rel = "stylesheet";
  currentCSS.href = item.css;
  document.head.appendChild(currentCSS);
  stage.innerHTML = await fetch(item.html).then((r) => r.text());
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
