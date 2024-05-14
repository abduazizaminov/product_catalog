<template>
  <div class="layout">
    <Header></Header>
    <router-view></router-view>
    <div @click="scrollToTop()" v-if="showButton" style="box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2)"
      class="fixed cursor-pointer shadow-xl rounded-full bottom-5 right-5">
      <Arrow></Arrow>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Header } from '@/components/header'
import { Arrow } from '@/components/icons'
import { RouterView } from 'vue-router'
import { ref, onMounted, onBeforeUnmount } from 'vue';

const showButton = ref(false)
onMounted(() => {
  window.addEventListener("scroll", changeButtonCondition);
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", changeButtonCondition);
})

const changeButtonCondition = (): any => {
  showButton.value = window.scrollY > window.innerHeight;
}

const scrollToTop = (): any => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style>
.layout {
  @apply max-w-[1200px] w-full m-auto px-[20px]
}
</style>
