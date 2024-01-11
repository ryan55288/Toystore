<script setup></script>

<template>
  <div class="d-flex justify-content-center">
    <div class="card">
      <img src="../assets/img/Product/80toy/鳳凰.png" alt="" class="card-img" />
      <div class="d-flex card-middle">
        <div class="content ml-50">
          <div class="mb-2">戰鬥陀螺-鳳凰</div>
          <div class="mb-2">庫存:1</div>
          <p class="mb-2">NTD:$2,480</p>
          <form id="myform" method="POST" action="#">
            <label for=""> </label
            ><input type="button" value="-" class="qtyminus" field="quantity" />
            <input type="text" name="quantity" value="0" class="qty" />
            <input type="button" value="+" class="qtyplus" field="quantity" />
          </form>
        </div>
        <div class="ms-5">
          <img src="../assets/img/logo&icon/mylove.svg" alt="" class="" />
        </div>
      </div>
      <div class="card-bottom">
        <div class="d-flex justify-content-center mt-20">
          <div class="mx-3">
            <button type="button" class="btn rounded-pill btn-pluscart">
              加入購物車
            </button>
          </div>
          <button type="button" class="btn rounded-pill btn-buy">
            直接購買
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 380px;
  height: 500px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  p {
    color: var(--orange-color1);
  }
  .card-img {
    height: 300px;
  }
}
.card-middle {
  .qtyminus {
    width: 25px;
    height: 30px;
    border: 1px solid #aaa;
    background: #f8f8f8;
    border-radius: 3px 0px 0px 3px;
  }
  .qtyplus {
    width: 25px;
    height: 30px;
    border: 1px solid #aaa;
    background: #f8f8f8;
    border-radius: 0px 3px 3px 0px;
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
    width: 120px;
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
    width: 120px;
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
