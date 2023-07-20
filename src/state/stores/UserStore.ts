import { IUserData } from "@/typings/pages/UserTypes";
import { ComputedRef, computed, ref } from "vue";
import { defineStore } from "pinia";
import { useBaseUrl } from "@/helpers/UrlBuilder";
import { useAsyncData } from "@/helpers/DataFetching";

function refineData<T extends IUserData>(data: T[]): ComputedRef {
  return computed(() => {
    return data;
  });
}

export const UseUserStore = defineStore("user", () => {
  const apiUrl = useBaseUrl("users");
  const { data, loading, refreshData } = useAsyncData<IUserData[]>(apiUrl);
  const tempData = ref<IUserData[]>([]);

  const getUsersData = computed(() => {
    if (data.value) {
      return refineData(data.value).value;
    }
    return [];
  });
  const getUsersLoading = computed(() => loading.value);

  return {
    getUsersData,
    getUsersLoading,
    tempData,
    loading,
    refreshData,
  };
});
