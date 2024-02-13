import { defineStore } from "pinia"

export const useMyFavourStore = defineStore(
  'myFavour', 
  () => {
    /** State Start */
    const myFavourState = reactive({
      myFavourList: []
    })
    /** State End */

    /** Action Start */

    const addMyFavourList = (productDetail) => {
      const shallowHandle = { ...productDetail }
      myFavourState.myFavourList.push(shallowHandle)
    }
    const cancelMyFavour = (id) => {
      const findIdIndex = myFavourState.myFavourList.findIndex(prod => prod.id === id)
      myFavourState.myFavourList.splice(findIdIndex, 1)
    }
    /** Action End */

    /** Getter Start */
    const getMyFavourList = computed(() => myFavourState.myFavourList)
    /** Getter End */
    return {
      myFavourState,
      getMyFavourList,
      addMyFavourList,
      cancelMyFavour
    }
  },
  {
    persist: [
      {
        paths: ['myFavourState'],
        storage: localStorage,
      },
    ]
  }
)