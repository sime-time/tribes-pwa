import "./assets/styles/main.css";
import "vue-toastification/dist/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import Toast from "vue-toastification";
import { authChecker } from "./plugins/auth-checker";

const app = createApp(App);

app.use(Toast, {
  position: "top-center",
  timeout: 3000,
});

app.use(createPinia());
app.use(router);
app.use(authChecker);

app.mount("#app");
