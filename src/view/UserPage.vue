<script setup></script>

<template>
  <div class="box1"></div>
  <section class="d-flex justify-content-center pt-120 section1">
    <div class="list-group-all">
      <div class="d-flex justify-content-center pt-80">
        <img
          src="../assets/img/logo&icon/userPage/userHead.svg"
          alt=""
          class="userHead"
        />
      </div>
      <div class="list-group pt-60">
        <router-link to="/UserPage/UserInfo">
          <a
            class="list-group-item bg-green list-group-item-action"
            aria-current="true"
            data-toggle="list"
          >
            <div
              class="d-flex justify-content-center align-items-center fs-24 text-white fw-bold"
            >
              <img src="../assets/img/logo&icon/userPage/user.svg" alt="" />
              <h3>用戶資訊</h3>
            </div>
          </a>
        </router-link>
        <router-link to="/UserPage/MyLove">
          <a
            class="list-group-item bg-green list-group-item-action"
            aria-current="true"
            data-toggle="list"
          >
            <div
              class="d-flex justify-content-center align-items-center fs-24 text-white fw-bold"
            >
              <img src="../assets/img/logo&icon/userPage/love.svg" alt="" />
              <h3>我的最愛</h3>
            </div>
          </a>
        </router-link>
        <router-link to="/UserPage/HistoryOrder">
          <a
            class="list-group-item bg-green list-group-item-action"
            aria-current="true"
            data-toggle="list"
          >
            <div
              class="d-flex justify-content-center align-items-center fs-24 text-white fw-bold"
            >
              <img src="../assets/img/logo&icon/userPage/time.svg" alt="" />
              <h3>歷史訂單</h3>
            </div>
          </a>
        </router-link>
      </div>
    </div>
    <div class="page-content">
      <router-view></router-view>
    </div>
  </section>
</template>

<style scoped lang="scss">
.box1 {
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: var(--green-color2);
}
//
.section1 {
  .list-group-all {
    margin-bottom: 60px;
    width: 300px;
    height: 700px;
    background-color: var(--green-color2);
    border-radius: 20px 0px 0px 20px;
    .userHead {
      background-color: #fff;
      width: 180px;
      height: 180px;
      border-radius: 100px;
    }
    h3 {
      margin-left: 10px;
    }
    .list-group .bg-green {
      background-color: var(--green-color2);
      div {
        border-radius: 10px;
        &:hover {
          background-color: rgba(223, 222, 222, 0.5);
        }
      }
    }
  }
  .page-content {
    width: 800px;
    max-height: 700px;
    overflow-y: auto;
    background-color: var(--orange-color2);
    border-radius: 0px 20px 20px 0px;
  }
}
</style>
