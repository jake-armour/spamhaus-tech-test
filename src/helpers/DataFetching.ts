import axios from "axios";
import { Ref, ref, watch, unref } from "vue";

export type TAxiosData<T> = T;

const normaliseUrlString = (url: string | URL) => {
  if (typeof url === "string") return url;

  return url.toString();
};

export const useAsyncData = <T>(url: URL | Ref<URL>) => {
  const data = ref<Ref<T> extends Array<Ref<T>> ? Ref<T[]> : Ref<T>>(null);
  const loading = ref(false);

  watch(
    () => normaliseUrlString(unref(url)),
    async (u) => {
      loading.value = true;
      try {
        const response = await axios.get<TAxiosData<T>>(normaliseUrlString(u));
        data.value = response.data;
      } catch (e) {
        console.log(e);
      } finally {
        loading.value = false;
      }
    },
    {
      immediate: true,
      flush: "post",
    }
  );
  const refreshData = async () => {
    loading.value = true;
    try {
      const response = await axios.get<TAxiosData<T>>(
        normaliseUrlString(unref(url))
      );
      data.value = response.data;
    } catch (e) {
      console.log(e);
    } finally {
      loading.value = false;
    }
  };
  return {
    data,
    loading,
    refreshData,
  };
};
