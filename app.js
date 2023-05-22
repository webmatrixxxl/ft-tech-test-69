require("dotenv").config({
  path: `./.env.${process.env.NODE_ENV || "development"}`,
});
const { QUOTS_SYMBOLS_i18n } = require("./src/en.i18n.js");

require("sucrase/register"); // subset of babel
const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;
const { engine } = require("express-handlebars");
const jsxEngine = require("./lib/react-server");

const app = express();
app.engine(".jsx", jsxEngine);
app.engine(
  "handlebars",
  engine({ layoutsDir: path.join(app.settings.views, "handlebars", "layouts") })
);
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use("/dist", express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
  res.render("start");
});

/*
 * START HERE FOR JSX TEMPLATING
 */

app.get("/jsx", async (req, res) => {
  const symbolsQuery = Object.keys(QUOTS_SYMBOLS_i18n).join(`,`);

  const getSecuritiesQuotesBySymbol = async (symbols) => {
    return await fetch(
      `${process.env.API_URL_SCURITIES}${process.env.API_URL_SCURITIES_QUOTS}?symbols=${symbols}`
    )
      .then((response) => response.json())
      .catch((error) => {
        // handle error
        return error;
      })
      .finally(() => {
        // always executed
      });
  };

  const data = await getSecuritiesQuotesBySymbol(symbolsQuery);

  const templateData = {
    pageTitle: "Finencial Times",
    content: "Hello World!",
    data: data.data || {},
    error: data.error || '',
  };

  res.render("jsx/Main.jsx", templateData);
});
/*
 * END JSX TEMPLATING
 */

/*
 * START HERE FOR HANDLEBARS TEMPLATING
 */

app.get("/handlebars", async function (req, res) {
  // This object is passed to the Handlebars template.
  const templateData = {
    pageTitle: "Home",
    content: "Hello World!",
  };

  // This renders the Handlebars view at `views/home.handlebars`.
  res.render("handlebars/home", templateData);
});
/*
 * END HANDLEBARS TEMPLATING
 */

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
  });
}

// Export the app so that we can test it in `test/app.spec.js`
module.exports = app;
