<script setup>
import ProductType from "@/components/ProductType.vue";
import WebProductCard from "@/components/ProductCard.vue";
import NewProductCard from "@/components/NewProductCard.vue";
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
        <div><img src="../assets/img/Product/80toy/kong.svg" alt="" /></div>
        <div><img src="../assets/img/Product/80toy/電車.png" alt="" /></div>
        <div><img src="../assets/img/Product/80toy/鳳凰.png" alt="" /></div>
        <div><img src="../assets/img/Product/80toy/麥特把2.png " alt="" /></div>
      </div>
      <div class="marquee-content3 fs-64 text-white marquee3">
        But Jungle can help you collect it
      </div>
    </div>
  </section>
  <div><ProductType /></div>

  <section class="section2">
    <div class="pt-40 text-center fs-36 fw-bold text-white">百獸戰隊</div>
    <div class="container mt-40">
      <div class="row">
        <div class="col-md-3"><WebProductCard /></div>
        <div class="col-md-3"><WebProductCard /></div>
        <div class="col-md-3"><WebProductCard /></div>
        <div class="col-md-3"><WebProductCard /></div>
      </div>
    </div>
    <div class="container mt-40">
      <div class="row">
        <div class="col-md-3"><WebProductCard /></div>
        <div class="col-md-3"><WebProductCard /></div>
        <div class="col-md-3"><WebProductCard /></div>
        <div class="col-md-3"><WebProductCard /></div>
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
          <NewProductCard />
        </div>
        <div class="col-md-4">
          <span class="hot-icon fs-24 fw-bold"
            >HOT2<i class="fas fa-fire-alt"></i
          ></span>
          <NewProductCard />
        </div>
        <div class="col-md-4">
          <span class="hot-icon fs-24 fw-bold"
            >HOT3<i class="fas fa-fire-alt"></i
          ></span>
          <NewProductCard />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section1 {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 400px;
    height: 400px;
    padding: 20px;
  }
  .marquee-all {
    overflow: hidden;
    overflow-x: hidden;
    .marquee-content {
      display: inline-block;
      white-space: nowrap;
      animation: marquee 8s linear infinite;
      display: flex;
      align-items: center;
      font-family: "Lemon";
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
      font-family: "Lemon";
    }
  }
}
.section2 {
  height: 1200px;
  width: 100%;
  background-color: var(--green-color1);
}
.section3 {
  background-repeat: no-repeat;
  height: 730px;
  background-image: url(../assets/img/bg/80ToyPage/bottom-bg-1.svg);
  .hot-icon {
    z-index: 1;
    position: relative;
    top: 36px;
    left: 18px;
    background-color: var(--orange-color1);
    color: #fff;
    border-radius: 5px;
    padding: 10px;
  }
}

.box1 {
  background-image: url(../assets/img/bg/80ToyPage/top-bg1.svg);
  width: 100%;
  height: 750px;
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
</style>
