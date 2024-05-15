<template>
  <div class="card-main">
    <div class="lg:flex">
      <div class="product-info">
        <img class="product-img" :src="props.product?.img" alt="">
        <div class="mt-4">
          <h5 class="name">
            {{ props.product?.name }}
          </h5>
          <div class="location">
            <Location class="mr-2"/>
            <span class="text-secondaryColor text-sm">{{ props.product?.city }}</span>
          </div>
          <div class="mb-[15px] text-sm">
            <span class="text-secondaryColor ">Продавец: <span class="text-main ">{{ props.product?.seller }}</span></span>
          </div>
          <div class="product-type">
            <span class="text-secondaryColor">Категория товара: <span class="text-main"> {{ props.product?.type }}</span></span>
          </div>
        </div>
      </div>
      <div class="actions">
        <div>
          <div class="text-[20px] text-main font-semibold">
            {{ props.product?.price }} смн
          </div>
          <div class="count">
            <span class="text-secondaryColor">Количество</span>
            <span class="text-main">{{ props.product?.count }}</span>
          </div>
          <div class="price">
            <span class="text-secondaryColor">Стоимость за штуку</span>
            <span class="text-main">{{ props.product?.price }}</span>
          </div>
        </div>
        <div class="flex w-full">
          <button @click="goToInfoPage()" class="button bg-bgColor mr-[10px]">
            Просмотреть
          </button>
          <button @click="basketStore.updateOrderStatus(props.product)" :class="`button ${props.product?.is_in_basket  ? 'bg-main' : 'bg-bgColor'} max-w-[50px] flex justify-center items-center`">
            <Basket :style="`${props.product?.is_in_basket  ? 'fill: #fff' : 'fill: #2D3B87'}`" class="w-[20px]"/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/shared/types';
import type { PropType } from 'vue'
import { Basket } from '@/components/icons';
import { basketModel } from '@/entities/basket'
import { Location } from '@/components/icons'
import router from '@/router';
const props = defineProps({
  product: Object as PropType<Product>,
})
const basketStore = basketModel()
const goToInfoPage = () : void => {
  router.push({ path: '/info', query: {id: props.product?.id} })
}
</script>

<style scoped>
.card-main {
  @apply border-[1px] border-solid  border-edge rounded-[20px] mb-10
}

.product-info {
  @apply p-[20px] flex lg:flex-row flex-col items-center flex-grow
}
.product-img {
  @apply block object-contain max-w-[256px] max-h-[256px] h-full w-full rounded-[10px] mr-5
}
.name {
  @apply text-base font-semibold text-main mb-4
}
.location {
  @apply border-none rounded-[5px] px-2 py-1 bg-bgColor flex justify-center items-center mb-[15px] w-fit
}
.product-type {
  @apply border-none rounded-[10px] p-2 bg-bgColor flex justify-center items-center mb-[15px] text-sm w-fit
}
.actions {
  @apply lg:border-l-[1px] border-t-[1px] border-solid rounded-[20px] p-5 lg:w-1/4 w-full flex-none flex flex-col justify-between
}
.count {
  @apply flex justify-between mt-5 text-sm
}
.price {
  @apply flex justify-between mt-[10px] text-sm
}
.button {
  @apply w-full text-sm border-none border-[1px] rounded-[10px] py-[17px]  text-center text-main font-medium hover:opacity-70 cursor-pointer duration-200
}
</style>