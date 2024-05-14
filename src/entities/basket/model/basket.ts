import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { Axios } from "@/shared/api";
import type { Product } from "@/shared/types";
import { MessageLogType, consoleLog } from "@/shared/lib";

export const useBasketStore = defineStore("basket", () => {
    const basketProducts = ref([]) as Ref<Array<Product>>;
    const loading = ref(false);

    async function getBasketProducts() {
      try {
        loading.value = true;

        const response = await Axios.get(`/products?is_favorite=${true}`);

        basketProducts.value = await response.data;
        consoleLog('Success [getBasketProducts]', MessageLogType.Success);
      } catch (error: any) {
        consoleLog(`Error [getBasketProducts]: ${error}`, MessageLogType.Error);
      } finally {
        loading.value = false;
      }
    };

    async function updateOrderStatus(product: Product) {
      try {
        if (product.is_favorite ) {
          product.is_favorite = false
        } else {
          product.is_favorite = true
        }
        loading.value = true;
        console.log(product.is_favorite);
        const response = await Axios.patch(`/products/${product.id}`, product);
        consoleLog('Success [getBasketProducts]', MessageLogType.Success);
        getBasketProducts()
      } catch (error: any) {
        consoleLog(`Error [getBasketProducts]: ${error}`, MessageLogType.Error);
      } finally {
        loading.value = false;
      }
    };
    return {
      basketProducts,
      getBasketProducts,
      updateOrderStatus
    };
});
