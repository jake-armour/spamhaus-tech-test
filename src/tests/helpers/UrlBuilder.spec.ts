import { useBaseUrl } from "@/helpers/UrlBuilder";
import Constants from "@/state/Constants";
import { expect, test } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { createTestingPinia } from "@pinia/testing";
import { createApp, unref } from "vue";

const testPinia = createTestingPinia();

const app = createApp({});
const pinia = createPinia();
app.use(pinia);

beforeEach(() => {
  setActivePinia(pinia);
});

test("creating url", () => {
  const url = useBaseUrl("users");
  const expectedUrl = new URL(`${Constants.API_BASE_URL}/users`);

  expect(unref(url)).toEqual(expectedUrl);
});
