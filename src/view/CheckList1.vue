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

  <section class="section2 d-flex justify-content-center pt-40">
    <div class="header">
      <div>商品內容</div>
      <div>數量</div>
      <div>總計</div>
    </div>
  </section>

  <section class="section3 pt-40">
    <div class="shopping-card">
      <div>
        <img src="../assets/img/bg/checkList/1.svg" alt="" />
        <div>鋼彈模型RG</div>
      </div>

      <div>1</div>
      <div>$500</div>
    </div>
    <div class="shopping-card pt-40">
      <div>
        <img src="../assets/img/bg/checkList/2.svg" alt="" />
        <div>鋼彈模型RG</div>
      </div>
      <div>1</div>
      <div>$500</div>
    </div>
    <div class="d-flex justify-content-center">
      <hr />
    </div>
  </section>

  <section class="section4">
    <div class="bottom">
      <div>商品數量:2</div>
      <div class="text-orange">總計$1000</div>
    </div>
  </section>

  <section class="section5 pt-60">
    <div class="container">
      <form class="row g-3 d-flex">
        <div class="col-md-12">訂購人資訊</div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">姓名</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="請輸入姓名"
            autocomplete="current-password"
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">行動電話</label>
          <input
            type="password"
            class="form-control"
            id="請輸入行動電話"
            autocomplete="current-password"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">連絡住址</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="請輸入住址"
            autocomplete="current-password"
          />
        </div>
      </form>
    </div>
  </section>

  <section class="section6 pt-40 mb-40">
    <div class="all-button">
      <router-link to="/Cart" class="text-decoration-none text-white">
        <div><button class="btn1">取消</button></div></router-link
      >
      <router-link to="/CheckList2" class="text-decoration-none text-white">
        <div><button class="btn2">下一步</button></div></router-link
      >
    </div>
  </section>
</template>

<style scoped lang="scss">
.section6 {
  .all-button {
    display: flex;
    justify-content: center;
    .btn1 {
      font-weight: bold;
      background-color: var(--orange-color1);
      color: #fff;
      padding: 15px 40px;
      margin-right: 25px;
      border-radius: 10px;
      border: 0px solid;
      &:hover {
        background-color: var(--orange-color4);
      }
    }
    .btn2 {
      font-weight: bold;
      background-color: var(--orange-color3);
      color: #fff;
      padding: 15px 40px;
      margin-right: 10px;
      border-radius: 10px;
      border: 0px solid;
      &:hover {
        background-color: var(--orange-color4);
      }
    }
  }
}
.section5 {
  display: flex;
  justify-content: center;
  .container {
    width: 900px;
  }
  .col-md-12 {
    font-weight: bold;
  }
}
.section4 {
  .bottom {
    font-weight: bold;
    display: flex;
    justify-content: center;
    > div:nth-child(1) {
      margin-right: 440px;
    }

    > div:nth-child(2) {
      margin-right: 160px;
    }

    > div:nth-child(3) {
      margin-left: 150px;
      color: var(--orange-color1);
    }
  }
}
.section3 {
  .shopping-card {
    display: flex;
    align-items: center;
    justify-content: center;
    > div:nth-child(1) {
      margin-right: 440px;
    }

    > div:nth-child(2) {
      margin-right: 160px;
    }

    > div:nth-child(3) {
      margin-left: 150px;
    }
  }
  hr {
    margin-top: 40px;
    width: 1100px;
    border: 3px gray solid;
    border-radius: 5px;
  }
}
.section2 {
  .header {
    height: 50px;
    width: 1150px;
    background-color: var(--green-color2);
    border-radius: 10px;
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: bold;
    > div:nth-child(1) {
      padding-left: 50px;
    }

    > div:nth-child(2) {
      margin-left: 600px;
    }

    > div:nth-child(3) {
      margin-left: 320px;
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
        background: var(--orange-color3);
        color: #fff;
      }

      &:nth-child(2) {
        background-color: var(--orange-color2);
      }

      &:nth-child(3) {
        background-color: var(--orange-color2);
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
