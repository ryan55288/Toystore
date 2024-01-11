<script setup></script>
<script>
// const app = Vue.createApp({
//   data() {
//     return {
//       quantity: 0,
//     };
//   },
//   methods: {
//     increment() {
//       this.quantity++;
//     },
//     decrement() {
//       if (this.quantity > 0) {
//         this.quantity--;
//       }
//     },
//   },
// });

// app.mount("#app");
</script>

<template>
  <div class="box1"></div>
  <div class="box2"></div>
  <section class="section1">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5">
          <div
            id="carouselExampleIndicators"
            class="carousel"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="../assets/img/Product/80toy/天空精靈王.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/img/Product/80toy/天空精靈王2.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col-md-7 contant">
          <h2>商品名稱:百獸合體-牙吠獵人</h2>
          <p>內容類型:百獸戰隊</p>
          <p>建議售價:$4,000</p>
          <p>商品數量:1</p>
          <div class="d-flex form">
            <form id="myform" method="POST" action="#" class="mr-20">
              <label for=""> </label
              ><input
                type="button"
                value="-"
                class="qtyminus"
                field="quantity"
              />
              <input type="text" name="quantity" value="0" class="qty" />
              <input type="button" value="+" class="qtyplus" field="quantity" />
            </form>
            <img src="../assets/img/logo&icon/love.svg" alt="" class="myLove" />
          </div>
          <div class="d-flex ml-40">
            <button class="">直接購買</button>
            <button class="">加入購物車</button>
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
<style scoped>
.section1 {
  display: flex;
  width: 900px;
  margin: 0 auto;
  background-color: var(--orange-color2);
  .contant {
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
        &:hover {
          background-image: url(../assets/img/logo&icon/fullLove.svg);
          background-size: cover;
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
</style>
