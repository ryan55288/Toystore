import { defineStore } from "pinia"

export const useProductStore = defineStore(
  'product', 
  () => {
    /** State Start */
    const productDetail = ref(null)
    /** State End */

    /** Action Start */
    const updateProductDetail = (product) => {
      productDetail.value = { ...product }
    }
    /** Action End */

    /** Getter Start */
    /** Getter End */
    return {
      productDetail,
      updateProductDetail
    }
  },
  {
    persist: [
      {
        paths: ['productDetail'],
        storage: localStorage,
      },
    ]
  }
)