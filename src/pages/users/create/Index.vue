<template>
  <div>
    <CreateUser />
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";

import CreateUser from "@/pages/users/create/CreateUser.vue";
import { useEditUserComposable } from "@/pages/users/edit/EditUserComposable";
import { UsePageStore } from "@/state/stores/PageStore";

const { setPageTitle } = UsePageStore();

const { getEditUserData, getEditUsersLoading, getFormattedEditUsersData } =
  useEditUserComposable();

watch(getEditUserData, () => {
  if (getEditUserData.value) {
    setPageTitle(`Editing ${getEditUserData.value.name}`);
  }
});
</script>
