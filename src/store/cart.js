import { defineStore } from "pinia"
import { computed } from "vue"

export const useCartStore = defineStore(
  'cart', 
  () => {
    /** State Start */
    const cartState = reactive({
      cartList: [],
      customerInfo: {
        name: '',
        phone: '',
        address: '',
        email: '',
        invoiceType: 1,
        vehicle: ''
      },
      selectedCartList: []
    })
    /** State End */

    /** Action Start */
    const addNewProduct = (productItem) => {
      // 使用淺拷貝處理物件記憶體參考問題
      const shallowHandle = { ...productItem }
      // 處理用戶重複加入相同的商品 就在購物車的原商品的數量增加
      const findRepeatProduct = cartState.cartList.find(prod => prod.id === shallowHandle.id)
      if (findRepeatProduct) {
        findRepeatProduct.qty += shallowHandle.qty
      }
      else {
        cartState.cartList.push(shallowHandle)
      }
    }
    const removeProduct = (productIds) => {
      productIds.forEach(id => {
        const findProductIndex = cartState.cartList.findIndex(prod => prod.id === id)
        cartState.cartList.splice(findProductIndex, 1)
      })
    }

    const addProductQty = (productId) => {
      const findProduct = cartState.cartList.find(prod => prod.id === productId)
      findProduct.qty += 1
    }
    const reduceProductQty = (productId) => {
      const findProduct = cartState.cartList.find(prod => prod.id === productId)
      findProduct.qty -= 1
      if (findProduct.qty === 0) {
        removeProduct([productId])
      }
    }
    const updateCustomerInfo = (info) => {
      Object.keys(info).forEach(key => {
        cartState.customerInfo[key] = info[key]
      })
    }
    // 全部刪除功能
    const removeCartList = () => {
      cartState.cartList = []
    }
    const updateSelectedCartList = (payload) => cartState.selectedCartList = [...payload]
    /** Action End */

    /** Getter Start */
    const getCartList = computed(() => cartState.cartList)
    const getCartAmountTotal = computed(() => {
      if (cartState.cartList.length) {
        return cartState.cartList.reduce((accu,curr) => {
          return accu + (curr.price * curr.qty)
        },0)
      }
      return 0
    })
    const getCustomerInfo = computed(() => cartState.customerInfo)
    const getSelectedCartList = computed(() => cartState.selectedCartList)
    const getSelectedCartListAmountTotal = computed(() => {
      if (cartState.selectedCartList.length) {
        return cartState.selectedCartList.reduce((accu,curr) => {
          return accu + (curr.price * curr.qty)
        },0)
      }
      return 0
    })
    /** Getter End */
    return {
      cartState,
      addNewProduct,
      getCartList,
      getCartAmountTotal,
      removeProduct,
      addProductQty,
      reduceProductQty,
      removeCartList,
      updateCustomerInfo,
      getCustomerInfo,
      updateSelectedCartList,
      getSelectedCartList,
      getSelectedCartListAmountTotal
    }
  },
  {
    persist: [
      {
        paths: ['cartState'],
        storage: localStorage,
      },
    ]
  }
)