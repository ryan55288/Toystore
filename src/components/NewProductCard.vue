<script setup>
import { ref } from "vue";

const quantity = ref(0);

const increment = () => {
  quantity.value++;
};

const decrement = () => {
  if (quantity.value > 0) {
    quantity.value--;
  }
};

const handleSubmit = () => {
  console.log("Form submitted with quantity:", quantity.value);
};
</script>

<template>
  <div class="d-flex justify-content-center">
    <div class="card">
      <img
        src="../assets/img/Product/newtoy/鋼彈模型/IMG.svg"
        alt=""
        class="card-img"
      />
      <div class="d-flex card-middle">
        <div class="container card-middle">
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
        <div class="d-flex justify-content-center mt-20">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <button type="button" class="btn rounded-pill btn-pluscart">
                  加入購物車
                </button>
              </div>
              <div class="col-md-6">
                <router-link to="/Cart">
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

<style scoped>
.card {
  height: 500px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:hover {
    border: 5px solid var(--orange-color3);
  }
  p {
    font-weight: bold;
    margin-bottom: 10px;
    &:nth-child(3) {
      color: var(--orange-color1);
    }
  }
  .card-img {
    height: 300px;
  }
}
.card-middle {
  padding: 0px 30px;
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
  img {
    cursor: pointer;
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
.card-bottom {
  .btn-pluscart {
    background-color: var(--orange-color1);
    color: #fff;
    font-weight: bold;
    width: 130px;
    height: 45px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    &:hover {
      background-color: var(--orange-color4);
    }
    &:active {
      background-color: var(--orange-color2);
    }
  }
  .btn-buy {
    background-color: var(--orange-color3);
    color: #fff;
    font-weight: bold;
    width: 130px;
    height: 45px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    &:hover {
      background-color: var(--orange-color4);
    }
    &:active {
      background-color: var(--orange-color2);
    }
  }
}
</style>
