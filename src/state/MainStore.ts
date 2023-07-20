import { defineStore } from "pinia";
import Constants from "./Constants";

interface MainStoreState {
  apiBaseUrl: string;
}

export const UseMainStore = defineStore("main", {
  state: (): MainStoreState => ({
    apiBaseUrl: Constants.API_BASE_URL,
  }),
  getters: {
    getApiBaseUrl: (state): string => state.apiBaseUrl,
  },
});
