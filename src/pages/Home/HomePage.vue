<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { CategoryGetResponse, MidiaGetResponse } from "../../services/types";
import { UseCategory } from "../../Composables/UseCategory";

const UseCategoryStore = UseCategory();

const categories = ref<CategoryGetResponse[]>([]);
const midias = ref<MidiaGetResponse[]>([]);

async function GetCategories() {
  try {
    var response = await UseCategoryStore.getAllCategories();

    if (response != null) {
      categories.value = response.filter((x) => x.active == true);
      categories.value.map(async (category) => {
        var teste = await GetMidias(category.id);

        if (teste != null) {
          midias.value = teste;
        }
      });
    }
  } catch (error) {}
}

async function GetMidias(categoryId: number) {
  try {
    var response = await UseCategoryStore.getMidiaByCategoryId(categoryId);

    if (response != null) {
      midias.value = response.filter((x) => x.active == true);
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
    <img :src="midias.find((x) => x.category.id == category.id)?.bannerImage" />
  </div>
</template>

<style scoped lang="scss">
body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.card {
  padding: 2em;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
</style>
