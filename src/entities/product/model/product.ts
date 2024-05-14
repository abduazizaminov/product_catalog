import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { Axios } from "@/shared/api";
import type { Product } from "@/shared/types";
import { MessageLogType, consoleLog } from "@/shared/lib";

export const useProductStore = defineStore("product", () => {
    const products = ref([]) as Ref<Array<Product>>;
    const loading = ref(false);
    const productInfo  = ref() as Ref<Product>

    async function getProducts() {
      try {
        loading.value = true;

        const response = await Axios.get('/products');

        products.value = await response.data;

        consoleLog('Success [getProduct]', MessageLogType.Success);
      } catch (error: any) {
        consoleLog(`Error [getProduct]: ${error}`, MessageLogType.Error);
      } finally {
        loading.value = false;
      }
    }
    async function getProductInfo(id: number) {
      try {
        loading.value = true;

        const response = await Axios.get(`/products?id=${id}`);

        productInfo.value = await response.data[0];
        console.log(productInfo.value);
        
        consoleLog('Success [getProductInfo]', MessageLogType.Success);
      } catch (error: any) {
        consoleLog(`Error [getProductInfo]: ${error}`, MessageLogType.Error);
      } finally {
        loading.value = false;
      }
    }
    return {
      products,
      productInfo,
      loading,
      getProducts,
      getProductInfo
    };
});
