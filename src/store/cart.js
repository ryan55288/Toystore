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
    const getCartAmountTotal = computed(() => {
      if (cartState.cartList.length) {
        return cartState.cartList.reduce((accu,curr) => {
          return accu + curr.price
        },0)
      }
      return 0
    })
    return {
      cartState,
      addNewProduct,
      getCartList,
      getCartAmountTotal
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