<template>
  <header class="mb-[50px]">
    <div class="notch"></div>
    <nav class="flex items-center mt-[15px] justify-between">
      <div class="text-2xl font-semibold text-main">
        Shop
      </div>
      <ul class="flex relative">
        <nav-link route="/" name="Каталог"></nav-link>
        <nav-link route="/basket" name="">
          <basket style="fill: #2D3B87;" class="basket"></basket>
        </nav-link>
        <div v-if="basketStore.basketProducts.length > 0" class="have-products"></div>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import NavLink from '@/components/header/elements/nav-link.vue'
import { Basket } from '../icons';
import { basketModel } from '@/entities/basket'
import { onMounted } from 'vue';

const basketStore = basketModel()
onMounted(() => {
  basketStore.getBasketProducts()
})
</script>

<style>
.notch {
  @apply bg-[#E0E3EE] rounded-b-[10px] w-full h-[40px]
}
.basket {
  @apply w-[30px] hover:opacity-70 duration-200
}
.have-products {
  @apply w-2 h-2 rounded-full bg-red-600 absolute right-[25px] top-[10px]
}
</style>
