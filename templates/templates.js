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
      "reset.scss": require("./stylesheets/styles/base/reset.stylesheet.js"),
      "typography.scss": require("./stylesheets/styles/base/typography.stylesheet.js"),
    },
    "components": {
      "accordion.scss": require("./stylesheets/styles/components/accordion.stylesheet.js"),
      "alerts.scss": require("./stylesheets/styles/components/alerts.stylesheet.js"),
      "badges.scss": require("./stylesheets/styles/components/badges.stylesheet.js"),
      "buttons.scss": require("./stylesheets/styles/components/buttons.stylesheet.js"),
      "icons.scss": require("./stylesheets/styles/components/icons.stylesheet.js"),
      "component-variants.scss": require("./stylesheets/styles/components/component-variants.stylesheet.js"),
    },
    "layout": {
      "navigation.scss": require("./stylesheets/styles/layout/navigation.stylesheet.js"),
      "footer.scss": require("./stylesheets/styles/layout/footer.stylesheet.js"),
    },
    "utilities": {
      "variables.scss": require("./stylesheets/styles/utilities/variables.stylesheet.js"),
      "mixins.scss": require("./stylesheets/styles/utilities/mixins.stylesheet.js"),
    },
    "main.scss": require("./stylesheets/styles/main.stylesheet.js")
  }
}