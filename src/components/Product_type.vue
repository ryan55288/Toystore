<script setup></script>

<template>
  <section class="section1">
    <ul class="d-flex justify-content-center">
      <li class="mr-20">
        <div class="dropdown">
          <button
            class="btn bg-orange3 dropdown-toggle rounded-pill text-white fs-24 fw-bold"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            性別
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item text-center" href="#">男生</a></li>
            <li><a class="dropdown-item text-center" href="#">女生</a></li>
          </ul>
        </div>
      </li>
      <li class="product-type">徽章戰士</li>
      <li class="product-type">百獸戰隊</li>
      <li class="product-type">彈珠人</li>
      <li class="product-type">戰鬥陀螺</li>
      <li class="product-type">數碼寶貝</li>
    </ul>
  </section>
</template>

<style scoped>
.dropdown button {
  width: 170px;
  height: 50px;
}
.section1 {
  height: 80px;
  width: 100%;
  background-color: var(--orange-color2);
}
.product-type {
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
}
.product-type:hover {
  background-color: var(--orange-color1);
  color: var(--orange-color2);
}
.product-type:active {
  background-color: var(--orange-color2);
  color: var(--orange-color3);
}
</style>
