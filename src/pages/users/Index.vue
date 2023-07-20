<template>
  <div>
    <div v-if="usersData && !loading">
      <UsersTableControls />
      <UsersTable :data="usersData" @updated="refreshData" />
    </div>
    <VSkeletonLoader v-else boilerplate loading class="mx-auto w-100" />
  </div>
</template>

<script setup lang="ts">
import { UseUserStore } from "@/state/stores/UserStore";
import { storeToRefs } from "pinia";
import UsersTableControls from "./UsersTableControls.vue";
import UsersTable from "./UsersTable.vue";

const { getUsersData: usersData, getUsersLoading: loading } = storeToRefs(
  UseUserStore()
);
const { refreshData } = UseUserStore();
</script>
