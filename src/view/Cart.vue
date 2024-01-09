<script setup></script>

<template>
  <div class="box1"></div>

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
        <span class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault"> </label>
        </span>
      </div>
      <div>1</div>
      <div>$500</div>
      <div><i class="fas fa-trash fa-2x"></i></div>
    </div>

    <div class="shopping-card pt-40">
      <div>
        <img src="../assets/img/bg/checkList/2.svg" alt="" />
        <div>鋼彈模型RG</div>
        <span class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault"> </label>
        </span>
      </div>
      <div>1</div>
      <div>$500</div>
      <div><i class="fas fa-trash fa-2x"></i></div>
    </div>
    <div class="d-flex justify-content-center">
      <hr />
    </div>
  </section>

  <section class="section4">
    <div class="bottom">
      <div>全部刪除</div>
      <div>商品數量:2</div>
      <div>總計$1000</div>
    </div>
  </section>

  <section class="section6 pt-60 mb-40">
    <router-link to="CheckList1/" class="text-decoration-none">
      <div class="all-button">
        <button class="">結帳去</button>
      </div>
    </router-link>
  </section>
</template>

<style scoped lang="scss">
.section6 {
  .all-button {
    display: flex;
    justify-content: end;
    margin-right: 350px;
    > button:nth-child(1) {
      background-color: var(--orange-color3);
      color: #fff;
      padding: 15px 40px;
      margin-right: 25px;
      border-radius: 10px;
      border: 0px solid;
      font-weight: bold;
      &:hover {
        background-color: var(--orange-color1);
        color: #fff;
      }
    }
  }
}
.section4 {
  .bottom {
    font-weight: bold;
    display: flex;
    justify-content: center;
    > div:nth-child(1) {
      margin-right: 630px;
      color: var(--orange-color1);
      cursor: pointer;
    }

    > div:nth-child(2) {
      margin-right: -30px;
    }

    > div:nth-child(3) {
      margin-left: 250px;
      color: var(--orange-color1);
    }
  }
}
.section3 {
  .shopping-card {
    display: flex;
    align-items: center;
    justify-content: center;
    div:nth-child(1) {
      margin-right: 440px;
    }

    div:nth-child(2) {
      margin-right: 160px;
    }

    div:nth-child(3) {
      margin-left: 150px;
    }
    .form-check {
      width: 10px;
      height: 10px;
    }
    > div:nth-child(4) {
      margin-left: 10px;
      color: var(--green-color2);
      &:hover {
        color: var(--orange-color1);
        cursor: pointer;
      }
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
  padding-top: 120px;
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

.box1 {
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: var(--green-color2);
}
</style>
