<template>
  <li :class="`nav-item ${currentRoutePath.path === props.route ? 'bg-bgColor' : ''}`">
    <router-link :to="props.route">
      <span>{{ props.name }}</span>
      <slot></slot>
    </router-link>
  </li>
</template>

<script setup lang="ts">
import { defineProps, ref, watchEffect } from "vue";
import { useRoute, RouterLink } from "vue-router";

interface Props {
  name?: string;
  svg?: string;
  route: string; // required
}

const props = defineProps<Props>();

const currentRoutePath = useRoute()

</script>

<style scoped>
.nav-item {
  @apply p-[7px] text-[#2D3B87] text-[16px] rounded-[10px] cursor-pointer font-medium hover:opacity-70 duration-200 flex justify-center items-center mr-[20px]
}
</style>