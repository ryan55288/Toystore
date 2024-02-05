<template>
  <div class="d-flex justify-content-center">
    <div class="card">
      <div class="d-flex justify-content-center">
        <img :src="productDetail.picture" alt="" class="w-75" />
      </div>
      <div class="card-top d-flex">
        <div class="card-content container">
          <div class="row">
            <div class="col-md-8">
              <p>{{ productDetail.name }}</p>
              <p>庫存:{{ productDetail.stock }}</p>
              <p>NTD:${{ productDetail.price }}</p>
              <form id="myform">
                <label>
                  <input
                    type="button"
                    value="-"
                    class="qtyminus"
                    @click="decrement"
                    field="quantity"
                  />
                </label>
                <input
                  v-model="productDetail.qty"
                  type="text"
                  name="quantity"
                  class="qty"
                />
                <label>
                  <input
                    type="button"
                    value="+"
                    class="qtyplus"
                    @click="increment"
                    field="quantity"
                  />
                </label>
              </form>
            </div>
            <div class="col-md-4">
              <img
                src="../assets/img/logo&icon/mylove.svg"
                alt=""
                class="myloveIcon"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="card-bottom">
        <div class="d-flex justify-content-center">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="mx-1">
                  <button 
                    type="button" 
                    class="btn rounded-pill btn-pluscart"
                    @click="addToCart"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
              <div class="col-md-6">
                <router-link to="/Product">
                  <button type="button" class="btn rounded-pill btn-buy">
                    直接購買
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cart';
import { onMounted, reactive, toRefs } from 'vue';

const cartStore = useCartStore()
const { addNewProduct, cartState } = cartStore
const state = reactive({
  productDetail: {
    id: 1,
    name: '百獸戰隊-天空精靈王',
    stock: 1,
    price: 2480,
    picture: new URL('../assets/img/Product/center/IMG-5.svg', import.meta.url),
    qty: 0
  }
})
const { productDetail } = toRefs(state)
const increment = () => state.productDetail.qty ++
const decrement = () => {
  if (state.productDetail.qty > 0) {
    state.productDetail.qty--;
  }
}
const validate = () => {
  if (!state.productDetail.qty) {
    errorAlert('請輸入數量')
    return false
  }
  return true
}
const addToCart = () => {
  if (!validate()) return
  addNewProduct(state.productDetail)
  toastSuccess(`${state.productDetail.name}\n數量${state.productDetail.qty}\n成功加入購物車!`)
  state.productDetail.qty = 0
  console.log(cartState.cartList);
}
</script>

<style scoped>
.card-top {
  .card-content {
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
  }

  .myloveIcon {
    cursor: pointer;
    &:active {
      background-image: url(../assets/img/logo&icon/fullLove.svg);
      background-size: contain;
      background-repeat: no-repeat;
      width: 50px;
      height: 50px;
    }
  }
}

.card {
  width: 320px;
  height: 430px;
  background-color: #fff;
  p {
    font-weight: bold;
    margin-bottom: 10px;
    &:nth-child(3) {
      color: var(--orange-color1);
    }
  }
  &:hover {
    border: 5px solid var(--orange-color3);
  }
  .card-bottom {
    margin-top: 20px;
    .btn-buy {
      background-color: var(--orange-color3);
      color: #fff;
      font-weight: bold;
      width: 120px;
      height: 45px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      &:hover {
        background-color: var(--orange-color4);
        color: #fff;
      }
      &:active {
        background-color: var(--orange-color2);
      }
    }
    .btn-pluscart {
      background-color: var(--orange-color1);
      color: #fff;
      font-weight: bold;
      width: 120px;
      height: 45px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      &:hover {
        background-color: var(--orange-color4);
        color: #fff;
      }
      &:active {
        background-color: var(--orange-color2);
      }
    }
  }
}
</style>
