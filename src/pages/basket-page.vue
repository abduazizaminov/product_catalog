<template>
  <div v-if="basketStore.basketProducts.length > 0">
    <product-card v-for="product in basketStore.basketProducts" :key="product.id" :product="product"></product-card>
  </div>
  <div v-else class="no-product">
    Вы не добавили ни одного товара в корзину
  </div>
</template>

<script setup lang="ts">
import ProductCard from '@/components/product-card/index.vue'
import { ref, onMounted } from 'vue';
import { basketModel } from '@/entities/basket'

const basketStore = basketModel()

onMounted(() => {
  basketStore.getBasketProducts()
})
</script>

<style>
.no-product {
  @apply text-3xl text-secondaryColor font-medium text-center
}</style>