<script setup>
$(function () {
  $(".qtyplus").click(function (e) {
    e.preventDefault();
    fieldName = $(this).attr("field");
    var currentVal = parseInt($("input[name=" + fieldName + "]").val());
    if (!isNaN(currentVal)) {
      $("input[name=" + fieldName + "]").val(currentVal + 1);
    } else {
      $("input[name=" + fieldName + "]").val(0);
    }
  });
  $(".qtyminus").click(function (e) {
    e.preventDefault();
    fieldName = $(this).attr("field");
    var currentVal = parseInt($("input[name=" + fieldName + "]").val());
    if (!isNaN(currentVal) && currentVal > 0) {
      $("input[name=" + fieldName + "]").val(currentVal - 1);
    } else {
      $("input[name=" + fieldName + "]").val(0);
    }
  });
});
</script>

<template>
  <div class="d-flex justify-content-center">
    <div class="card">
      <img src="../assets/img/Product/80toy/鳳凰.png" alt="" class="card-img" />
      <div class="d-flex">
        <div class="content ml-50">
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
.btn-buy {
  background-color: var(--orange-color3);
  color: #fff;
  font-weight: bold;
  width: 120px;
  height: 45px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.btn-buy:active {
  background-color: var(--orange-color2);
  color: #fff;
}
.btn-pluscart {
  background-color: var(--orange-color1);
  color: #fff;
  font-weight: bold;
  width: 120px;
  height: 45px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.btn-pluscart:active {
  background-color: var(--orange-color2);
  color: #fff;
}

.myloveIcon {
  cursor: pointer;
}
.card {
  width: 350px;
  height: 500px;
  background-color: #fff;
}
.card:hover {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.card-img {
  padding: 10px;
  width: 100%;
  height: 300px;
}
.card p {
  color: var(--orange-color1);
}
.qty {
  width: 40px;
  height: 30px;
  text-align: center;
  border: 0;
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
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
</style>
