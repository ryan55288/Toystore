<template>
  <div class="box1"></div>
  <section class="section2 d-flex justify-content-center pt-40">
    <div class="header" v-if="getCartList.length">
      <div>商品內容</div>
      <div>數量</div>
      <div>總計</div>
    </div>
    <template v-else>
      <div>
        目前沒有任何商品
        <router-link class="btn btn-primary" to="/">回首頁</router-link>
      </div>
    </template>
  </section>

  <section class="section3 pt-10">
    <div
      v-for="product in getCartList"
      class="shopping-card"
    >
      <div>
        <img :src="product.picture" />
        <div>{{ product.name }}</div>
        <span class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
          />
        </span>
        <label class="form-check-label" for="flexCheckDefault"> </label>
      </div>
      <form id="myform">
        <label @click="reduceProductQty(product.id)">
          <input
            type="button"
            value="-"
            class="qtyminus"
            field="quantity"
          />
        </label>
        <input type="text" name="quantity" class="qty" :value="product.qty" readonly/>
        <label @click="addProductQty(product.id)">
          <input
            type="button"
            value="+"
            class="qtyplus"
            field="quantity"
          />
        </label>
      </form>
      <div>{{ `$${product.price * product.qty}` }}</div>
      <div><i class="fas fa-trash fa-2x"></i></div>
    </div>
    <div class="d-flex justify-content-center">
      <hr />
    </div>
  </section>

  <section class="section4">
    <div class="bottom">
      <div>全部刪除</div>
      <div>{{ `商品件數:${getCartList.length}` }}</div>
      <div>{{ `總計$${getCartAmountTotal}` }}</div>
    </div>
  </section>

  <section class="section6 pt-60 mb-40">
    <router-link to="CheckList1/" class="text-decoration-none">
      <div class="all-button">
        <button class="">結帳去</button>
      </div>
    </router-link>
  </section>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/store/cart'
const cartStore = useCartStore()
const { removeProduct, addProductQty, reduceProductQty } = cartStore
const { getCartList, getCartAmountTotal } = storeToRefs(cartStore)
</script>

<style scoped lang="scss">
.section6 {
  .all-button {
    display: flex;
    justify-content: end;
    margin-right: 350px;
    > button:nth-child(1) {
      background-color: var(--orange-color3);
      color: #fff;
      padding: 15px 40px;
      margin-right: 25px;
      border-radius: 10px;
      border: 0px solid;
      font-weight: bold;
      &:hover {
        background-color: var(--orange-color1);
        color: #fff;
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
      margin-right: 630px;
      color: var(--orange-color1);
      cursor: pointer;
    }

    > div:nth-child(2) {
      margin-right: -30px;
    }

    > div:nth-child(3) {
      margin-left: 250px;
      color: var(--orange-color1);
    }
  }
}
.section3 {
  .shopping-card {
    display: flex;
    align-items: center;
    justify-content: center;
    div:nth-child(1) {
      margin-right: 440px;
    }

    div:nth-child(2) {
      margin-right: 160px;
    }

    div:nth-child(3) {
      margin-left: 150px;
    }
    .form-check {
      width: 10px;
      height: 10px;
    }

    .qtyplus {
      width: 25px;
      height: 30px;
      border: 1px solid #aaa;
      background-color: #f8f8f8;
      border-radius: 0px 3px 3px 0px;
    }
    .qty {
      width: 40px;
      height: 30px;
      text-align: center;
      border: 0;
      border-top: 1px solid #aaa;
      border-bottom: 1px solid #aaa;
    }
    .qtyminus {
      width: 25px;
      height: 30px;
      border: 1px solid #aaa;
      background-color: #f8f8f8;
      border-radius: 3px 0px 0px 3px;
    }
    > div:nth-child(4) {
      margin-left: 10px;
      color: var(--green-color2);
      &:hover {
        color: var(--orange-color1);
        cursor: pointer;
      }
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
  padding-top: 120px;
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

.box1 {
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: var(--green-color2);
}
</style>
