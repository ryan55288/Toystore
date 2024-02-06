<template>
  <div class="Anchor"><Anchor /></div>
  <section class="section0"></section>
  <section class="section2 d-flex">
    <div class="bg-1"></div>
    <div class="bg-3"></div>
    <div class="bg-2"></div>
    <div
      id="carouselExampleIndicators"
      class="carousel slide carouselAll"
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
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner carouselImg">
        <div class="carousel-item active" data-bs-interval="1500">
          <img
            src="../assets/img/Product/newtoy/輪播圖片/egg1.svg"
            class="d-block"
            alt="..."
          />
        </div>
        <div class="carousel-item" data-bs-interval="1500">
          <img
            src="../assets/img/Product/newtoy/輪播圖片/egg2.svg"
            class="d-block"
            alt="..."
          />
        </div>
        <div class="carousel-item" data-bs-interval="1500">
          <img
            src="../assets/img/Product/newtoy/輪播圖片/egg3.svg"
            class="d-block"
            alt="..."
          />
        </div>
        <div class="carousel-item" data-bs-interval="1500">
          <img
            src="../assets/img/Product/newtoy/輪播圖片/egg4.svg"
            class="d-block"
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
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>

  <section class="section2"><NewProductType class="pt-20" /></section>

  <section class="section3">
    <div
      class="text-white text-center fw-bold fs-36 pt-40 animate__animated animate__flipInX"
    >
      鋼彈模型
    </div>
    <div class="container">
      <div class="row">
        <div v-for="prod in productList" class="col-md-6 col-lg-3 p-10">
          <NewProductCard :productDetail="prod" />
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center">
      <div class="page pt-40"><Page /></div>
    </div>
  </section>

  <section class="section4" ref="section4">
    <div class="d-flex justify-content-center">
      <img
        src="../assets/img/bg/newToyPage/reel-bottom.svg"
        alt=""
        class="reel"
      />
    </div>
    <!-- 卷軸 -->
    <div class="d-flex justify-content-center">
      <div
        id="oneReward"
        class="reel-body mb-200 animate__animated"
        :class="{ animate__bounceInDown: shouldAnimate }"
      >
        <!-- 卡片 -->
        <router-link to="OneReward/" class="text-decoration-none">
          <div class="d-flex justify-content-center pt-50">
            <div class="d-flex align-items-center bg-orange2">
              <img src="../assets/img/Product/newtoy/一番賞/IMG-3.svg" alt="" />
            </div>
            <div>
              <h3
                class="d-flex justify-content-center align-items-center bg-orange2"
              >
                <div class="fs-36 fw-bold">一番賞 獵人XX</div>
              </h3>
              <h4 class="d-flex justify-content-center align-items-center">
                <div class="fs-24 fw-bold text-white">
                  預定自2020年04月03日(星期五)起逐次發售
                </div>
              </h4>
            </div>
          </div>
        </router-link>
        <router-link to="OneReward/" class="text-decoration-none">
          <div class="d-flex justify-content-center pt-50">
            <div class="d-flex align-items-center bg-orange2">
              <img src="../assets/img/Product/newtoy/一番賞/IMG-1.svg" alt="" />
            </div>
            <div class="">
              <h3 class="d-flex justify-content-center align-items-center">
                <div class="fs-36 fw-bold">一番賞 七龍珠</div>
              </h3>
              <h4 class="d-flex justify-content-center align-items-center">
                <div class="fs-24 fw-bold text-white">
                  預定自2020年04月05日(星期五)起逐次發售
                </div>
              </h4>
            </div>
          </div>
        </router-link>
        <!-- 卡片 -->

        <!-- 卡片 -->
        <router-link to="OneReward/" class="text-decoration-none">
          <div class="d-flex justify-content-center pt-50">
            <div class="d-flex align-items-center bg-orange2">
              <img
                src="../assets/img/Product/newtoy/一番賞/IMG.svg"
                alt=""
                class=""
              />
            </div>
            <div>
              <h3 class="d-flex justify-content-center align-items-center">
                <div class="fs-36 fw-bold">一番賞 我的英雄學院</div>
              </h3>
              <h4 class="d-flex justify-content-center align-items-center">
                <div class="fs-24 fw-bold text-white">
                  預定自2020年04月03日(星期五)起逐次發售
                </div>
              </h4>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import NewProductType from "@/components/NewProductType.vue";
