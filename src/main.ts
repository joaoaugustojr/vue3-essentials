import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "../src/style/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
