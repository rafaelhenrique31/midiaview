<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { UseCategory } from "../../composables/UseCategory";
import { CategoryGetResponse } from "../../services/types";

const UseCategoryStore = UseCategory();

const categories = ref<CategoryGetResponse[]>([]);

async function GetCategories() {
  try {
    var response = await UseCategoryStore.getAllCategories();

    if (response != null) {
      categories.value = response;
    }
  } catch (error) {}
}

onBeforeMount(async () => {
  await GetCategories();
});
</script>
<template>
  <div v-for="category in categories" :key="category.id">
    <h1>{{ category.name }}</h1>
    <img :src="category.bannerImage" />
  </div>
</template>

<style scoped lang="scss"></style>
