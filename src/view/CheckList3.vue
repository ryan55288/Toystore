<script setup></script>

<template>
  <div class="box1"></div>
  <section class="section1">
    <div class="container">
      <ul class="row d-flex justify-content-center align-items-center">
        <li class="col-md-4">1.訂單資料</li>
        <li class="col-md-4">2.付款方式</li>
        <li class="col-md-4">3.完成訂單</li>
      </ul>
    </div>
  </section>

  <section class="section2">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="d-flex justify-content-center pt-10">
            <img src="../assets/img/bg/checkList/finish.svg" alt="" />
          </div>
          <div class="d-flex justify-content-center">
            <div class="fs-64 fw-bold">恭喜您!完成訂單!</div>
          </div>
          <div class="text-center mt-3">
            <router-link to="/UserPage/HistoryOrder">
              <button class="btn btn-primary">前往查看我的訂單</button>
            </router-link>
          </div>
          <div class="d-flex justify-content-center pt-20">
            <div class="fs-36 fw-bold">謝謝光臨，如有問題請聯絡客服專員</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section6">
    <div class="all-button">
      <router-link to="/Center" class="text-decoration-none text-white">
        <button class="btn">回首頁</button>
      </router-link>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section2 {
  padding-top: 75px;
  .col-md-12 {
    width: 1160px;
    height: 450px;
    background-color: var(--orange-color2);
    border-radius: 10px;
    color: var(--green-color1);
    img {
      height: 250px;
      width: 200px;
    }
  }
}
.section6 {
  padding-top: 50px;
  height: 195px;
  .all-button {
    display: flex;
    justify-content: center;
    .btn {
      font-weight: bold;
      background-color: var(--orange-color3);
      color: #fff;
      padding: 15px 40px;
      margin-right: 25px;
      border-radius: 10px;
      border: 0px solid;
      &:hover {
        background-color: var(--orange-color4);
      }
    }
  }
}

.section1 {
  padding-top: 80px;
  height: 200px;
  ul {
    li {
      padding-top: 25px;
      text-align: center;
      width: 375px;
      height: 70px;
      border-radius: 100px;
      font-weight: bold;
      margin: 40px 20px;
      &:nth-child(1) {
        background: var(--orange-color2);
        color: #000;
      }

      &:nth-child(2) {
        background: var(--orange-color2);
        color: #000;
      }

      &:nth-child(3) {
        background-color: var(--orange-color3);
        color: #fff;
      }
    }
  }
}

.box1 {
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: var(--green-color2);
}
</style>
