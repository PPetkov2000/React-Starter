module.exports = {
  "index.js": require("./index.js"),
  "App.js": require("./App.js"),
  "App.scss": require("./App.stylesheet.js"),
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
    "stringUtils.js": require("./utils/stringUtils.js"),
  },
  "router": {
    "Routes.js": require("./router/Routes.js"),
    "PrivateRoute.js": require("./router/PrivateRoute.js"),
    "AdminRoute.js": require("./router/AdminRoute.js"),
  },
  "hooks": {
    "useFetch.js": require("./hooks/useFetch.js"),
    "useLocalStorage.js": require("./hooks/useLocalStorage.js")
  },
  "services": {
    "users.js": require("./services/users.js")
  },
  "styles": {
    "base": {
      "reset.scss": require("./styles/base/reset.stylesheet.js"),
      "typography.scss": require("./styles/base/typography.stylesheet.js"),
    },
    "components": {
      "accordion.scss": require("./styles/components/accordion.stylesheet.js"),
      "alerts.scss": require("./styles/components/alerts.stylesheet.js"),
      "badges.scss": require("./styles/components/badges.stylesheet.js"),
      "buttons.scss": require("./styles/components/buttons.stylesheet.js"),
      "icons.scss": require("./styles/components/icons.stylesheet.js"),
      "component-variants.scss": require("./styles/components/component-variants.stylesheet.js"),
    },
    "layout": {
      "navigation.scss": require("./styles/layout/navigation.stylesheet.js"),
      "footer.scss": require("./styles/layout/footer.stylesheet.js"),
    },
    "utilities": {
      "variables.scss": require("./styles/utilities/variables.stylesheet.js"),
      "mixins.scss": require("./styles/utilities/mixins.stylesheet.js"),
    },
    "main.scss": require("./styles/main.stylesheet.js")
  }
}
