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
    <div v-for="product in getCartList" class="shopping-card">
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
      <div>{{ `商品件數:${getCartList.length}` }}</div>
      <div class="text-orange">{{ `總計$${getCartAmountTotal}` }}</div>
    </div>
  </section>

  <section class="section5 pt-100">
    <div class="container">
      <div class="row">
        <div class="col-md-12 fs-24 fw-bold">訂購人資訊</div>
        <div class="col-md-12 info">
          <div class="mt-20">姓名:TOM</div>
          <div>電話:0903555777</div>
          <div>住址:新北市三重區三民街18號</div>
          <div>信箱:tom7788@gmail.com</div>
        </div>
      </div>
    </div>
  </section>

  <section class="section5 pt-100">
    <div class="container">
      <div class="row">
        <div class="col-md-12 fs-24 fw-bold">選擇付款方式</div>
        <hr class="mt-20" />
        <div class="col-md-12 info">
          <div class="container">
            <form class="row">
              <div class="col-md-6">
                <div class="d-flex">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                  </div>
                  <img
                    src="../assets/img/bg/checkList/creditCard2.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="d-flex">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="active"
                    />
                  </div>
                  <div>
                    <p>貨到付款</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">信用卡</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="請輸入信用卡"
                  autocomplete="current-password"
                />
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label"
                  >信用卡後三碼</label
                >
                <input
                  placeholder="信用卡驗後三碼"
                  type="password"
                  class="form-control"
                  id=""
                  autocomplete="current-password"
                />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">到期月份</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="到期月份"
                  autocomplete="current-password"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section6 pt-40 mb-40">
    <div class="all-button">
      <router-link to="/CheckList1" class="text-decoration-none text-white">
        <div><button class="btn1">上一步</button></div></router-link
      >
      <router-link to="/CheckList3" class="text-decoration-none text-white">
        <div><button class="btn2">完成訂單</button></div></router-link
      >
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/store/cart'
const cartStore = useCartStore()
const { removeProduct, addProductQty, reduceProductQty, removeCartList } = cartStore
const { getCartList, getCartAmountTotal } = storeToRefs(cartStore)
</script>

<style scoped lang="scss">
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
    .col-md-12 {
      .col-md-6 img {
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
</style>
