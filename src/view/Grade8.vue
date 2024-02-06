<template>
  <div><Anchor /></div>
  <section class="section1 box1">
    <div class="marquee-all">
      <div class="marquee-content fs-48 text-white marquee mt-100">
        Lots of toys you may have missed
      </div>
      <div
        class="marquee-content2 mt-50 d-flex justify-content-center marquee2"
      >
        <div>
          <img src="../assets/img/Product/80toy/戰隊系列/IMG-3.svg" alt="" />
        </div>
        <div>
          <img src="../assets/img/Product/80toy/彈珠超人/IMG-1.svg" alt="" />
        </div>
        <div>
          <img src="../assets/img/Product/80toy/徽章戰士/IMG-2.svg" alt="" />
        </div>
        <div>
          <img src="../assets/img/Product/80toy/戰隊系列/IMG-10.svg" alt="" />
        </div>
        <div>
          <img src="../assets/img/Product/80toy/戰隊系列/IMG-2.svg " alt="" />
        </div>
      </div>
      <div class="marquee-content3 fs-48 text-white marquee3">
        But Jungle can help you collect it
      </div>
    </div>
  </section>
  <div><ProductType /></div>

  <section class="section2">
    <div class="pt-40 text-center fs-36 fw-bold text-white">百獸戰隊</div>
    <div class="container mt-40">
      <div class="row animate__animated animate__backInLeft">
        <div class="col-md-3"><WebProductCard /></div>
        <div class="col-md-3"><WebProductCard /></div>
        <div class="col-md-3"><WebProductCard /></div>
        <div class="col-md-3"><WebProductCard /></div>
      </div>
    </div>
    <div class="container mt-40">
      <div class="row animate__animated animate__backInRight">
        <div class="col-md-3"><WebProductCard /></div>
        <div class="col-md-3"><WebProductCard /></div>
        <div class="col-md-3"><WebProductCard /></div>
        <div class="col-md-3"><WebProductCard /></div>
      </div>
    </div>
    <div class="page"><Page /></div>
  </section>

  <section class="section3">
    <div
      class="fs-36 fw-bold text-white text-center pt-40 animate__animated animate__flipInX"
    >
      熱銷商品
    </div>
    <div class="container mt-40">
      <div class="row">
        <div v-for="prod in productList" class="col-md-6 col-lg-3">
          <NewProductCard
            :productDetail="prod"
            class="animate__animated animate__bounceIn"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductType from "@/components/ProductType.vue";
import WebProductCard from "@/components/ProductCard.vue";
import NewProductCard from "@/components/NewProductCard.vue";
import Page from "@/components/Page.vue";
import Anchor from "@/components/Anchor.vue";

export default {
  components: { ProductType, NewProductCard, WebProductCard, Page, Anchor },

  data() {
    return {
      productList: [
        {
          id: 1,
          name: "彈珠人-白寶警察",
          stock: 5,
          price: 4500,
          imgurl: new URL(
            "../assets/img/Product/80toy/彈珠超人/IMG-1.svg",
            import.meta.url
          ),
          iconSrc: new URL(
            "../assets/img/logo&icon/mylove.svg",
            import.meta.url
          ),
          quantity: 0,
        },
        {
          id: 2,
          name: "忍風戰隊-忍風合體 ",
          stock: 5,
          price: 5500,
          imgurl: new URL(
            "../assets/img/Product/80toy/戰隊系列/IMG-5.svg",
            import.meta.url
          ),
          iconSrc: new URL(
            "../assets/img/logo&icon/mylove.svg",
            import.meta.url
          ),
          quantity: 0,
        },
        {
          id: 3,
          name: "忍風戰隊- 轟雷神",
          stock: 1,
          price: 4500,
          imgurl: new URL(
            "../assets/img/Product/80toy/戰隊系列/IMG-8.svg",
            import.meta.url
          ),
          iconSrc: new URL(
            "../assets/img/logo&icon/mylove.svg",
            import.meta.url
          ),
          quantity: 0,
        },
        {
          id: 3,
          name: "戰鬥陀螺-木之宮龍",
          stock: 1,
          price: 1900,
          imgurl: new URL(
            "../assets/img/Product/80toy/戰鬥陀螺//IMG.svg",
            import.meta.url
          ),
          iconSrc: new URL(
            "../assets/img/logo&icon/mylove.svg",
            import.meta.url
          ),
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    next() {
      this.rotation -= this.deg;
    },
    prev() {
      this.rotation += this.deg;
    },
  },
};
</script>

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
  width: 100%;
  background-repeat: no-repeat;
  height: 700px;
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
