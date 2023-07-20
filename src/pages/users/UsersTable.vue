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
        <td>{{ item.columns.id }}</td>
        <td>{{ item.columns.name }}</td>
        <td>{{ item.columns.cc }}</td>
        <td>{{ item.columns["modified-by"] }}</td>
        <td>
          {{ format(new Date(item.columns["updated-ts"]), "dd/MM/yyyy HH:mm") }}
        </td>
        <td>
          <VBtn
            color="blue-lighten-5"
            rounded="xl"
            :to="{ path: `/users/${item.columns.id}` }"
            >Edit</VBtn
          >
        </td>
      </tr>
    </template>
  </VDataTable>
</template>
