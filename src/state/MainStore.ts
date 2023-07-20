import { TGetApiBaseUrl } from "@/typings/state/StoreTypes";
import { defineStore } from "pinia";
import Constants from "./Constants";

interface MainStoreState {
  apiBaseUrl: TGetApiBaseUrl;
}

export const UseMainStore = defineStore("main", {
  state: (): MainStoreState => ({
    apiBaseUrl: Constants.API_BASE_URL,
  }),
  getters: {
    getApiBaseUrl: (state): TGetApiBaseUrl => state.apiBaseUrl,
  },
});
