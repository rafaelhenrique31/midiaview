<script setup lang="ts">
const props = defineProps<{
  open: boolean;
  linkVideo: string;
}>();
</script>

<template>
  <div class="vue-modal" v-show="props.open">
    <transition name="slide">
      <div class="veu-modal-inner">
        <div class="vue-modal-content">
          <video controls :src="props.linkVideo"></video>
          <slot />
          <button type="button" @click="$emit('close')">Close</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.vue-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.vue-modal-content {
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 0.3rem;
}
</style>
