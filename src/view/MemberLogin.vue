<script setup></script>

<template>
  <div class="box1"></div>
  <div class="d-flex justify-content-center">
    <div class="bg-1 d-flex justify-content-center pt-120">
      <section class="section3">
        <div class="text-center fs-36 fw-bold text-green pt-50">會員登入</div>
        <div class="d-flex justify-content-center">
          <form class="formSet">
            <div class="mb-3 mt-40">
              <label for="exampleInputPassword1" class="form-label"
                >帳號:</label
              >
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword"
                placeholder="請輸入帳號"
                autocomplete="on"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >密碼:</label
              >
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword2"
                placeholder="請輸入密碼"
                autocomplete="on"
              />
            </div>
            <div class="text-center fs-24 fw-bold pt-20 text-green">
              忘記密碼?
            </div>
            <button type="submit" class="loginBtn btnSet fs-24 fw-bold mt-20">
              登入
            </button>
            <div class="text-center fs-24 fw-bold pt-20 text-green">
              還不是會員?
            </div>
            <router-link to="/MemberSign">
              <button
                type="submit"
                class="submitBtn btnSet fs-24 fw-bold mt-20"
              >
                會員註冊
              </button>
            </router-link>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.btnSet {
  width: 440px;
  height: 60px;
  border-radius: 60px;
  color: #fff;
  border: 0px;
}
.loginBtn {
  background-color: var(--green-color2);
}
.submitBtn {
  background-color: var(--orange-color3);
}
.form-label {
  font-style: 24px;
  font-weight: bold;
  color: var(--green-color1);
}
.formSet {
  width: 450px;
}
.section3 {
  border-radius: 10px;
  width: 600px;
  height: 630px;
  background-color: #fff;
}
.bg-1 {
  background-image: url(../assets/img/bg/Member/member-bg.svg);
  width: 100%;
  height: 800px;
  background-repeat: no-repeat;
}

.phone {
  display: none;
}
.dropdownClass {
  background: rgba(172, 168, 168, 0.5);
  backdrop-filter: blur(4.1px);
  -webkit-backdrop-filter: blur(4.1px);
}

.box5 ul li a {
  font-size: 24px;
}
.box5 ul li {
  padding-left: 40px;
}
.box3 a {
  margin-left: 80px;
}
.box4 input {
  margin-left: 40px;
  border: 1px gray solid;
}
.box1 {
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: var(--green-color2);
}

@media (max-width: 375px) {
  .box1 {
    border-radius: 10px;
    width: 375px;
  }
  .web-cart {
    display: none;
  }
  .phone {
    display: block;
  }
  .phone-cart {
    margin-left: 30px;
  }
  .phone-logo {
    margin-left: 30px;
  }
  .box3 {
    display: none;
  }
  .box1 {
    background-color: var(--green-color2);
  }
  .box1 input,
  ul li,
  button {
    display: none;
  }
  .phone ul li {
    display: block;
  }
}
</style>
