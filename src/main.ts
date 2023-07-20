import { createApp } from "vue";
import "./style.css";
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

import router from "@/router";

const vuetify = createVuetify({
  components: { ...components, VSkeletonLoader, VDataTable },
  directives,
  icons: {
    defaultSet: "mdi",
  },
});

const pinia = createPinia();

createApp(App).use(vuetify).use(pinia).use(router).mount("#app");
