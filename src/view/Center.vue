<template>
  <div class="web">
    <div class="Anchor"><Anchor /></div>
    <section class="section1">
      <div class="container animate__animated animate__zoomInDown">
        <div 
          class="carousel" 
          :style="{ transform: `rotateY(${rotation}deg)` }"
        >
          <div class="item a"></div>
          <div class="item b"></div>
          <div class="item c"></div>
          <div class="item d"></div>
          <div class="item e"></div>
          <div class="item f"></div>
        </div>
      </div>
      <div class="next" @click="next">
        <button>
          <i class="far fa-hand-point-right fa-2x"></i>
        </button>
      </div>
      <div class="prev" @click="prev">
        <button>
          <i class="far fa-hand-point-left fa-2x"></i>
        </button>
      </div>

      <div class="Zero">
        <img :src="imgurl" class="animate__animated animate__zoomInLeft" />
      </div>
      <div class="Mega">
        <img :src="imgurl2" class="animate__animated animate__zoomInRight" />
      </div>
    </section>

    <section class="section2 pt-40">
      <p
        class="fs-36 text-center text-white fw-bold animate__animated animate__flipInX"
      >
        8年級生最新商品
      </p>
      <div
        :class="{ animate__backInLeft: shouldAnimate }"
        class="allCard d-flex justify-content-center mt-30 container-fluid animate__animated animate__backInLeft"
      >
        <div class="row">
          <div class="col-md-6 col-lg-3">
            <ProductCard />
          </div>
          <div class="col-md-6 col-lg-3">
            <ProductCard />
          </div>
          <div class="col-md-6 col-lg-3">
            <ProductCard />
          </div>
          <div class="col-md-6 col-lg-3">
            <ProductCard />
          </div>
        </div>
      </div>
      <div
        class="allCard d-flex justify-content-center container-fluid animate__animated animate__backInRight"
      >
        <div class="row">
          <div class="col-md-2 col-lg-3">
            <ProductCard />
          </div>
          <div class="col-md-2 col-lg-3">
            <ProductCard />
          </div>
          <div class="col-md-2 col-lg-3">
            <ProductCard />
          </div>
          <div class="col-md-2 col-lg-3">
            <ProductCard />
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <router-link to="/Grade8">
          <button class="btn btn-more">更多商品</button>
        </router-link>
      </div>
    </section>

    <section class="section3">
      <p
        class="text-white fw-bold text-center animate__animated animate__flipInX"
      >
        新潮玩具最新商品
      </p>
      <div class="container animate__animated animate__rubberBand">
        <div class="allCard row mt-30">
          <!-- <div class="col-md-6 col-lg-4"><NewProductCard /></div>
          <div class="col-md-6 col-lg-4"><NewProductCard /></div>
          <div class="col-md-6 col-lg-4"><NewProductCard /></div> -->
          <!-- <counter></counter> -->
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <router-link to="/Newtoy">
          <button class="btn btn-more">更多商品</button>
        </router-link>
      </div>
    </section>

    <section class="section4"></section>

    <section class="section5">
      <div
        class="d-flex justify-content-center animate__animated animate__flipInX"
      >
        <img src="../assets/img/bg/coin.svg" alt="" class="mt-60" />
      </div>
      <div>
        <div class="container mt-60">
          <div class="row">
            <div class="col-md-6">
              <p class="text-center">一番賞COMEING SOON~Time Collection</p>
              <router-link to="/OneReward" class="text-decoration-none">
                <div class="moreInfoBox mt-30">
                  <div
                    class="fs-36 fw-bold text-white d-flex align-items-center pt-20 pl-20"
                  >
                    更多內容
                    <div>
                      <img
                        src="../assets/img/logo&icon/hand.svg"
                        alt=""
                        class="moreInfo ml-10"
                      />
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="col-md-6">
              <img src="../assets/img/bg/bottom-info1.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="container mt-60">
          <div class="row">
            <div class="col-md-6">
              <img src="../assets/img/bg/bottom-info2.svg" alt="" />
            </div>
            <div class="col-md-6">
              <p class="text-center ml-140">
                一番賞COMEING SOON~Time Collection
              </p>
              <router-link to="/OneReward" class="text-decoration-none">
                <div class="moreInfoBox mt-30 ml-420">
                  <div
                    class="hover fs-36 fw-bold text-white d-flex align-items-center pt-20 pl-20"
                  >
                    更多內容
                    <div>
                      <img
                        src="../assets/img/logo&icon/handRight.svg"
                        alt=""
                        class="moreInfo ml-10"
                      />
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NewProductCard from "@/components/NewProductCard.vue";
import ProductCard from "@/components/ProductCard.vue";
import Anchor from "@/components/Anchor.vue";

