import "./assets/styles/main.css";
import "vue-toastification/dist/index.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toast from "vue-toastification";
import { authChecker, pinia } from "./plugins/auth-checker";

async function initialize() {
  // wait for the auth checker to finish before initializing the app
  await authChecker();

  const app = createApp(App);

  app.use(Toast, {
    position: "top-center",
    timeout: 3000,
  });
  app.use(pinia);
  app.use(router);

  app.mount("#app");
}

initialize();
