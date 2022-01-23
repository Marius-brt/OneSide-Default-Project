const router = require("oneside").router();

router.get("/", (req, res) => {
  res
    .ejs({
      version: require("../package.json").dependencies.oneside.replace("^", ""),
    })
    .render("home");
});

module.exports = router;
