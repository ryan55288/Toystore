<script setup>
$(function () {
  $(".footerHome").click(function () {
    $("html, template").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".footerHome").fadeIn("fast");
    } else {
      $(".footerHome").stop().fadeOut("fast");
    }
  });
});
</script>

<template>
  <section class="box d-flex align-items-center justify-content-around">
    <div class="footerHome">
      <img src="../assets/img/logo&icon/logo.svg" alt="" />
    </div>
    <div class="fs-24 text-white">
      關於jungle | 聯繫我們 | 會員條款 | 隱私權政策<br />©Environmentally
      friendly management| 服務時段為每週一至五 09:00～18:00
    </div>
    <ul class="d-flex m-5">
      <li class="mx-1">
        <img src="../assets/img/logo&icon/footer/fb.svg" alt="" />
      </li>
      <li class="mx-1">
        <img src="../assets/img/logo&icon/footer/ig.svg" alt="" />
      </li>
      <li class="mx-1">
        <img src="../assets/img/logo&icon/footer/line.svg" alt="" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
.box {
  width: 100%;
  height: 150px;
  background-color: var(--green-color2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.footerHome {
  cursor: pointer;
}
</style>
