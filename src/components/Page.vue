<script setup></script>

<template>
  <div class="section1">
    <ul>
      <li>
        <i class="fas fa-chevron-left"></i>
      </li>
      <li>上一頁</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>下一頁</li>
      <li>
        <i class="fas fa-chevron-right"></i>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.box1 .box1 ul li:hover {
  background-color: var(--orange-color3);
  border-radius: 5px;
  color: #fff;
}

.section1 {
  height: 200px;
  background-image: url(../assets/img/bg/product-area-bg.jpg);
  background-size: cover;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 60px;
    width: 1300px;
    height: 50px;
    background-color: #fff;
  }
  li {
    cursor: pointer;
    font-weight: bold;
    font-size: 24px;
    color: gray;
    padding: 10px 20px;
    &:hover {
      background-color: var(--orange-color3);
      border-radius: 5px;
      color: #fff;
    }
    &:active {
      background-color: var(--orange-color2);
      border-radius: 5px;
      color: #fff;
    }
  }
}
</style>
