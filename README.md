# CSS Art

A personal study project exploring CSS animations and visual art through code.

## How it works

Each animation lives in its own file under `animations/`. To add a new one:

1. Create a CSS file in `animations/` with the styles and keyframes.
2. Register it in the `animations` array in `main.js`:

```js
{
  id: "my-animation",
  label: "My Animation",
  css: "animations/my-animation.css",
  html: `<div class="my-element"></div>`,
}
```

The nav button is generated automatically. Clicking it loads the CSS and renders the element in the stage.

3. Open `index.html` in the browser.