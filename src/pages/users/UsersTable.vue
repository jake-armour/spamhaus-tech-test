<script setup lang="ts">
import { IUserData } from "@/typings/pages/UserTypes";
import { toRefs, ref } from "vue";
import format from "date-fns/format";
import italyFlag from "@/assets/IT.png";
import spainFlag from "@/assets/SP.png";
import axios from "axios";
import { useEditUrl } from "@/helpers/UrlBuilder";

const emit = defineEmits(["updated"]);

const props = defineProps<{
  data: IUserData[];
}>();
const { data } = toRefs(props);
const headers = ref([
  {
    title: "ID",
    align: "start",
    sortable: true,
    key: "id",
  },
  {
    title: "Name",
    align: "start",
    sortable: true,
    key: "name",
  },
  {
    title: "Country",
    align: "start",
    sortable: false,
    key: "cc",
  },
  {
    title: "Modified By",
    align: "start",
    sortable: false,
    key: "modified-by",
  },
  {
    title: "Updated On",
    align: "start",
    sortable: false,
    key: "updated-ts",
  },
  {
    title: "Actions",
    align: "center",
    sortable: false,
    key: "edit",
  },
]);

const icons = ref({
  IT: {
    icon: italyFlag,
    title: "Italy",
  },
  SP: { icon: spainFlag, title: "Spain" },
});

const itemsPerPage = ref(10);

const deleteUser = async (id) => {
  const confirm = window.confirm("Are you sure you want to delete this user?");

  if (confirm) {
    const url = useEditUrl("users", id);
    await axios.delete(url.value.toString()).then(() => {
      emit("updated");
    });
  }
};
</script>

<template>
  <VDataTable
    v-model:items-per-page="itemsPerPage"
    :items="data"
    :headers="headers"
    item-value="id"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td>{{ item.columns.id }}</td>
        <td>{{ item.columns.name }}</td>
        <td>
          <VTooltip :text="icons[item.columns.cc].title">
            <template v-slot:activator="{ props }">
              <VImg
                v-bind="props"
                width="25"
                :src="icons[item.columns.cc].icon"
              />
            </template>
          </VTooltip>
        </td>
        <td>{{ item.columns["modified-by"] }}</td>
        <td>
          {{
            format(
              new Date(item.columns["updated-ts"] * 1000),
              "dd/MM/yyyy HH:mm"
            )
          }}
        </td>
        <td class="text-center">
          <VBtn
            color="blue-lighten-5"
            class="mr-2"
            rounded="xl"
            :to="{ path: `/users/${item.columns.id}` }"
            >Edit</VBtn
          >
          <VBtn
            color="red-lighten-5"
            class="ml-2"
            rounded="xl"
            @click="deleteUser(item.columns.id)"
            >Delete</VBtn
          >
        </td>
      </tr>
    </template>
  </VDataTable>
</template>
