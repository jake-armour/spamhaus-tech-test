import { defineStore } from "pinia";
import { ComputedRef, unref } from "vue";

interface PageState {
  title: string;
}

export const UsePageStore = defineStore("page", {
  state: (): PageState => ({
    title: "",
  }),
  getters: {
    getPageTitle: (state): string => state.title,
  },
  actions: {
    setPageTitle(title: string | ComputedRef<string>) {
      if (!unref(title)) {
        this.title = "";
      } else {
        this.title = unref(title);
      }
      document.title = `${this.title} | SpamHaus Tech Test`;
    },
  },
});
