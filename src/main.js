import { createApp } from "vue";
import App from "./App.vue";

import settings from "@/assets/json/settings.json";

import "@/styles/base.scss";
import "@/styles/layout.scss";
import "@/styles/modules.scss";
import "@/styles/state.scss";

const app = createApp(App);
app.config.globalProperties.$settings = settings;
app.mount("#app");
