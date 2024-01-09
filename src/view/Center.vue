<script setup>
import Web_Product_Card from "@/components/Web_Product_Card.vue";
import Web_Newproduct_Card from "@/components/Web_Newproduct_Card.vue";
import Anchor from "@/components/Anchor.vue";
</script>

<script>
$(document).ready(function () {
  var carousel = $(".carousel"),
    currdeg = 0;

  $(".next, .prev").on("click", function (e) {
    var direction = $(this).hasClass("next") ? "n" : "p";

    if (direction === "n") {
      currdeg -= 60;
    }
    if (direction === "p") {
      currdeg += 60;
    }

    carousel.css({
      "-webkit-transform": "rotateY(" + currdeg + "deg)",
      "-moz-transform": "rotateY(" + currdeg + "deg)",
      "-o-transform": "rotateY(" + currdeg + "deg)",
      transform: "rotateY(" + currdeg + "deg)",
    });
  });
});
</script>

<template>
  <div class="web">
    <div><Anchor /></div>
    <section class="section1 container-fluid">
      <div class="container pt-80">
        <div class="carousel">
          <div class="item a"></div>
          <div class="item b"></div>
          <div class="item c"></div>
          <div class="item d"></div>
          <div class="item e"></div>
          <div class="item f"></div>
        </div>
      </div>
      <div class="next">
        <i class="far fa-hand-point-right fa-2x"></i>
      </div>
      <div class="prev">
        <i class="far fa-hand-point-left fa-2x"></i>
      </div>

      <div class="Kong-icon">
        <img
          src="../assets/img/bg/小金剛.svg"
          alt=""
          class="animate__animated animate__backInLeft"
        />
      </div>
    </section>

    <section class="section2 pt-40">
      <p class="fs-36 text-center text-white fw-bold">8年級生最新商品</p>
      <div class="allCard d-flex justify-content-center no-wrap mt-30">
        <div>
          <Web_Product_Card />
        </div>
        <div>
          <Web_Product_Card />
        </div>
        <div>
          <Web_Product_Card />
        </div>
        <div>
          <Web_Product_Card />
        </div>
      </div>
      <div class="allCard d-flex justify-content-center mt-30">
        <div>
          <Web_Product_Card />
        </div>
        <div>
          <Web_Product_Card />
        </div>
        <div>
          <Web_Product_Card />
        </div>
        <div>
          <Web_Product_Card />
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-more">看更多</button>
      </div>
    </section>

    <section class="section3">
      <p class="text-white fw-bold text-center">新潮玩具</p>
      <div class="container">
        <div class="allCard row mt-30">
          <div class="col"><Web_Newproduct_Card /></div>
          <div class="col"><Web_Newproduct_Card /></div>
          <div class="col"><Web_Newproduct_Card /></div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-more">看更多</button>
      </div>
    </section>

    <section class="section4"></section>

    <section class="section5">
      <div class="d-flex justify-content-center">
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
                </div> </router-link
              >>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- phone -->
  <div class="phone">
    <section class="centerBg">
      <div class="section2">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active mt-5">
              <img
                src="../assets/img/Product/麥特比1.svg"
                class="d-block"
                alt="..."
              />
              <div class="fs-36 fw-bold mt-3 text-center text-white">
                經典回憶
              </div>
              <div class="fs-24 fw-bold mt-2 text-center text-white">
                徽章戰士-麥特比
              </div>
            </div>
            <div class="carousel-item mt-5">
              <img
                src="../assets/img/Product/金剛.svg"
                class="d-block"
                alt="..."
              />
              <div class="fs-36 fw-bold mt-3 text-center text-white">
                經典回憶
              </div>
              <div class="fs-24 fw-bold mt-2 text-center text-white">
                百獸戰隊-牙吠騎士
              </div>
            </div>
            <div class="carousel-item mt-5">
              <img
                src="../assets/img/Product/龍騎士.svg"
                class="d-block"
                alt="..."
              />
              <div class="fs-36 fw-bold mt-3 text-center text-white">
                經典回憶
              </div>
              <div class="fs-24 fw-bold mt-2 text-center text-white">
                戰鬥陀螺-龍騎士
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
    <section class="project2">
      <div class="fs-24 text-center text-white fw-bold pt-4">
        8年級生最新商品
      </div>
    </section>
  </div>
