import { useBaseUrl, useEditUrl } from "@/helpers/UrlBuilder";
import Constants from "@/state/Constants";
import { expect, test } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { createApp, unref } from "vue";

const app = createApp({});
const pinia = createPinia();
app.use(pinia);

beforeEach(() => {
  setActivePinia(pinia);
});

test("creating base url", () => {
  const url = useBaseUrl("users");
  const expectedUrl = new URL(`${Constants.API_BASE_URL}/users`);

  expect(unref(url)).toEqual(expectedUrl);
});

test("creating edit url", () => {
  const url = useEditUrl("users", 100);
  const expectedUrl = new URL(`${Constants.API_BASE_URL}/users/100`);

  expect(unref(url)).toEqual(expectedUrl);
});
