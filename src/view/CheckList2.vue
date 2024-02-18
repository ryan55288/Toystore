<template>
  <div class="box1"></div>
  <section class="section1">
    <div class="container">
      <ul class="row d-flex justify-content-center align-items-center">
        <li class="col-md-4">1.訂單資料</li>
        <li class="col-md-4">2.付款方式</li>
        <li class="col-md-4">3.完成訂單</li>
      </ul>
    </div>
  </section>

  <section class="section2 d-flex justify-content-center pt-40">
    <div class="header">
      <div>商品內容</div>
      <div>數量</div>
      <div>總計</div>
    </div>
  </section>

  <section class="section3 pt-40">
    <div v-for="product in (isDirect ? getDirectPurchase : getSelectedCartList)" class="shopping-card">
      <div>
        <img :src="product.picture" />
        <div>{{ product.name }}</div>
      </div>

      <div>{{ product.qty }}</div>
      <div>{{ `$${product.price * product.qty}` }}</div>
    </div>
    <div class="d-flex justify-content-center">
      <hr />
    </div>
  </section>

  <section class="section4">
    <div class="bottom">
      <div>{{ `商品總數:${getSelectedProductAllQty}` }}</div>
      <div class="text-orange">{{ `總計$${isDirect ? getDirectPurchaseAmountTotal : getSelectedCartListAmountTotal}` }}</div>
    </div>
  </section>

  <section class="section5 pt-100">
    <div class="container">
      <div class="row">
        <div class="col-md-12 fs-24 fw-bold">訂購人資訊</div>
        <div class="col-md-12 info">
          <div class="mt-20">{{ `姓名:${getCustomerInfo.name}` }}</div>
          <div>{{ `行動電話:${getCustomerInfo.phone}` }}</div>
          <div>{{ `住址:${getCustomerInfo.address}` }}</div>
          <div>{{ `信箱:${getCustomerInfo.email}` }}</div>
          <div>{{ `發票類型:${getCustomerInfo.invoiceType === 1 ? '載具' : '紙本發票'}` }}</div>
          <div v-if="getCustomerInfo.invoiceType === 1">{{ `載具編號:${getCustomerInfo.vehicle}` }}</div>
        </div>
      </div>
    </div>
  </section>

  <section class="section5 pt-100">
    <div class="container pb-100">
      <div class="row">
        <div class="col-md-12 fs-24 fw-bold">選擇付款方式</div>
        <hr class="mt-20" />
        <div class="col-md-12 info">
          <div class="container">
            <form class="row">
              <div class="col-md-6" @click="selectPayment = 1">
                <div class="d-flex align-items-center cursor-pointer">
                  <img
                    class="payment-layout me-3 payment-border"
                    :class="{ 'payment-border-active': selectPayment === 1 }"
                    src="../assets/img/bg/checkList/creditCard2.svg"
                    alt=""
                  />
                  <label>
                    <input type="radio" name="payment" :value="1" v-model="selectPayment">
                    <span class="custom-radio" :class="{ 'custom-radio-active': selectPayment === 1 }"></span>
                  </label>
                </div>
              </div>
              <div class="col-md-6" @click="selectPayment = 2">
                <div class="d-flex align-items-center cursor-pointer">
                  <div 
                    class="payment-layout me-3 payment-border"
                    :class="{ 'payment-border-active': selectPayment === 2 }"
                  >
                    貨到付款
                  </div>
                  <label>
                    <input type="radio" name="payment" :value="2" v-model="selectPayment">
                    <span class="custom-radio" :class="{ 'custom-radio-active': selectPayment === 2 }"></span>
                  </label>
                </div>
              </div>
              <template v-if="selectPayment === 1">              
                <div class="col-md-6">
                  <label for="cardNumber" class="form-label">信用卡</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cardNumber"
                    placeholder="請輸入信用卡"
                    maxlength="19"
                    v-model="creditCardInfo.cardNumber"
                  />
                </div>
                <div class="col-md-6">
                  <label for="safeCode" class="form-label">安全碼</label>
                  <input
                    placeholder="請輸入安全碼"
                    type="text"
                    class="form-control"
                    id="safeCode"
                    maxlength="3"
                    v-model="creditCardInfo.safeCode"
                  />
                </div>
                <div class="col-md-6">
                  <label for="inValidDate" class="form-label">到期月份</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inValidDate"
                    placeholder="請輸入到期月份 ex: 05/24"
                    maxlength="5"
                    v-model="creditCardInfo.inValidDate"
                  />
                </div>
              </template>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section6 pb-200">
    <div class="all-button">
      <router-link to="/CheckList1" class="text-decoration-none text-white">
        <div><button class="btn1">上一步</button></div></router-link
      >
      <div><button class="btn2" @click="submit">完成訂單</button></div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/store/cart'
