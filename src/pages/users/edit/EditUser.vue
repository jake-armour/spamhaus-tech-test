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
import { toRefs, ref } from "vue";
import { IEditAndCreateData } from "@/typings/pages/UserTypes";
import { useEditUrl } from "@/helpers/UrlBuilder";
import axios from "axios";
import { useRouter } from "vue-router";
import { UseUserStore } from "@/state/stores/UserStore";
import EditCreateDialog from "@/components/EditCreateDialog.vue";

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

const dialog = ref({ title: null, text: null, icon: null });
const showDialog = ref(false);

const closeDialog = () => {
  showDialog.value = false;
  router.push("/users");
  refreshData();
};

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
  await axios
    .put(url.value.toString(), newUserData)
    .then(async () => {
      dialog.value = {
        icon: "mdi-check-circle",
        text: `You have successfully updated ${newUser.value.name}`,
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

const deleteUser = async () => {
  const confirm = window.confirm("Are you sure you want to delete this user?");

  if (confirm) {
    const url = useEditUrl("users", user.value.id);
    await axios
      .delete(url.value.toString())
      .then(async () => {
        dialog.value = {
          icon: "mdi-check-circle",
          text: `You have successfully deleted ${user.value.name}`,
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
  }
};
</script>
