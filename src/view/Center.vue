<script setup>
import Web_Product_Card from "@/components/Web_Product_Card.vue";
import Web_Newproduct_Card from "@/components/Web_Newproduct_Card.vue";
import Anchor from "@/components/Anchor.vue";

// var myCarousel = document.querySelector("#myCarousel");
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 2000,
//   wrap: true,
// });
</script>

<template>
  <div class="web">
    <div><Anchor /></div>
    <section class="box1 section1">
      <div class="carousel carousel-contant" data-bs-interal="1500">
        <div
          id="carouselExampleCaptions"
          class="carousel slide carouselSet"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active w-75" data-bs-interval="1000">
              <img
                src="../assets/img/bg/輪播圖片1.svg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item w-75">
              <img
                src="../assets/img/bg/輪播圖片2.svg"
                class="d-block w-100"
                data-bs-interval="1000"
                alt="..."
              />
            </div>
            <div class="carousel-item w-75">
              <img
                src="../assets/img/bg/輪播圖片3.svg"
                class="d-block w-100"
                data-bs-interval="1000"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="Kong-icon">
        <img
          src="../assets/img/bg/小金剛.svg"
          alt=""
          class="animate__animated animate__backInLeft"
        />
      </div>
    </section>

    <section class="box2 section2">
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
              <div class="moreInfoBox mt-30 ml-420">
                <div
                  class="fs-36 fw-bold text-white d-flex align-items-center pt-20 pl-20"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="phone">
    <section class="centerBg">
      <div class="box2">
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
}
.moreInfoBox:active {
  background-color: var(--orange-color1);
  color: #000;
}
.section5 .container p {
  background-color: var(--orange-color1);
  color: #fff;
  padding: 50px;
  font-weight: bold;
  font-size: 36px;
  width: 580px;
}
.section5 {
  background-image: url(../assets/img/bg/center-BG-bottom.svg);
  width: 100%;
  height: 1200px;
}
.section4 {
  background-color: var(--green-color1);
  width: 100%;
  height: 500px;
}
.section3 {
  background-image: url(../assets/img/bg/center-content-bg.svg);
  width: 100%;
  height: 360px;
  background-color: var(--green-color1);
  z-index: 2;
}
.section3 p {
  padding-top: 40px;
  font-size: 36px;
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
}
.btn-more:hover {
  background-color: var(--orange-color2);
  color: var(--orange-color3);
}
.btn-more:active {
  background-color: var(--orange-color1);
  color: var(--orange-color2);
}
.allCard div {
  padding: 5px 15px;
}
.carousel-indicators button {
  width: 50px;
  height: 15px;
  border-radius: 20px;
}
.carousel-contant {
  position: relative;
  height: 940px;
}
.Kong-icon {
  position: absolute;
  bottom: -100px;
  left: 150px;
}
.phone {
  display: none;
}
.box1 {
  width: 100%;
  background-image: url(../assets/img/bg/center-bg.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-color: var(--green-color1);
  z-index: 1;
}
.box2 {
  background-color: var(--green-color1);
  width: 100%;
  height: 1200px;
  margin: 0 auto;
}
.carouselSet {
  padding-top: 200px;
}
.carousel-item {
  margin-left: 170px;
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
  .carousel-item img {
    margin: 0 auto;
    height: 250px;
  }
  .project2 {
    margin: 0 auto;
    height: 500px;
    width: 375px;
    background-color: var(--green-color1);
  }
}
</style>