import NewProductCard from "@/components/NewProductCard.vue";
import Anchor from "@/components/Anchor.vue";
import Page from "@/components/Page.vue";
export default {
  components: { NewProductType, NewProductCard, Anchor, Page },

  data() {
    return {
      shouldAnimate: false,
      productList: [
        {
          id: 1,
          name: "鋼彈模型-紅色異端",
          stock: 10,
          price: 680,
          imgurl: new URL(
            "../assets/img/Product/newtoy/鋼彈模型/IMG-1.svg",
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
          name: "鋼彈模型-飛翼零式",
          stock: 13,
          price: 700,
          imgurl: new URL(
            "../assets/img/Product/newtoy/鋼彈模型/Rectangle 6.svg  ",
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
          name: "鋼彈模型-爆喪女妖",
          stock: 15,
          price: 1400,
          imgurl: new URL(
            "../assets/img/Product/newtoy/鋼彈模型/IMG-3.svg",
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
          name: "鋼彈模型-OO鋼彈",
          stock: 1,
          price: 820,
          imgurl: new URL(
            "../assets/img/Product/newtoy/鋼彈模型/IMG.svg",
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
          name: "鋼彈模型-獨角獸",
          stock: 8,
          price: 1040,
          imgurl: new URL(
            "../assets/img/Product/newtoy/鋼彈模型/IMG-2.svg",
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
          name: "鋼彈模型-自由鋼彈",
          stock: 1,
          price: 699,
          imgurl: new URL(
            "../assets/img/Product/newtoy/鋼彈模型/IMG-4.svg",
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
          name: "鋼彈模型-RX-78-2",
          stock: 1,
          price: 680,
          imgurl: new URL(
            "../assets/img/Product/newtoy/鋼彈模型/IMG-5.svg",
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
          name: "鋼彈模型-命運鋼彈",
          stock: 1,
          price: 565,
          imgurl: new URL(
            "../assets/img/Product/newtoy/鋼彈模型/IMG-6.svg",
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
  mounted() {
    $(window).scroll(this.handleScroll);
  },
  beforeUnmount() {
    $(window).off("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const section4Rect = this.$refs.section4.getBoundingClientRect();
      this.shouldAnimate =
        section4Rect.top < window.innerHeight && section4Rect.bottom > 0;
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -1500px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }

  75% {
    transform: translate3d(0, -10px, 0);
  }

  90% {
    transform: translate3d(0, 5px, 0);
  }

  to {
    transform: none;
  }
}
.reel-body {
  z-index: 1;
  width: 1200px;
  height: 1100px;
  background-color: var(--green-color2);
  position: relative;
  top: -15px;
  left: 0px;
  opacity: 0; /* 初始时设置透明度为 0 */
  transition: opacity 1s; /* 添加渐变效果 */
  h3 {
    background-color: var(--orange-color2);
    width: 610px;
    height: 215px;
    color: var(--green-color1);
    &:hover {
      color: var(--green-color2);
    }
  }
  h4 {
    background-color: var(--orange-color3);
    width: 610px;
    height: 85px;
    color: var(--green-color1);
    &:hover {
      color: var(--green-color2);
    }
  }
}

.section4 {
  height: 1300px;
  background-color: var(--green-color1);
  .animate__bounceInDown {
    animation-name: bounceInDown;
    animation-duration: 1.5s;
    opacity: 1;
  }
}
.section3 {
  height: 1300px;
  background-color: var(--green-color1);
  .row {
    padding-top: 40px;
  }
}
.section2 {
  .carouselImg {
    height: 600px;
  }
  .carouselAll {
    width: 450px;
    height: 550px;
  }
  .bg-1 {
    background-image: url(../assets/img/bg/newToyPage/bg-top1.svg);
    width: 500px;
    height: 600px;
    background-repeat: no-repeat;
  }
  .bg-2 {
    background-image: url(../assets/img/bg/newToyPage/bg-top2.svg);
    background-repeat: no-repeat;
    width: 1000px;
    height: 600px;
  }
  .bg-3 {
    background-image: url(../assets/img/bg/newToyPage/bg-top3.svg);
    background-repeat: no-repeat;
    width: 1000px;
    height: 600px;
  }
}

.section0 {
  height: 80px;
  width: 100%;
  background-color: var(--green-color1);
}
@media (max-width: 1440px) {
  .Anchor {
    display: none;
  }
}
</style>
