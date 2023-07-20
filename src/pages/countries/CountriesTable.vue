<script setup lang="ts">
import { IUserData } from "@/typings/pages/UserTypes";
import { toRefs, ref } from "vue";
import format from "date-fns/format";
const props = defineProps<{
  data: IUserData[];
}>();
const { data } = toRefs(props);
const headers = ref([
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
    title: "Continent",
    align: "start",
    sortable: false,
    key: "continent",
  },
  {
    title: "Actions",
    align: "start",
    sortable: false,
    key: "edit",
  },
]);

const itemsPerPage = ref(10);
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
        <td>{{ item.columns.name }}</td>
        <td>{{ item.columns.cc }}</td>
        <td>{{ item.columns.continent }}</td>
        <td>
          <VBtn color="blue-lighten-5" rounded="xl">Edit</VBtn>
        </td>
      </tr>
    </template>
  </VDataTable>
</template>
