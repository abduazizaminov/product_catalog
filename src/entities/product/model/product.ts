import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { Axios } from "@/shared/api";
import type { Product } from "@/shared/types";
import { MessageLogType, consoleLog } from "@/shared/lib";

export const useProductStore = defineStore("product", () => {
    const products = ref([]) as Ref<Array<Product>>;
    const productInfo  = ref() as Ref<Product>
    const productTypes = ref([])
    const brands = ref([])

    async function getProducts() {
      try {
        const response = await Axios.get('/products');

        products.value = await response.data;
        consoleLog('Success [getProduct]', MessageLogType.Success);
      } catch (error: any) {
        consoleLog(`Error [getProduct]: ${error}`, MessageLogType.Error);
      } finally {
      }
    }
    async function getFilterData(params: any) {
      try {

        const response = await Axios.get(`/products`, {params: params});

        products.value = await response.data;
        if (params.price_lte && params.price_gte) {
          products.value = products.value.filter(product => {
            return product.price >= params.price_gte && product.price <= params.price_lte;
          });
        }
        consoleLog('Success [getProductInfo]', MessageLogType.Success);
      } catch (error: any) {
        consoleLog(`Error [getProductInfo]: ${error}`, MessageLogType.Error);
      }
    }

    async function getProductInfo(id: number) {
      try {

        const response = await Axios.get(`/products?id=${id}`);

        productInfo.value = await response.data[0];
        
        consoleLog('Success [getProductInfo]', MessageLogType.Success);
      } catch (error: any) {
        consoleLog(`Error [getProductInfo]: ${error}`, MessageLogType.Error);
      }
    }

    async function getProductTypes() {
      try {

        const response = await Axios.get(`/types`);

        productTypes.value = await response.data;
        
        consoleLog('Success [getProductInfo]', MessageLogType.Success);
      } catch (error: any) {
        consoleLog(`Error [getProductInfo]: ${error}`, MessageLogType.Error);
      }
    }


    async function getBrands(id: number) {
      try {
        const params = {
          type_id: id
        }
        const response = await Axios.get('/brands', {params: params});

        brands.value = await response.data;
        console.log(brands.value);
        
        consoleLog('Success [getProductInfo]', MessageLogType.Success);
      } catch (error: any) {
        consoleLog(`Error [getProductInfo]: ${error}`, MessageLogType.Error);
      }
    }
    return {
      products,
      productInfo,
      productTypes,
      brands,
      getProducts,
      getProductInfo,
      getProductTypes,
      getFilterData,
      getBrands
    };
});
