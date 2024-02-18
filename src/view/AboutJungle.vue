<script setup></script>

<template>
  <section class="box1"></section>
  <section class="section2">
    <div class="about-card">
      <div class="d-flex justify-content-center pt-140">
        <div><img src="../assets/img/bg/about/top.svg" alt="" /></div>
        <div class="ml-30">
          <h4>關於Jungle</h4>
          <p>
            老闆身為一位8年級生，深深愛戴著80年代的經典動漫玩具，是個真正的「玩具探險家」。Jungle的成立目的在於提供一個平台給在忙碌中的生活中，仍然熱愛線上購物的探險家們。我們以高標準的購物體驗為己任，注重商品品質、正版標籤，並提供清晰的商品介紹和高品質的商品圖片。
            對於Jungle而言，購物不僅僅是一個交易行為，更是一場尋寶探險。
          </p>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center">
      <hr />
    </div>
    <div class="d-flex justify-content-around">
      <div class="info-card text-center">
        <h3>
          聯絡我們<br />
          Jungle
        </h3>
        <div class="info-Contant ml-70">
          <div class="d-flex mt-30">
            <img src="../assets/img/logo&icon/aboutWe/ep_message.svg" alt="" />
            <div class="d-flex align-items-center ml-30">
              <h4>Jungle@gmail.com</h4>
            </div>
          </div>
          <div class="d-flex mt-30">
            <img
              src="../assets/img/logo&icon/aboutWe/mingcute_time-fill.svg"
              alt=""
            />
            <div class="d-flex align-items-center ml-30">
              <h4>9:00-21:00</h4>
            </div>
          </div>
          <div class="d-flex mt-30">
            <img
              src="../assets/img/logo&icon/aboutWe/ic_baseline-phone-iphone.svg"
              alt=""
            />
            <div class="d-flex align-items-center ml-30">
              <h4>0903-xxx-666</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="map mt-60">
        <img src="../assets/img/bg/about/map.svg" alt="" />
      </div>
    </div>
  </section>
</template>
<style scoped>
.info-Contant h4 {
  font-size: 24px;
  color: var(--green-color1);
}
.info-card img {
  width: 40px;
  height: 40px;
}
.info-card h3 {
  font-size: 36px;
  font-weight: bold;
  font-family: "Lemon";
  padding-top: 35px;
  color: var(--green-color1);
}

.info-card {
  margin-left: 160px;
  margin-top: 90px;
  background-color: var(--orange-color2);
  width: 400px;
  height: 400px;
  border-radius: 10px;
}
.about-card p {
  margin-top: 20px;
  font-family: "Lemon";
  font-size: 24px;
  width: 770px;
  line-height: 35px;
}

.about-card h4 {
  font-family: "Lemon";
  font-size: 36px;
}
.section2 {
  height: 1300px;
}
.box1 {
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: var(--green-color2);
}
.section2 hr {
  margin-top: 40px;
  width: 1700px;
  border: 3px gray solid;
  border-radius: 5px;
}
</style>
