<template>
  <div>
    <VForm @submit.prevent="createUser">
      <VTextField label="Name" v-model="user.name"></VTextField>
      <VSelect
        :items="countries"
        v-model="user.cc"
        item-title="label"
        item-value="value"
      />
      <div class="d-flex justify-end">
        <VBtn rounded="xl" color="blue-darken-4" type="submit">Create</VBtn>
      </div>
    </VForm>
  </div>
</template>

<script setup lang="ts">
import { toRefs, ref } from "vue";
import { IEditAndCreateData } from "@/typings/pages/UserTypes";
import { useBaseUrl, useEditUrl } from "@/helpers/UrlBuilder";
import axios from "axios";
import { useRouter } from "vue-router";
import { UseUserStore } from "@/state/stores/UserStore";

const router = useRouter();
const { refreshData } = UseUserStore();

const user = ref({
  name: null,
  cc: null,
});

const countries = ref([
  { value: "SP", label: "Spain" },
  { value: "IT", label: "Italy" },
]);

const createUser = async () => {
  const newUserData = {
    id: new Date().getTime(),
    ...user.value,
    "modified-by": "admin",
    "updated-ts": Math.floor(new Date().getTime() / 1000),
  };
  const url = useBaseUrl("users");
  await axios.post(`${url.value.toString()}/`, newUserData).then(() => {
    router.push("/users");
  });
};
</script>
