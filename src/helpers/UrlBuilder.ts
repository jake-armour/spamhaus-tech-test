import { UseMainStore } from "@/state/MainStore";
import { storeToRefs } from "pinia";
import { computed } from "vue";

export const useBaseUrl = (apiType: string) => {
  const { getApiBaseUrl } = storeToRefs(UseMainStore());

  return computed(() => {
    return new URL(`${getApiBaseUrl.value}/${apiType}`);
  });
};
