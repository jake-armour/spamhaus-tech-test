<template>
  <div>
    <VForm @submit.prevent="createUser">
      <VTextField label="Name" v-model="user.name"></VTextField>
      <VSelect
        label="Country"
        :items="countries"
        v-model="user.cc"
        item-title="label"
        item-value="value"
      />
      <div class="d-flex justify-end">
        <VBtn rounded="xl" color="blue-darken-4" type="submit">Create</VBtn>
      </div>
    </VForm>

    <EditCreateDialog
      v-model="showDialog"
      :title="dialog.title"
      :text="dialog.text"
      :icon="dialog.icon"
      @close="closeDialog"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useBaseUrl } from "@/helpers/UrlBuilder";
import axios from "axios";
import { useRouter } from "vue-router";
import { UseUserStore } from "@/state/stores/UserStore";
import EditCreateDialog from "@/components/EditCreateDialog.vue";

const router = useRouter();
const { refreshData } = UseUserStore();

const countries = ref([
  { value: "SP", label: "Spain" },
  { value: "IT", label: "Italy" },
]);

const dialog = ref({ title: null, text: null, icon: null });

const user = ref({
  name: null,
  cc: null,
});

const showDialog = ref(false);

const closeDialog = () => {
  showDialog.value = false;
  router.push("/users");
  refreshData();
};

const createUser = async () => {
  const newUserData = {
    ...user.value,
    "modified-by": "admin",
    "updated-ts": Math.floor(new Date().getTime() / 1000),
  };
  const url = useBaseUrl("users");

  await axios
    .post(`${url.value.toString()}/`, newUserData)
    .then(async () => {
      dialog.value = {
        icon: "mdi-check-circle",
        text: `You have successfully created ${newUserData.name}`,
        title: "Success",
      };

      showDialog.value = true;
    })
    .catch((e) => {
      dialog.value = {
        icon: "mdi-close-circle",
        text: "Please try again later",
        title: "There has been an error",
      };

      showDialog.value = true;
    });
};
</script>