export default {
  components: { NewProductCard, ProductCard, Anchor },

  data() {
    return {
      imgurl: new URL("../assets/img/bg/zero.svg", import.meta.url),
      imgurl2: new URL("../assets/img/bg/Mega-Man.svg", import.meta.url),
      shouldAnimate: false,
      items: ["a", "b", "c", "d", "e", "f"],
      rotation: 0,
      deg: 60,
      productList: [
        {
          id: 1,
          name: "洛克人-獵鷹裝甲",
          stock: 5,
          price: 1599,
          imgurl: new URL(
            "../assets/img/Product/newtoy/洛克人/IMG-5.svg",
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
          name: "LEGO -阿光的鈦機械人",
          stock: 1,
          price: 2400,
          imgurl: new URL(
            "../assets/img/Product/newtoy/LEGO/IMG-3.svg",
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
          name: "鋼彈模型- 爆喪女妖",
          stock: 1,
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
          name: "鋼彈模型- 異端鋼彈",
          stock: 1,
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

<style lang="scss" scoped>
@keyframes backInLeft {
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

.section1 {
  width: 100%;
  padding-top: 300px;
  height: 965px;
  background-image: url(../assets/img/bg/centerTop-bg.svg);
  background-repeat: no-repeat;
  background-color: var(--green-color1);
  background-position: center;
  .Zero {
    // background-position: left;
    position: absolute;
    bottom: 250px;
    left: 500px;
  }
  .Mega {
    // background-position: right;
    position: absolute;
    bottom: 250px;
    right: 450px;
  }
  body {
    background: #333;
    padding: 70px 0;
    font: 15px/20px Arial, sans-serif;
  }

  .container {
    padding-top: 90px;
    margin: 0 auto;
    width: 250px;
    height: 200px;
    perspective: 1200px;
    font-family: "Lemon";
  }

  .carousel {
    width: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transition: transform 1s;
    .a {
      transform: rotateY(0deg) translateZ(250px);
      background: rgba(57, 56, 56, 0.5);
      background-image: url(../assets/img/Product/80toy/戰隊系列/IMG-2.svg);
      background-size: cover;
      background-repeat: no-repeat;
    }
    .b {
      transform: rotateY(60deg) translateZ(250px);
      background: rgba(172, 168, 168, 0.5);
      background-image: url(../assets/img/Product/80toy/戰隊系列/IMG-10.svg);
      background-size: cover;
      background-repeat: no-repeat;
    }
    .c {
      transform: rotateY(120deg) translateZ(250px);
      background: rgba(172, 168, 168, 1);
      background-image: url(../assets/img/Product/80toy/彈珠超人/IMG-1.svg);
      background-size: cover;
      background-repeat: no-repeat;
    }
    .d {
      transform: rotateY(180deg) translateZ(250px);
      background: rgba(172, 168, 168, 0.5);
      background-image: url(../assets/img/Product/80toy/徽章戰士/IMG-3.svg);
      background-size: cover;
      background-repeat: no-repeat;
    }
    .e {
      transform: rotateY(240deg) translateZ(250px);
      background: rgba(172, 168, 168, 0.5);
      background-image: url(../assets/img/Product/80toy/戰隊系列/IMG-8.svg);
      background-size: cover;
      background-repeat: no-repeat;
    }
    .f {
      transform: rotateY(300deg) translateZ(250px);
      background: rgba(172, 168, 168, 0.2);
      background-image: url(../assets/img/bg/carousel/4.svg);
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  .item {
    display: block;
    position: absolute;
    background: #000;
    width: 250px;
    height: 300px;
    font-size: 5em;
    text-align: center;
    color: #fff;
    opacity: 0.95;
    border-radius: 10px;
  }

  .next,
  .prev {
    background-color: var(--orange-color3);
    color: #fff;
    position: absolute;
    top: 400px;
    padding: 1em 2em;
    cursor: pointer;
    border-radius: 5px;
    border-top: 1px solid var(--orange-color3);
    box-shadow: 0 5px 0 var(--orange-color1);
    transition: box-shadow 0.1s, top 0.1s;
  }
  .next:hover,
  .prev:hover {
    color: var(--orange-color1);
  }
  // .next:active,
  // .prev:active {
  //   top: 104px;
  //   box-shadow: 0 1px 0 #999;
  // }
  .next {
    right: 550px;
  }
  .prev {
    left: 550px;
  }
  .prev button,
  .next button {
    border: 0px solid #fff;
    background-color: var(--orange-color3);
    color: #fff;
  }
}
.section2 {
  background-color: var(--green-color1);
  height: 1200px;
  margin: 0 auto;
  p {
    font-family: "Lemon";
  }
  .allCard div {
    padding: 5px 10px;
  }
}
.section3 {
  background-image: url(../assets/img/bg/center-content-bg.svg);
  display: block;
  height: 350px;
  background-color: var(--green-color1);
  p {
    padding-top: 50px;
    font-size: 36px;
    font-family: "Lemon";
  }
}
.section4 {
  background-color: var(--green-color1);
  height: 460px;
}
.section5 {
  background-image: url(../assets/img/bg/center-BG-bottom.svg);
  width: 100%;
  height: 1200px;
  .container p {
    background-color: var(--orange-color1);
    color: #fff;
    padding: 50px;
    font-weight: bold;
    font-size: 24px;
    width: 580px;
    font-family: "Lemon";
  }
  .moreInfo {
    width: 100px;
    height: 100px;
  }
  .moreInfoBox {
    cursor: pointer;
    background-color: var(--orange-color3);
    width: 300px;
    height: 135px;
    border-radius: 60px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    &:hover {
      background-color: var(--orange-color4);
      color: #fff;
    }
    &:active {
      background-color: var(--orange-color2);
      color: #fff;
    }
  }
}

.btn-more {
  margin-top: 50px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 160px;
  height: 60px;
  color: #fff;
  background-color: var(--orange-color3);
  border-radius: 60px;
  font-weight: bold;
  font-size: 24px;
  &:hover {
    background-color: var(--orange-color4);
    color: #fff;
  }
  &:active {
    background-color: var(--orange-color2);
    color: #fff;
  }
}
.web {
  overflow-y: hidden;
}
.Anchor {
  z-index: 3;
  position: fixed;
}

.phone {
  display: none;
}

@media (max-width: 1440px) {
  .section1 {
    .Zero {
      display: none;
    }
  }
  .allCard div {
    padding: 5px 10px;
  }
  .Anchor {
    display: none;
  }
}

@media (max-width: 375px) {
  .web {
    display: none;
  }
  .phone {
    display: block;
  }
  .centerBg {
    background-image: url(../assets/img/bg/center-bg.svg);
    height: 450px;
  }
  .project2 {
    margin: 0 auto;
    height: 500px;
    width: 375px;
    background-color: var(--green-color1);
  }
  .section2 {
    background-color: var(--green-color1);
    width: 100%;
    height: 1200px;
    margin: 0 auto;
    .allCard div {
      padding-top: 50px;
    }
  }
}
</style>
