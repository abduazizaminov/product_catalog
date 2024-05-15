import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { Axios } from "@/shared/api";
import type { Product } from "@/shared/types";
import { MessageLogType, consoleLog } from "@/shared/lib";

export const useBasketStore = defineStore("basket", () => {
    const basketProducts = ref([]) as Ref<Array<Product>>;

    async function getBasketProducts() {
      try {

        const response = await Axios.get(`/products?is_in_basket=${true}`);

        basketProducts.value = await response.data;
        consoleLog('Success [getBasketProducts]', MessageLogType.Success);
      } catch (error: any) {
        consoleLog(`Error [getBasketProducts]: ${error}`, MessageLogType.Error);
      } finally {
      }
    };

    async function updateOrderStatus(product: Product) {
      try {
        product.is_in_basket  = !product.is_in_basket
        console.log(product.is_in_basket);
        const response = await Axios.patch(`/products/${product.id}`, product);
        consoleLog('Success [getBasketProducts]', MessageLogType.Success);
        getBasketProducts()
      } catch (error: any) {
        consoleLog(`Error [getBasketProducts]: ${error}`, MessageLogType.Error);
      }
    };
    return {
      basketProducts,
      getBasketProducts,
      updateOrderStatus
    };
});
