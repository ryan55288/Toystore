<script setup>
import Phone_productCard from "@/components/Phone_productCard.vue";
</script>

<template>
  <div class="web">
    <section class="box1">
      <div class="">
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
            <div class="carousel-item active w-75">
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
                alt="..."
              />
            </div>
            <div class="carousel-item w-75">
              <img
                src="../assets/img/bg/輪播圖片3.svg"
                class="d-block w-100"
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
      <div class="treeLeft">
        <img src="../assets/img/bg/左樹枝.svg" alt="" class="" />
      </div>
      <div class="treeRight">
        <img src="../assets/img/bg/右樹支.svg" alt="" class="" />
      </div>
    </section>
    <section class="box2">
      <p class="fs-36 text-center text-white fw-bold pt-5">8年級生最新商品</p>
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
      <Phone_productCard />
    </section>
  </div>
</template>

<style scoped>
.treeLeft {
  position: relative;
  bottom: 0px;
  left: 0px;
}
.treeRight {
  position: relative;
  top: -548px;
  right: -1020px;
}
.phone {
  display: none;
}
.box1 {
  /* position: relative; */
  margin: 0 auto;
  width: 1440px;
  height: 825px;
  background-image: url(../assets/img/bg/center-bg.svg);
  background-repeat: no-repeat;
}
.box2 {
  background-color: var(--green-color1);
  width: 1440px;
  height: 1300px;
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
