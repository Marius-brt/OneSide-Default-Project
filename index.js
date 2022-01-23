const oneside = require("oneside");

const app = oneside.init({
  showCompiling: true,
  favicon: "favicon.ico",
});

/**
 * Middleware for ligh/dark theme
 */
app.use((req, res, next) => {
  if (
    req.cookies.theme &&
    (req.cookies.theme === "dark" || req.cookies.theme === "light")
  )
    res.ejs({
      icon: req.cookies.theme === "dark" ? "fa-sun" : "fa-moon",
      theme: req.cookies.theme,
    });
  else
    res.ejs({
      icon: "fa-moon",
      theme: "light",
    });
  next.ok();
});

app.listen();
