// plugins/myPlugin.js
export default {
  install: (app, options) => {
    app.config.globalProperties.$myGlobalFunction = function () {
      console.log("This is a global function.");
    };
  },
};
