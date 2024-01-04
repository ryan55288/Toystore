<script setup>
import Product_Type from "@/components/Product_Type.vue";
import Web_Product_Card from "@/components/Web_Product_Card.vue";
import Web_Newproduct_Card from "@/components/Web_Newproduct_Card.vue";
import Page from "@/components/Page.vue";
import Anchor from "@/components/Anchor.vue";
</script>

<template>
  <div><Anchor /></div>
  <section class="section1 box1">
    <div class="marquee-all">
      <div class="marquee-content fs-64 text-white marquee mt-100">
        Lots of toys you may have missed
      </div>
      <div
        class="marquee-content2 fs-64 text-white mt-50 d-flex justify-content-center marquee2"
      >
        <div>
          <img src="../assets/img/Product/80toy/天空精靈王.png" alt="" />
        </div>
        <div><img src="../assets/img/Product/80toy/金剛.png" alt="" /></div>
        <div><img src="../assets/img/Product/80toy/電車.png" alt="" /></div>
        <div><img src="../assets/img/Product/80toy/鳳凰.png" alt="" /></div>
        <div><img src="../assets/img/Product/80toy/麥特把2.png " alt="" /></div>
      </div>
      <div class="marquee-content3 fs-64 text-white marquee3">
        But Jungle can help you collect it
      </div>
    </div>
  </section>
  <div><Product_Type /></div>
  <section class="section2">
    <div class="pt-40 text-center fs-36 fw-bold text-white">百獸戰隊</div>
    <div class="container mt-40">
      <div class="row">
        <div class="col-md-3"><Web_Product_Card /></div>
        <div class="col-md-3"><Web_Product_Card /></div>
        <div class="col-md-3"><Web_Product_Card /></div>
        <div class="col-md-3"><Web_Product_Card /></div>
      </div>
    </div>
    <div class="container mt-40">
      <div class="row">
        <div class="col-md-3"><Web_Product_Card /></div>
        <div class="col-md-3"><Web_Product_Card /></div>
        <div class="col-md-3"><Web_Product_Card /></div>
        <div class="col-md-3"><Web_Product_Card /></div>
      </div>
    </div>
    <div class="page"><Page /></div>
  </section>
  <section class="section3">
    <div class="fs-36 fw-bold text-white text-center pt-40">熱銷商品</div>
    <div class="container mt-40">
      <div class="row">
        <div class="col-md-4">
          <span class="hot-icon fs-24 fw-bold"
            >HOT1<i class="fas fa-fire-alt"></i
          ></span>
          <Web_Newproduct_Card />
        </div>
        <div class="col-md-4">
          <span class="hot-icon fs-24 fw-bold"
            >HOT2<i class="fas fa-fire-alt"></i
          ></span>
          <Web_Newproduct_Card />
        </div>
        <div class="col-md-4">
          <span class="hot-icon fs-24 fw-bold"
            >HOT3<i class="fas fa-fire-alt"></i
          ></span>
          <Web_Newproduct_Card />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hot-icon {
  z-index: 1;
  position: relative;
  top: 36px;
  left: 32px;
  background-color: var(--orange-color1);
  color: #fff;
  border-radius: 5px;
  padding: 10px;
}
.section3 {
  background-repeat: no-repeat;
  width: 100%;
  height: 730px;
  background-image: url(../assets/img/bg/80ToyPage/bottom-bg-1.svg);
}
.section2 {
  height: 1200px;
  width: 100%;
  background-color: var(--green-color1);
}
.box1 {
  background-image: url(../assets/img/bg/80ToyPage/top-bg1.svg);
  width: 100%;
  height: 750px;
}
.box div {
  color: #fff;
}
.marquee-all {
  overflow: hidden;
  overflow-x: hidden;
}

.marquee-content {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 8s linear infinite;
  display: flex;
  align-items: center;
}

.marquee-content2 {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 8s ease-in-out infinite;
}
.marquee-content3 {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 8s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes marquee2 {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes marquee3 {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

.section1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.section1 img {
  width: 400px;
  height: 400px;
  padding: 20px;
}
</style>
