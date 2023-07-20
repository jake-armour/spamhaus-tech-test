import { UseMainStore } from "@/state/MainStore";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

export const useBaseUrl = (apiType: string) => {
  const { getApiBaseUrl } = storeToRefs(UseMainStore());

  return computed(() => {
    return new URL(`${getApiBaseUrl.value}/${apiType}`);
  });
};

export const useEditUrl = (apiType: string, id: number = null) => {
  const route = useRoute();
  const idValue = ref("");

  if (route?.params.user) {
    idValue.value = `${route.params.user as string}`;
  }

  if (id) {
    idValue.value = `/${id.toString()}`;
  }

  const baseUrl = useBaseUrl(apiType);
  return computed(() => {
    const url = new URL(baseUrl.value);
    url.pathname += `${idValue.value}`;
    return url;
  });
};
