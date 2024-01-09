<script setup></script>

<template>
  <div class="d-flex justify-content-center">
    <div class="card">
      <div class="d-flex justify-content-center">
        <img
          src="../assets/img/Product/80toy/麥特把2.png"
          alt=""
          class="w-75"
        />
      </div>
      <div class="section2 d-flex">
        <div class="card-content ms-4">
          <div class="mb-2">百獸戰隊-天空精靈王</div>
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
          <img
            src="../assets/img/logo&icon/mylove.svg"
            alt=""
            class="myloveIcon"
          />
        </div>
      </div>
      <div class="card-bottom">
        <div class="d-flex justify-content-center">
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
.section2 {
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
  }
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
  }
}

.card {
  width: 320px;
  height: 420px;
  background-color: #fff;
}
.card:hover {
  border: 3px solid var(--orange-color3);
  /* padding: 5px; */
}
.card img {
  padding: 20px;
}
.card p {
  color: var(--orange-color1);
}
</style>
