<script setup></script>

<template>
  <section class="section1">
    <ul class="d-flex justify-content-center">
      <li>鋼彈模型</li>
      <li>模型車</li>
      <li>LEGO</li>
      <li>動漫模型</li>
      <li>漫威</li>
      <li>一番賞區</li>
    </ul>
  </section>
</template>

<style scoped>
.section1 {
  height: 90px;
  background-color: var(--orange-color2);
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 50px;
    background-color: var(--orange-color3);
    color: #fff;
    font-weight: bold;
    font-size: 24px;
    border-radius: 60px;
    margin-right: 20px;
    font-family: "Lemon";
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    cursor: pointer;
    &:hover {
      background-color: var(--orange-color1);
      color: var(--orange-color2);
    }
    &:active {
      background-color: var(--orange-color2);
      color: var(--orange-color3);
    }
  }
}
</style>
