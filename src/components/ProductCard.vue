<template>
  <div class="d-flex justify-content-center position-relative">
    <div v-if="hotSaleIndex" class="hot">
      {{ `HOT${hotSaleIndex}` }}
      <i class="fas fa-fire-alt"></i>
    </div>
    <div class="card">
      <div class="d-flex justify-content-center">
        <img :src="productDetail.picture" alt="" class="w-75 mt-2" />
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
                v-if="!isFavour"
                src="../assets/img/logo&icon/mylove.svg"
                alt=""
                class="myloveIcon"
                @click="addFavourHandle"
              />
              <img
                v-else
                src="../assets/img/logo&icon/fullLove.svg"
                width="47"
                height="42"
                alt=""
                class="myloveIcon"
                @click="cancelFavourHandle"
              />
              <div class="message" v-if="messageShow">成功加入我的最愛!</div>
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
                <button
                  type="button"
                  class="btn rounded-pill btn-buy"
                  @click="directBuy"
                >
                  直接購買
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "../store/cart";
import { useMyFavourStore } from "@/store/my-favour";
import { computed } from "vue";

const router = useRouter();
const props = defineProps(["productDetail", "hotSaleIndex"]);
const productDetail = ref({
  ...props.productDetail,
});

const cartStore = useCartStore();
const { addNewProduct, cartState, addDirectProduct } = cartStore;

const myFavourStore = useMyFavourStore();
const { addMyFavourList, cancelMyFavour } = myFavourStore;
const { getMyFavourList } = storeToRefs(myFavourStore);
const isFavour = computed(() => {
  const getProductIds = getMyFavourList.value.map((prod) => prod.id);
  return getProductIds.includes(productDetail.value.id);
});
const messageShow = ref(false);
const addFavourHandle = () => {
  messageShow.value = true;
  addMyFavourList(productDetail.value);
  setTimeout(() => {
    messageShow.value = false;
  }, 1000);
};
const cancelFavourHandle = () => {
  cancelMyFavour(productDetail.value.id);
};
const increment = () => productDetail.value.qty++;
const decrement = () => {
  if (productDetail.value.qty > 0) {
    productDetail.value.qty--;
  }
};
const validate = () => {
  if (!productDetail.value.qty) {
    errorAlert("請輸入數量");
    return false;
  }
  return true;
};
const addToCart = () => {
  if (!validate()) return;
  addNewProduct(productDetail.value);
  toastSuccess(
    `${productDetail.value.name}\n數量${productDetail.value.qty}\n成功加入購物車!`
  );
  productDetail.value.qty = 0;
  console.log(cartState.cartList);
};

const directBuy = () => {
  if (!validate()) return;
  addDirectProduct(productDetail.value);
  productDetail.value.qty = 0;
  router.push({
    path: "/CheckList1",
    query: {
      isDirect: "direct",
    },
  });
};
</script>

<style scoped>
.hot {
  position: absolute;
  padding: 6px 12px;
  color: #fff;
  background: #ee410d;
  z-index: 100;
  font-size: 18px;
  border-radius: 4px;
  font-weight: bold;
  left: 0;
}
.card-top {
  .card-content {
    margin-top: 20px;
    .qtyplus {
      width: 25px;
      height: 30px;
      border: 1px solid #aaa;
      background-color: #f8f8f8;
      border-radius: 0px 3px 3px 0px;
      &:active {
        background-color: #8a8787;
        color: #f8f8f8;
      }
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
      &:active {
        background-color: #8a8787;
        color: #f8f8f8;
      }
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
  width: 360px;
  height: 490px;
  background-color: #fff;
  p {
    font-weight: bold;
    margin-bottom: 10px;
    &:nth-child(1) {
      font-size: 20px;
    }
    &:nth-child(2) {
      font-size: 15px;
    }
    &:nth-child(3) {
      color: var(--orange-color1);
      font-size: 18px;
    }
  }
  &:hover {
    border: 5px solid var(--orange-color3);
  }
  .card-bottom {
    margin-top: 25px;
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
.message {
  position: absolute;
  width: max-content;
  background: #444444;
  color: #fff;
  padding: 8px 10px;
  border-radius: 4px;
}
</style>
