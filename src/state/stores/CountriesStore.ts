import { ICountryData } from "@/typings/pages/CountryTypes";
import { ComputedRef, computed, ref } from "vue";
import { defineStore } from "pinia";
import { useBaseUrl } from "@/helpers/UrlBuilder";
import { useAsyncData } from "@/helpers/DataFetching";

function refineData<T extends ICountryData>(data: T[]): ComputedRef {
  return computed(() => {
    return data;
  });
}

export const UseCountriesStore = defineStore("countries", () => {
  const apiUrl = useBaseUrl("countries");
  const { data, loading, refreshData } = useAsyncData<ICountryData[]>(apiUrl);
  const tempData = ref<ICountryData[]>([]);

  const getCountriesData = computed(() => {
    if (data.value) {
      return refineData(data.value).value;
    }
    return [];
  });
  const getCountriesLoading = computed(() => loading.value);

  return {
    getCountriesData,
    getCountriesLoading,
    tempData,
    loading,
    refreshData,
  };
});
