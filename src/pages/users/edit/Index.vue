<template>
  <div>
    <div v-if="getFormattedEditUsersData && !getEditUsersLoading">
      <EditUser :user="getFormattedEditUsersData" />
    </div>
    <VSkeletonLoader v-else boilerplate :height="260" class="w-100" />
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";

import EditUser from "@/pages/users/edit/EditUser.vue";
import { useUserComposable } from "@/pages/users/UserComposable";
import { UsePageStore } from "@/state/stores/PageStore";

const { setPageTitle } = UsePageStore();

const { getEditUserData, getEditUsersLoading, getFormattedEditUsersData } =
  useUserComposable();

watch(getEditUserData, () => {
  if (getEditUserData.value) {
    setPageTitle(`Editing ${getEditUserData.value.name}`);
  }
});
</script>
