<template>
  <VDialog max-width="500" v-model="props.value">
    <VCard :prepend-icon="props.icon">
      <template v-slot:title>{{ props.title }}</template>
      <VCardText>{{ props.text }}</VCardText>
      <VCardActions>
        <VBtn color="blue-lighten-4" @click="emit('close')">Close</VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script setup lang="ts">
const emit = defineEmits(["close"]);

const props = defineProps({
  value: Boolean,
  title: String,
  text: String,
  icon: String,
});
</script>
