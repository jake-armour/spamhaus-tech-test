<template>
  <VAppBar class="mb-12">
    <VAppBarTitle>SpamHaus Tech Test</VAppBarTitle>
    <VSpacer />
    <VBtn :to="{ path: '/users' }">Users</VBtn>
    <VBtn :to="{ path: '/countries' }">Countries</VBtn>
  </VAppBar>
</template>
