import { createApp } from "vue";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";
import { VDataTable } from "vuetify/labs/VDataTable";
import "@mdi/font/css/materialdesignicons.css";

import { createPinia } from "pinia";

import axios from "axios";

import router from "@/router";

const vuetify = createVuetify({
  components: { ...components, VSkeletonLoader, VDataTable },
  directives,
  icons: {
    defaultSet: "mdi",
  },
});

const pinia = createPinia();

axios.defaults.headers.common["Cache-Control"] = "no-cache";

createApp(App).use(vuetify).use(pinia).use(router).mount("#app");
