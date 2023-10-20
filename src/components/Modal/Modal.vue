<script setup lang="ts">
const props = defineProps<{
  open: boolean;
  linkVideo: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <transition name="fade">
    <div class="vue-modal" v-show="props.open">
      <transition name="drop-in">
        <div>
          <button type="button" @click="$emit('close')">Fechar</button>
          <h1>{{ props.title }}</h1>
          <div class="vue-modal-content">
            <video controls :src="props.linkVideo"></video>
            <slot />
            <h1>{{ props.description }}</h1>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style scoped lang="scss">
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.drop-in-enter-active,
.drop-in-leave-active {
  transition: all 0.3s ease-out;
}

.drop-in-enter-from,
.drop-in-leave-to {
  opacity: 0;
  transform: translate(0, -50px);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

button {
  float: right;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
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

.vue-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #fff;
  z-index: 1;
}

.vue-modal-content {
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 0.3rem;
}
</style>
