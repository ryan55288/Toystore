<script setup>
$(function () {
  $(".anchor").click(function () {
    $("html, template").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".anchor").fadeIn("fast");
    } else {
      $(".anchor").stop().fadeOut("fast");
    }
  });
});
</script>

<template>
  <div class="anchor text-center">
    <i class="fas fa-chevron-up fa-2x pt-10"></i>
    <div class="d-flex justify-content-center">
      <div class="img"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.anchor {
  position: absolute;
  cursor: pointer;
  position: fixed;
  border-radius: 100%;
  width: 120px;
  height: 120px;
  bottom: 13.5%;
  right: 1.5%;
  background-color: var(--orange-color2);
  box-shadow: rgba(0, 0, 0, 0.7) 0px 3px 8px;
}
.anchor:hover {
  background-color: var(--orange-color2);
}
.img {
  background-image: url(../assets/img/bg/馬力歐.svg);
  background-repeat: no-repeat;
  width: 60px;
  height: 60px;
  background-size: auto;
}
@media (max-width: 1200px) {
  .anchor {
    display: none;
  }
}
</style>
