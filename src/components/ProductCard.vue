<template>
  <div class="d-flex justify-content-center">
    <div class="card">
      <div class="d-flex justify-content-center">
        <img
          src="../assets/img/Product/80toy/天空精靈王.png"
          alt=""
          class="w-75"
        />
      </div>
      <div class="card-top d-flex">
        <div class="card-content container">
          <div class="row">
            <div class="col-md-8">
              <p>百獸戰隊-天空精靈王</p>
              <p>庫存:1</p>
              <p>NTD:$2,480</p>
              <form id="myform" @submit.prevent="handleSubmit">
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
                  type="text"
                  name="quantity"
                  :value="quantity"
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
                  <button type="button" class="btn rounded-pill btn-pluscart">
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

<script>
export default {
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity > 0) {
        this.quantity--;
      }
    },
    handleSubmit() {
      console.log("Form submitted with quantity:", this.quantity);
    },
  },
};
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
  }
  .qtyminus {
    width: 25px;
    height: 30px;
    border: 1px solid #aaa;
    background-color: #f8f8f8;
    border-radius: 3px 0px 0px 3px;
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
    border: 3px solid var(--orange-color3);
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
