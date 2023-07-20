<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <VApp>
    <VMain><NavBar /> <RouterView class="mt-4 w-75 mx-auto" /></VMain>
  </VApp>
</template>
