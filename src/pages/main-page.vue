<template>
  <div>
    <div class="filter-block">
      
    </div>
    <div v-for="product in productStore.products" :key="product.id">
      <product-card :product="product"></product-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from '@/components/product-card/index.vue'
import { productModel } from '@/entities/product'
import { ref, onMounted, onBeforeUnmount } from 'vue';

const productStore = productModel()
const product = ref([])

onMounted(() => {
  productStore.getProducts()
})
</script>