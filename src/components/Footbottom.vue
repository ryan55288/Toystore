<script setup>
$(function () {
  $(".footerBottomLogo").click(function () {
    $("html, template").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".footerBottomLogo").fadeIn("fast");
    } else {
      $(".footerBottomLogo").stop().fadeOut("fast");
    }
  });
});
</script>

<template>
  <section class="section1 d-flex align-items-center justify-content-around">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 footerBottomLogo">
          <img src="../assets/img/logo&icon/logo.svg" alt="" />
        </div>
        <div class="col-lg-7">
          <p>關於jungle | 聯繫我們 | 會員條款 | 隱私權政策©Environmentally</p>
          <p>friendly management| 服務時段為每週一至五 09:00～18:00</p>
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
  width: 100%;
  height: 150px;
  background-color: var(--green-color2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  .footerBottomLogo {
    margin-right: 50px;
    width: 200px;
    &:hover {
      cursor: pointer;
      border: 3px rgba(255, 255, 255, 0.33) solid;
      border-radius: 20px;
    }
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
@media (max-width: 375px) {
  .section1 {
    height: 500px;
  }
}
</style>
