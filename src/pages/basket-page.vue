<template>
  <div v-for="product in basketStore.basketProducts" :key="product.id">
    <product-card :product="product"></product-card>
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