import { defineStore } from "pinia"
import router from '@/router'

export const useRegisterStore = defineStore(
  'register', 
  () => {
    /** State Start */
    const registerState = reactive({
      registerList: [],
      loginInfo: {},
      isLogin: false
    })
    /** State End */

    /** Action Start */
    const addRegisterList = (registerInfo) => {
      registerState.registerList.push(registerInfo)
    }
    const checkLogin = (accountInfo) => {
      console.log(accountInfo);
      console.log(registerState.registerList);
      const findAccount = registerState.registerList.find(item => item.account === accountInfo.account)
      if (findAccount) {
        const checkPassword = findAccount.password === accountInfo.password
        if (checkPassword) {
          successAlert('登入成功')
          registerState.isLogin = true
          registerState.loginInfo = findAccount
          return true
        }
        else {
          errorAlert('密碼錯誤')
        }
      }
      else {
        errorAlert('找不到會員')
      }
      return false
    }
    const logout = () => {
      registerState.isLogin = false
      successAlert('已登出')
      router.push('/')
    }
    /** Action End */

    /** Getter Start */
    const getRegisterList = computed(() => registerState.registerList)
    const getLoginInfo = computed(() => registerState.loginInfo)
    const isLogin = computed(() => registerState.isLogin)
    /** Getter End */
    return {
      registerState,
      addRegisterList,
      getRegisterList,
      checkLogin,
      getLoginInfo,
      isLogin,
      logout
    }
  },
  {
    persist: [
      {
        paths: ['registerState'],
        storage: localStorage,
      },
    ]
  }
)