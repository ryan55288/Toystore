<template>
  <div class="d-flex justify-content-center position-relative">
    <div v-if="hotSaleIndex" class="hot">
      {{ `HOT${hotSaleIndex}` }}
      <i class="fas fa-fire-alt"></i>
    </div>
    <div class="card">
      <div class="d-flex justify-content-center">
        <img
          :src="productDetail.picture"
          alt=""
          class="w-75 mt-2"
          @click="toProductDetailPage(productDetail)"
        />
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
import { useProduct } from "../composables/product";
import { useProductStore } from "../store/product";

const router = useRouter();
const productStore = useProductStore();
const { updateProductDetail } = productStore;
const toProductDetailPage = (product) => {
  updateProductDetail(product);
  router.push("/Product");
};
const props = defineProps(["productDetail", "hotSaleIndex"]);
const productDetail = ref({
  ...props.productDetail,
});
const {
  increment,
  decrement,
  isFavour,
  addFavourHandle,
  cancelFavourHandle,
  messageShow,
  addToCart,
  directBuy,
} = useProduct(productDetail);
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
  background: var(--orange-color1);
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  bottom: 250px;
  left: 60px;
  font-size: 24px;
  font-weight: bold;
}
</style>
