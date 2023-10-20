<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { CategoryGetResponse, MidiaGetResponse } from "../../services/types";
import { UseCategory } from "../../Composables/UseCategory";
import Modal from "../../components/Modal/Modal.vue";

const UseCategoryStore = UseCategory();
const isOpen = ref(false);
const selectedMedia = ref("");
const title = ref("");
const description = ref("");

const categories = ref<CategoryGetResponse[]>([]);
const midias = ref<MidiaGetResponse[]>([]);

async function GetCategories() {
  try {
    var response = await UseCategoryStore.getAllCategories();
    if (response) {
      categories.value = response.filter((x) => x.active == true);
      categories.value.map(async (category) => {
        const midia = await GetMidias(category.id);
        if (midia) {
          category.midias = midia;
        }
      });
    }
  } catch (error) {}
}
async function GetMidias(categoryId: number) {
  try {
    var response = await UseCategoryStore.getMidiaByCategoryId(categoryId);
    if (response != null) {
      return (midias.value = response.filter((x) => x.active == true));
    } else return [];
  } catch (error) {}
}

function toggleIsOpen(
  linkVideo: string,
  titleMidia: string,
  descriptionMidia: string
) {
  console.log(categories.value);
  isOpen.value = !isOpen.value;
  selectedMedia.value = linkVideo;
  title.value = titleMidia;
  description.value = descriptionMidia;
}

onBeforeMount(async () => {
  await GetCategories();
});
</script>
<template>
  <div class="category" v-for="category in categories" :key="category.id">
    <h1>{{ category.name }}</h1>
    <div class="midia-container">
      <div
        v-if="category.midias.length > 0"
        class="midia"
        v-for="midia in category.midias"
        :key="midia.id"
      >
        <div>
          <img
            @click="
              toggleIsOpen(midia.linkVideo, midia.name, midia.description)
            "
            class="bannerImage"
            :src="midia.bannerImage"
          />
          <Modal
            :open="isOpen"
            :linkVideo="selectedMedia"
            :title="title"
            :description="description"
            @close="isOpen = !isOpen"
          >
          </Modal>
        </div>
      </div>
      <div v-else>
        <h1>Nenhuma midia encontrada para esta categoria</h1>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bannerImage {
  max-width: 350px;
  height: 250px;
  min-width: 400px;
  padding: 5px;
}
.midia-container {
  display: flex;
  flex-wrap: wrap;
}
.body {
  background-color: aqua;
}
.category {
  padding: 5px 20px;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}
</style>
