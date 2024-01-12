<script setup></script>

<template>
  <section class="section1">
    <ul class="d-flex justify-content-center">
      <li>徽章戰士</li>
      <li>百獸戰隊</li>
      <li>彈珠人</li>
      <li>戰鬥陀螺</li>
      <li>數碼寶貝</li>
    </ul>
  </section>
</template>

<style scoped>
.section1 {
  height: 80px;
  width: 100%;
  background-color: var(--orange-color2);
  font-family: "Lemon";
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
