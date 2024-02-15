<script setup></script>

<template>
  <section class="section1 d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 footerBottomLogo">
          <img src="../assets/img/logo&icon/logo.svg" alt="" />
        </div>
        <div class="col-lg-7">
          <p>關於jungle | 聯繫我們 | 會員條款 | 隱私權政策©Environmentally</p>
          <p>客服服務時段為每週一至五 09:00～18:00</p>
        </div>
        <div class="col-lg-2">
          <ul class="d-flex">
            <li>
              <img src="../assets/img/logo&icon/footer/fb.svg" alt="" />
            </li>
            <li>
              <img src="../assets/img/logo&icon/footer/ig.svg" alt="" />
            </li>
            <li>
              <img src="../assets/img/logo&icon/footer/line.svg" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section1 {
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 150px;
  background-color: var(--green-color2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  .footerBottomLogo {
    margin-right: 50px;
    width: 200px;
  }

  ul {
    margin-top: 20px;
  }
  li {
    margin-right: 10px;
  }
  p {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 24px;
    color: #fff;
  }
}
@media (max-width: 768px) {
  .section1 {
    height: 250px;
    width: 100%;
  }
  p:nth-child(1) {
    display: none;
  }
}
@media (max-width: 375px) {
  .section1 {
    width: 100%;
    height: 250px;
  }
  p:nth-child(1) {
    display: none;
  }
}
</style>
