<template>
  <div>
    <div class="grid grid-cols-12 gap-10">
      <div class="filter-block lg:col-span-3 col-span-12">
        <h4 class="filter-title">
          Фильтры:
        </h4>
        <div class="lg:block flex">
          <div >
            <h5 for="">Город:</h5>
            <div>
              <label for="100">
                <input checked value="100" v-model="selectedCity" class="mr-2" id="100" type="radio">
                Все города
              </label>
              <label v-for="city in productStore.cities" :key="city.id" :for="city.name">
                <input :value="city.id" v-model="selectedCity" class="mr-2" :id="city.name" type="radio">
                {{ city.name }}
              </label>
            </div>
          </div>
          <div class="lg:mt-5 lg:ml-0 ml-5 mt-0">
            <h5 for="">Категория:</h5>
            <div>
              <label for="0">
                <input checked value="0" v-model="selectedCategory" class="mr-2" id="0" type="radio">
                Все категории
              </label>
              <label @click="getBrands()" v-for="productType in productStore.productTypes" :key="productType.id" :for="productType.name">
                <input :value="productType.id" v-model="selectedCategory" class="mr-2" :id="productType.name" type="radio">
                {{ productType.name }}
              </label>
            </div>
          </div>
          <div class="lg:mt-5 lg:ml-0 ml-5 mt-0">
            <h5>
              Цена:
            </h5>
            <div class="flex">
              <div class="mr-[10px]">
                <label for="">От:</label>
                <input v-model="fromPrice" class="priceInput" type="number">
              </div>
              <div>
                <label for="">До:</label>
                <input v-model="toPrice" class="priceInput" type="number">
              </div>
            </div>
          </div>
        </div>
        <button @click="sendFilterdata()" class="button bg-bgColor mr-[10px]">
          Применить
        </button>
      </div>
      <div v-if="productStore.products.length > 0" class="w-full lg:col-span-9 col-span-12">
        <product-card v-for="product in productStore.products" :key="product.id" :product="product"></product-card>
      </div>
      <div class="no-product lg:col-span-9 col-span-12" v-else>
        Товаров пока что нет :( 
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from '@/components/product-card/index.vue'
import { productModel } from '@/entities/product'
import { ref, onMounted, onBeforeUnmount } from 'vue';

const productStore = productModel()

const selectedCategory = ref()
const selectedCity = ref()
const fromPrice = ref()
const toPrice = ref()

onMounted(() => {
  productStore.getProducts()
  productStore.getProductTypes()
  productStore.getCities()
})

const getBrands = ():void => {
  
}

const sendFilterdata = (): void => {
  const filterParams = {
    type_id: selectedCategory.value,
    price_gte: fromPrice.value,
    price_lte: toPrice.value,
    city_id: selectedCity.value
  }
  for (const key in filterParams) {
    if (!filterParams[key]) {
      delete filterParams[key]
    }
  }
  filterParams.city_id == 100 ? delete filterParams.city_id : null
  filterParams.type_id == 0 ? delete filterParams.type_id : null
  productStore.getFilterData(filterParams)
}
</script>
<style>
.no-product {
  @apply text-3xl text-secondaryColor font-medium h-full flex justify-center items-center
}
.filter-block {
  @apply border-[1px] border-solid  border-edge rounded-[20px] p-5 h-fit
}
.filter-title {
  @apply text-main font-medium text-lg w-full mb-5
}
.filter-block h5 {
  @apply text-secondaryColor text-sm mb-1
}
.filter-block label {
  @apply text-secondaryColor text-base mb-1 flex
}
.priceInput {
  @apply border-none rounded-[10px] bg-bgColor py-1 px-3 outline-none text-sm text-main w-full
}
.button {
  @apply w-full text-sm border-none mt-5 border-[1px] rounded-[10px] py-[17px]  text-center text-main font-medium hover:opacity-70 cursor-pointer duration-200
}

</style>