import { useOrderStore } from '@/store/order'

const router = useRouter()
const route = useRoute()
const isDirect = route.query.isDirect
const cartStore = useCartStore()
const { removeFinishedProducts } = cartStore
const { getSelectedCartList, getSelectedCartListAmountTotal, getCustomerInfo, getDirectPurchase, getDirectPurchaseAmountTotal, getSelectedProductAllQty } = storeToRefs(cartStore)

const orderStore = useOrderStore()
const { addOrderHandle } = orderStore

const selectPayment = ref(0)

const validate = () => {
  if (selectPayment.value === 0) {
    errorAlert('請選擇支付方式')
    return
  }
  if (selectPayment.value === 1) {
    if (!creditCardInfo.cardNumber) {
      errorAlert('請填寫信用卡號')
      return
    }
    else if (!creditCardInfo.safeCode) {
      errorAlert('請填寫安全碼')
      return
    }
    else if (!creditCardInfo.inValidDate) {
      errorAlert('請填寫到期月份')
      return
    }
  }
  return true
}
const createOrderNumber = () => {
  const randomNumber = Math.floor(Math.random() * 900000) + 100000;
  const timeStamp = new Date().getTime()
  return `${timeStamp}${randomNumber}`
}
function getFormattedDate() {
  var today = new Date();
  var year = today.getFullYear();
  var month = (today.getMonth() + 1).toString().padStart(2, '0'); // 月份从 0 开始，所以要加 1，并且补零
  var day = today.getDate().toString().padStart(2, '0'); // 获取日期，并且补零

  var formattedDate = year + month + day;
  return formattedDate;
}
const calcAllProductQty = () => {
  return getSelectedCartList.value.reduce((accu, curr) => {
    return accu + curr.qty
  }, 0)
}
const createOrderDetail = () => {
  /**
   * 訂單編號
   * 訂單日期
   * 商品數量
   * 訂單總額
   * 收據方式
   * 支付方式
   */
  return {
    orderNumber: createOrderNumber(),
    orderDate: getFormattedDate(),
    qty: isDirect ? getDirectPurchase.value[0].qty : calcAllProductQty(),
    amount: isDirect ? getDirectPurchaseAmountTotal.value : getSelectedCartListAmountTotal.value,
    invoice: getCustomerInfo.value.invoiceType === 1 ? '載具' : '紙本發票',
    payment: selectPayment.value === 1 ? '信用卡' : '貨到付款',
    delivery: getCustomerInfo.value.deliveryType === 1 ? '到店取貨' : '宅配到府',
  }
}

const submit = () => {
  if (!validate()) return
  addOrderHandle(createOrderDetail())
  removeFinishedProducts()
  router.push('/CheckList3')
}
const creditCardInfo = reactive({
  cardNumber: '',
  safeCode: '',
  inValidDate: ''
})
watch(
  () => creditCardInfo.cardNumber,
  (newValue, oldValue) => {
    // 手輸到第4碼時 補空格
    if (newValue.length === 4) {
      creditCardInfo.cardNumber = newValue + ' '
    }
    // 手輸到第8碼時 補空格
    if (newValue.length === 9) {
      creditCardInfo.cardNumber = newValue + ' '
    }
    // 手輸到第12碼時 補空格
    if (newValue.length === 14) {
      creditCardInfo.cardNumber = newValue + ' '
    }
    // 如果按刪除鍵 清除空格
    if (oldValue.length > newValue.length) {
      creditCardInfo.cardNumber = newValue
    }
  }
)
watch(
  () => creditCardInfo.inValidDate,
  (newValue, oldValue) => {
    // 手輸到第4碼時 補空格
    if (newValue.length === 2) {
      creditCardInfo.inValidDate = newValue + '/'
    }
    // 如果按刪除鍵 清除空格
    if (oldValue.length > newValue.length) {
      creditCardInfo.inValidDate = newValue
    }
  }
)
</script>

