<template>
  <div>
    <VForm @submit.prevent="updateUser">
      <VTextField label="Name" v-model="newUser.name"></VTextField>
      <VSelect
        :items="countries"
        v-model="newUser.cc"
        item-title="label"
        item-value="value"
      />
      <div class="d-flex justify-space-between">
        <VBtn rounded="xl" color="red-lighten-4" @click="deleteUser"
          >Delete</VBtn
        >
        <VBtn rounded="xl" color="blue-darken-4" type="submit">Save</VBtn>
      </div>
    </VForm>
  </div>
</template>

<script setup lang="ts">
import { toRefs, ref } from "vue";
import { IEditAndCreateData } from "@/typings/pages/UserTypes";
import { useEditUrl } from "@/helpers/UrlBuilder";
import axios from "axios";
import { useRouter } from "vue-router";
import { UseUserStore } from "@/state/stores/UserStore";

const router = useRouter();
const props = defineProps<{
  user: IEditAndCreateData;
}>();
const { user } = toRefs(props);
const { refreshData } = UseUserStore();

const countries = ref([
  { value: "SP", label: "Spain" },
  { value: "IT", label: "Italy" },
]);


const newUser = ref({
  id: user.value.id,
  name: user.value.name,
  cc: user.value.cc,
});

const updateUser = async () => {
  const newUserData = {
    ...newUser.value,
    "modified-by": "admin",
    "updated-ts": new Date().getTime(),
  };
  const url = useEditUrl("users", user.value.id);
  await axios.put(url.value.toString(), newUserData).then(() => {
    router.push("/users");
  });
};

const deleteUser = async () => {
  const confirm = window.confirm("Are you sure you want to delete this user?");

  if (confirm) {
    const url = useEditUrl("users", user.value.id);
    await axios.delete(url.value.toString()).then(() => {
      refreshData();
      router.push("/users");
    });
  }
};
</script>
