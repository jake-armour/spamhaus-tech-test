import { IUserData, IEditAndCreateData } from "@/typings/pages/UserTypes";
import { useAsyncData } from "@/helpers/DataFetching";
import { useEditUrl } from "@/helpers/UrlBuilder";
import { computed } from "vue";

export const useEditUserComposable = () => {
  const url = useEditUrl("users");
  const { data, loading } = useAsyncData<IUserData>(url);

  const getEditUserData = computed(() => {
    return data.value;
  });
  const getEditUsersLoading = computed(() => loading.value);

  const getFormattedEditUsersData = computed((): IEditAndCreateData => {
    if (!getEditUserData.value) return null;

    return {
      id: getEditUserData.value.id,
      name: getEditUserData.value.name,
      cc: getEditUserData.value.cc,
    };
  });

  return {
    getEditUserData,
    getEditUsersLoading,
    getFormattedEditUsersData,
  };
};
