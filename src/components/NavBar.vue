<template>
  <VAppBar color="grey-lighten-2" class="mb-12">
    <VAppBarTitle
      ><RouterLink :to="{ path: '/users' }"
        ><img :src="logo" height="50" /></RouterLink
    ></VAppBarTitle>
    <VSpacer />
    <VBtn :to="{ path: '/users' }">Users</VBtn>
    <VBtn :to="{ path: '/countries' }">Countries</VBtn>
  </VAppBar>
</template>

<script setup lang="ts">
import logo from "@/assets/logo.png";
</script>
