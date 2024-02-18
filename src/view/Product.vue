<template>
  <div class="box1"></div>
  <div class="box2"></div>
  <section class="section1">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5">
          <img :src="productDetail.picture" alt="">
        </div>
        <div class="col-md-7 contant">
          <h2>{{ `商品名稱:${productDetail.name}` }}</h2>
          <p>{{ `建議售價:$${productDetail.price}` }}</p>
          <p>{{ `商品庫存:${productDetail.stock}` }}</p>
          <div class="d-flex form">
            <form id="myform" method="POST" action="#" class="mr-20">
              <label for=""> </label
              ><input
                type="button"
                value="-"
                class="qtyminus"
                field="quantity"
                @click="decrement"
              />
              <input type="text" name="quantity" :value="productDetail.qty" readonly class="qty" />
              <input type="button" value="+" class="qtyplus" field="quantity" @click="increment"/>
            </form>
            <!-- <img src="../assets/img/logo&icon/love.svg" alt="" class="myLove" /> -->
            <div class="position-relative">
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
          <div class="d-flex ml-40">
            <button class="" @click="directBuy">直接購買</button>
            <button class="" @click="addToCart">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section2">
    <div class="top">商品描述</div>
    <div class="bottom">
      <h3>
        2001 百獸戰隊 盒玩 第三彈 百獸合體 牙吠獵人 日版 2盒 全新未拆 不收了出清
        內附糖果已過期 請勿食用為MINIPLA版 非SMP可變換成魔獸獵人
      </h3>
      <p>
        內容物 基本玩具整套內附糖果已過期 請勿食用為MINIPLA版
        非SMP可變換成魔獸獵人
      </p>
    </div>
  </section>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useProductStore } from '../store/product';
import { useProduct } from '../composables/product';

const productStore = useProductStore()
const { productDetail } = storeToRefs(productStore)

const { 
  increment,
  decrement,
  isFavour,
  addFavourHandle,
  cancelFavourHandle,
  messageShow,
  addToCart,
  directBuy
} = useProduct(productDetail)
</script>
<style lang="scss" scoped>
.section1 {
  display: flex;
  width: 900px;
  margin: 0 auto;
  background-color: var(--orange-color2);
  .contant {
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
    button {
      &:nth-child(1) {
        color: #fff;
        background-color: var(--orange-color1);
        font-weight: bold;
        border: 0px;
        padding: 15px 40px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius: 100px;
        margin-right: 20px;
        &:hover {
          background-color: var(--orange-color4);
        }
      }
      &:nth-child(2) {
        color: #fff;
        background-color: var(--orange-color3);
        font-weight: bold;
        border: 0px;
        padding: 15px 40px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius: 100px;
        &:hover {
          background-color: var(--orange-color4);
        }
      }
    }
    h2 {
      font-size: 24px;
      font-weight: bold;
      padding: 40px;
    }
    p {
      padding: 0px 40px 20px;
      font-weight: bold;
      font-size: 24px;
    }
    .form {
      padding: 0px 40px 20px;
      .myLove {
        cursor: pointer;
        &:active {
          background-image: url(../assets/img/logo&icon/fullLove.svg);
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
    }
  }
  .carousel-item {
    background-color: rgba(139, 141, 139, 0.7);
  }
  input.qtyplus {
    width: 25px;
    height: 30px;
    border: 1px solid #aaa;
    background: #f8f8f8;
    border-radius: 0px 3px 3px 0px;
  }

  input.qtyminus {
    width: 25px;
    height: 30px;
    border: 1px solid #aaa;
    background: #f8f8f8;
    border-radius: 3px 0px 0px 3px;
  }
  input.qty {
    width: 60px;
    height: 30px;
    text-align: center;
    border: 0;
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #aaa;
  }
}
.box2 {
  background-color: #fff;
  padding-top: 120px;
}
.section2 {
  width: 900px;
  padding-top: 40px;
  height: 300px;
  margin: 0 auto;
  .top {
    height: 60px;
    background-color: var(--orange-color3);
    border-radius: 10px 10px 0px 0px;
    font-size: 24px;
    color: #fff;
    font-weight: bold;
    padding: 20px;
  }
  .bottom {
    height: 150px;
    background-color: var(--orange-color2);
    h3 {
      padding: 20px;
    }
    p {
      padding: 5px 20px;
      font-weight: bold;
    }
  }
}
.box1 {
  margin-bottom: 200px;
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: var(--green-color2);
}
.message {
  position: absolute;
  width: max-content;
  background: #444444;
  color: #fff;
  padding: 4px 6px;
  border-radius: 4px;
  top: 0;
  left: 50px;
}
</style>
