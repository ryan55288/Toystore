import { defineStore } from "pinia"
import { computed } from "vue"

export const useOrderStore = defineStore(
  'order', 
  () => {
    /** State Start */
    const orderState = reactive({
      orderList: []
    })
    /** State End */

    /** Action Start */

    const addOrderHandle = (payload) => {
      const shallowCopy = { ...payload }
      orderState.orderList.push(shallowCopy)
    }
    /** Action End */

    /** Getter Start */
    const getOrderList = computed(() => orderState.orderList)
    /** Getter End */
    return {
      orderState,
      getOrderList,
      addOrderHandle
    }
  },
  {
    persist: [
      {
        paths: ['orderState'],
        storage: localStorage,
      },
    ]
  }
)