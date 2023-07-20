<template>
  <div>
    <VAlert class="mb-10" title="Country Functionality" type="info"
      >Despite no additional endpoints available for countries, I added this
      page as an example of what a typical web application would include,
      assuming CRUD operations were included for Countries as well.
    </VAlert>

    <div>
      <div v-if="countriesData && !loading">
        <CountriesTableControls />
        <CountriesTable :data="countriesData" />
      </div>
      <VSkeletonLoader v-else boilerplate loading class="mx-auto w-100" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { UseCountriesStore } from "@/state/stores/CountriesStore";
import { storeToRefs } from "pinia";
import CountriesTableControls from "./CountriesTableControls.vue";
import CountriesTable from "./CountriesTable.vue";
import { UsePageStore } from "@/state/stores/PageStore";

const { setPageTitle } = UsePageStore();

const { getCountriesData: countriesData, getCountriesLoading: loading } =
  storeToRefs(UseCountriesStore());

setPageTitle("Countries List");
</script>
