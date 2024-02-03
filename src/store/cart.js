import { defineStore } from "pinia"
import { computed } from "vue"

export const useCartStore = defineStore(
  'cart', 
  () => {
    const cartState = reactive({
      cartList: []
    })

    const addNewProduct = (productItem) => {
      cartState.cartList.push(productItem)
    }
    const getCartList = computed(() => cartState.cartList)
    return {
      cartState,
      addNewProduct,
      getCartList
    }
  },
  {
    persist: [
      // {
      //   paths: ['count'],
      //   storage: sessionStorage,
      // },
    ]
  }
)