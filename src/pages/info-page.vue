<template>
  <div>
    <div class="card-main">
      <div class="flex flex-col flex-grow justify-center items-center w-full ">
        <img class="product-img" :src="productStore.productInfo?.img" alt="">
      </div>
      <div class="actions">
        <div>
          <h5 class="name">
              {{ productStore.productInfo?.name }}
            </h5>
          <div class="text-[20px] text-main font-semibold">
            {{ productStore.productInfo?.price }} смн
          </div>
          <div class="count">
            <span class="text-secondaryColor">Количество</span>
            <span class="text-main">{{ productStore.productInfo?.count }}</span>
          </div>
          <div class="price">
            <span class="text-secondaryColor">Стоимость за штуку</span>
            <span class="text-main">{{ productStore.productInfo?.price }}</span>
          </div>
          <div class="mt-4">
            <div class="location">
              <Location class="mr-2" />
              <span class="text-secondaryColor text-sm">{{ productStore.productInfo?.geo }}</span>
            </div>
            <div class="mb-[15px] text-sm">
              <span class="text-secondaryColor ">Продавец: <span class="text-main ">{{ productStore.productInfo?.seller
                  }}</span></span>
            </div>
            <div class="product-type">
              <span class="text-secondaryColor">Категория товара: <span class="text-main"> Гречка</span></span>
            </div>
          </div>
        </div>
        <div class="flex w-full">
          <button @click="basketStore.updateOrderStatus(productStore.productInfo)"
            :class="`button ${productStore.productInfo?.is_favorite ? 'bg-main' : 'bg-bgColor'} max-w-[50px] flex justify-center items-center`">
            <Basket :style="`${productStore.productInfo?.is_favorite ? 'fill: #fff' : 'fill: #2D3B87'}`"
              class="w-[20px]" />
          </button>
        </div>
      </div>
    </div>
    <div class="description">
        {{ productStore.productInfo?.description }}
      </div>
  </div>
</template>

<script setup lang="ts">
import { productModel } from '@/entities/product'
import { ref, onMounted } from 'vue';
import { basketModel } from '@/entities/basket'
import { useRoute } from 'vue-router';
import { Basket, Location } from '@/components/icons';

const basketStore = basketModel()
const routeInfo = useRoute()
console.log(routeInfo.query.id);

const productStore = productModel()

onMounted(() => {
  productStore.getProductInfo(routeInfo.query.id)
})
</script>

<style scoped>
.card-main {
  @apply border-edge rounded-[20px] mb-10 lg:flex w-full
}

.product-info {
  @apply p-[20px] flex lg:flex-row flex-col items-center flex-grow
}

.product-img {
  @apply block object-contain max-w-[400px] max-h-[400px] h-full w-full rounded-[10px] 
}

.name {
  @apply text-lg font-semibold text-main mb-4
}

.location {
  @apply border-none rounded-[5px] px-2 py-1 bg-bgColor flex justify-center items-center mb-[15px] w-fit
}

.product-type {
  @apply border-none rounded-[10px] p-2 bg-bgColor flex justify-center items-center mb-[15px] text-sm w-fit
}

.description {
  @apply text-base text-main leading-[150%] mt-10 lg:max-w-[830px] w-full
}

.actions {
  @apply lg:mt-0 mt-10 border-[1px] border-solid rounded-[20px] p-5 lg:w-1/4 w-full flex-none flex flex-col justify-between 
}

.count {
  @apply flex justify-between mt-5 text-sm
}

.price {
  @apply flex justify-between mt-[10px] text-sm
}

.button {
  @apply w-full text-sm border-none border-[1px] rounded-[10px] py-[17px] text-center text-main font-medium hover:opacity-70 cursor-pointer duration-200
}
</style>