module.exports = {
  "index.js": require("./index.js"),
  "App.js": require("./App.js"),
  "components": {
    "Loader.js": require("./components/Loader.js"),
    "Message.js": require("./components/Message.js"),
    "Navigation.js": require("./components/Navigation.js"),
    "Footer.js": require("./components/Footer.js"),
  },
  "pages": {
    "Home.js": require("./pages/Home.js"),
    "Register.js": require("./pages/Register.js"),
    "Login.js": require("./pages/Login.js"),
  },
  "utils": {
    "api-instance.js": require("./utils/api-instance.js"),
    "api-interceptors.js": require("./utils/api-interceptors.js"),
    "errorHandler.js": require("./utils/errorHandler.js"),
  },
  "hooks": {
    "useFetch.js": require("./hooks/useFetch.js")
  }
}