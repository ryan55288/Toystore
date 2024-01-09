<script setup></script>

<template>
  <!-- <section class="d-flex justify-content-center pt-120">
    <div class="list-group-all">
      <di v class="d-flex justify-content-center pt-80">
        <img
          src="../assets/img/logo&icon/userPage/userHead.svg"
          alt=""
          class="userHead"
        />
      </di>
      <div class="list-group pt-60">
        <a
          href="#pane-1"
          class="list-group-item bg-green list-group-item-action list-group-item-success"
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
        <a
          href="#pane-2"
          class="list-group-item bg-green list-group-item-action list-group-item-success"
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
        <a
          href="#pane-3"
          class="list-group-item bg-green list-group-item-action list-group-item-success"
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
      </div>
    </div>
    <div class="tab-content">
      <div class="tab-pane active" id="pane-1">
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </div>
      <div class="tab-pane active" id="pane-2">
        <div>456</div>
        <div>456</div>
        <div>456</div>
      </div>
      <div class="tab-pane active" id="pane-3">
        <div>789</div>
        <div>789</div>
        <div>789</div>
        <div>789</div>
      </div>
    </div>
  </section> -->
  <section class="d-flex justify-content-center pt-120">
    <div class="list-group-all">
      <div class="d-flex justify-content-center pt-80">
        <img
          src="../assets/img/logo&icon/userPage/userHead.svg"
          alt=""
          class="userHead"
        />
      </div>
      <div class="list-group pt-60">
        <a
          href="#pane-1"
          class="list-group-item bg-green list-group-item-action list-group-item-success"
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
        <a
          href="#pane-2"
          class="list-group-item bg-green list-group-item-action list-group-item-success"
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
        <a
          href="#pane-3"
          class="list-group-item bg-green list-group-item-action list-group-item-success"
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
      </div>
    </div>
    <div class="tab-content"></div>
  </section>
</template>

<style scoped lang="scss">
.list-group h3 {
  margin-left: 10px;
}
.bg-green {
  background-color: var(--green-color2);
}
.userHead {
  background-color: #fff;
  width: 180px;
  height: 180px;
  border-radius: 100px;
}
.list-group-all {
  width: 300px;
  height: 700px;
  background-color: var(--green-color2);
  border-radius: 20px 0px 0px 20px;
}
.tab-content {
  width: 800px;
  height: 700px;
  background-color: var(--orange-color2);
  border-radius: 0px 20px 20px 0px;
}
</style>
