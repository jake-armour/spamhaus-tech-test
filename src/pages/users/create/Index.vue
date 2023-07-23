<template>
  <div>
    <CreateUser />
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";

import CreateUser from "@/pages/users/create/CreateUser.vue";
import { useUserComposable } from "@/pages/users/UserComposable";
import { UsePageStore } from "@/state/stores/PageStore";

const { setPageTitle } = UsePageStore();

const { getEditUserData, getEditUsersLoading, getFormattedEditUsersData } =
  useUserComposable();

setPageTitle("Create user");
</script>
