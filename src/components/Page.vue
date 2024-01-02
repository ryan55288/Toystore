<script setup></script>

<template>
  <div class="section1">
    <div class="box1">
      <ul class="d-flex align-items-center justify-content-between">
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
  </div>
</template>

<style scoped>
.box1 ul li {
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 24px;
  color: gray;
}
.box1 ul li:hover {
  background-color: var(--orange-color3);
  border-radius: 5px;
  color: #fff;
}
.box1 ul li:active {
  background-color: var(--orange-color2);
  border-radius: 5px;
  color: #fff;
}
.box1 {
  display: flex;
  justify-content: center;
  background-color: #fff;
  border-radius: 60px;
  width: 1300px;
  height: 50px;
}
.section1 {
  height: 200px;
  width: 100%;
  background-color: var(--green-color1);
}
</style>