<style scoped lang="scss">
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.section7 {
  hr {
    margin-top: 40px;
    width: 1100px;
    border: 3px gray solid;
    border-radius: 5px;
  }
}
.section6 {
  .all-button {
    display: flex;
    justify-content: center;
    .btn1 {
      font-weight: bold;
      background-color: var(--orange-color1);
      color: #fff;
      padding: 15px 40px;
      margin-right: 25px;
      border-radius: 10px;
      border: 0px solid;
      &:hover {
        background-color: var(--orange-color4);
      }
    }
    .btn2 {
      font-weight: bold;
      background-color: var(--orange-color3);
      color: #fff;
      padding: 15px 40px;
      margin-right: 10px;
      border-radius: 10px;
      border: 0px solid;
      &:hover {
        background-color: var(--orange-color4);
      }
    }
  }
}
.section5 {
  display: flex;
  justify-content: center;
  .container {
    width: 900px;
    .info {
      div {
        padding: 10px;
      }
    }
    .col-md-6 {
      p {
        text-align: center;
        padding-top: 20px;
        font-weight: bold;
        width: 140px;
        height: 55px;
        border: solid 5px var(--orange-color2);
        border-radius: 10px;
        &:active {
          border: 5px solid var(--orange-color3);
          border-radius: 10px;
        }
      }
    }
  }
}
.section4 {
  .bottom {
    font-weight: bold;
    display: flex;
    justify-content: center;
    > div:nth-child(1) {
      margin-right: 440px;
    }

    > div:nth-child(2) {
      margin-right: 160px;
    }

    > div:nth-child(3) {
      margin-left: 150px;
      color: var(--orange-color1);
    }
  }
}
.section3 {
  .shopping-card {
    display: flex;
    align-items: center;
    justify-content: center;
    > div:nth-child(1) {
      margin-right: 440px;
    }

    > div:nth-child(2) {
      margin-right: 160px;
    }

    > div:nth-child(3) {
      margin-left: 150px;
    }
  }
  hr {
    margin-top: 40px;
    width: 1100px;
    border: 3px gray solid;
    border-radius: 5px;
  }
}
.section2 {
  .header {
    height: 50px;
    width: 1150px;
    background-color: var(--green-color2);
    border-radius: 10px;
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: bold;
    > div:nth-child(1) {
      padding-left: 50px;
    }

    > div:nth-child(2) {
      margin-left: 600px;
    }

    > div:nth-child(3) {
      margin-left: 320px;
    }
  }
}
.section1 {
  padding-top: 80px;
  height: 200px;
  ul {
    li {
      padding-top: 25px;
      text-align: center;
      width: 375px;
      height: 70px;
      border-radius: 100px;
      font-weight: bold;
      margin: 40px 20px;
      &:nth-child(1) {
        background: var(--orange-color2);
        color: #000;
      }

      &:nth-child(2) {
        background-color: var(--orange-color3);
        color: #fff;
      }

      &:nth-child(3) {
        background-color: var(--orange-color2);
      }
    }
  }
}

.box1 {
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: var(--green-color2);
}




input[type="radio"] {
  display: none;
}

/* Style the custom radio button */
.custom-radio {
  width: 20px;
  height: 20px;
  border: 3px solid var(--orange-color2); /* 調整邊框顏色 */
  display: inline-block;
  position: relative;
}

/* Style the checked state */
.custom-radio::after {
  content: '\2714'; /* 使用 Unicode 字符 ✓ 來代表打勾 */
  font-size: 24px; /* 調整打勾的大小 */
  color: #C98A45; /* 調整打勾的顏色 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-25%, -60%);
  display: none;
}
.custom-radio-active {
  border: 3px solid #C98A45; /* 調整邊框顏色 */
}

/* Show the checked state */
input[type="radio"]:checked + .custom-radio::after {
  display: block;
}
.payment-border {
  border: solid 5px var(--orange-color2);
  border-radius: 10px;
}
.payment-border-active {
  border: 5px solid #C98A45;
}
.payment-layout {
  width: 148px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cursor-pointer {
  cursor: pointer;
}
.pb-100 {
  padding-bottom: 100px;
}
.pb-200 {
  padding-bottom: 200px;
}
</style>