</template>

<style scoped>
.section1 {
  padding-top: 200px;
  width: 100%;
  height: 650px;
  background-image: url(../assets/img/bg/centerTop-bg.svg);
  background-repeat: no-repeat;
  background-color: var(--green-color1);
  .Kong-icon {
    position: absolute;
    bottom: 150px;
    left: 300px;
  }
  body {
    background: #333;
    padding: 70px 0;
    font: 15px/20px Arial, sans-serif;
  }

  .container {
    margin: 0 auto;
    width: 250px;
    height: 200px;
    position: relative;
    perspective: 1000px;
  }

  .carousel {
    height: 100%;
    width: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transition: transform 1s;
  }

  .item {
    display: block;
    position: absolute;
    background: #000;
    width: 250px;
    height: 300px;
    line-height: 200px;
    font-size: 5em;
    text-align: center;
    color: #fff;
    opacity: 0.95;
    border-radius: 10px;
  }

  .a {
    transform: rotateY(0deg) translateZ(250px);
    background: rgba(57, 56, 56, 0.5);
    background-image: url(../assets/img/Product/80toy/麥特比1.svg);
    background-size: cover;
  }
  .b {
    transform: rotateY(60deg) translateZ(250px);
    background: rgba(172, 168, 168, 0.5);
    background-image: url(../assets/img/Product/80toy/龍騎士.svg);
    background-size: cover;
  }
  .c {
    transform: rotateY(120deg) translateZ(250px);
    background: rgba(172, 168, 168, 1);
    background-image: url(../assets/img/bg/carousel/1.svg);
    background-size: cover;
  }
  .d {
    transform: rotateY(180deg) translateZ(250px);
    background: rgba(172, 168, 168, 0.5);
    background-image: url(../assets/img/bg/carousel/2.svg);
    background-size: cover;
  }
  .e {
    transform: rotateY(240deg) translateZ(250px);
    background: rgba(172, 168, 168, 0.5);
    background-image: url(../assets/img/bg/carousel/3.svg);
    background-size: cover;
  }
  .f {
    transform: rotateY(300deg) translateZ(250px);
    background: rgba(172, 168, 168, 0.2);
    background-image: url(../assets/img/bg/carousel/4.svg);
    background-size: cover;
  }

  .next,
  .prev {
    background-color: var(--orange-color3);
    color: #fff;
    position: absolute;
    top: 100px;
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
  .next:active,
  .prev:active {
    top: 104px;
    box-shadow: 0 1px 0 #999;
  }
  .next {
    margin-top: 210px;
    right: 5px;
  }
  .prev {
    margin-top: 210px;
    left: 5px;
  }
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
    font-size: 36px;
    width: 580px;
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
      background-color: var(--orange-color2);
    }
  }
}
.section3 {
  background-image: url(../assets/img/bg/center-content-bg.svg);
  width: 100%;
  height: 360px;
  background-color: var(--green-color1);
  z-index: 2;
  p {
    padding-top: 40px;
    font-size: 36px;
  }
}
.section4 {
  background-color: var(--green-color1);
  width: 100%;
  height: 500px;
}

.btn-more {
  margin-top: 80px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 160px;
  height: 60px;
  color: #fff;
  background-color: var(--orange-color3);
  border-radius: 60px;
  font-weight: bold;
  font-size: 24px;
  &:hover {
    background-color: var(--orange-color2);
    color: var(--orange-color3);
  }
  &:active {
    background-color: var(--orange-color1);
    color: var(--orange-color2);
  }
}
.allCard div {
  padding: 5px 15px;
}

.section2 {
  background-color: var(--green-color1);
  width: 100%;
  height: 1200px;
  margin: 0 auto;
}

.phone {
  display: none;
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
}
</style>
