module.exports = {
  "index.js": require("./index.js"),
  "App.js": require("./App.js"),
  "App.scss": require("./stylesheets/App.stylesheet.js"),
  "components": {
    "Loader.js": require("./components/Loader.js"),
    "Message.js": require("./components/Message.js"),
    "Navigation.js": require("./components/Navigation.js"),
    "Footer.js": require("./components/Footer.js"),
    "SearchForm.js": require("./components/SearchForm.js"),
  },
  "pages": {
    "Home.js": require("./pages/Home.js"),
    "Register.js": require("./pages/Register.js"),
    "Login.js": require("./pages/Login.js"),
    "Forbidden.js": require("./pages/Forbidden.js"),
    "PageNotFound.js": require("./pages/PageNotFound.js"),
  },
  "utils": {
    "api-instance.js": require("./utils/api-instance.js"),
    "api-interceptors.js": require("./utils/api-interceptors.js"),
    "errorHandler.js": require("./utils/errorHandler.js"),
  },
  "hooks": {
    "useFetch.js": require("./hooks/useFetch.js")
  },
  "services": {
    "users.js": require("./services/users.js")
  }
}