<template>
  <div class="box1"></div>
  <div class="d-flex justify-content-center">
    <div class="bg-1 d-flex justify-content-center pt-120">
      <section class="section1 animate__animated animate__pulse">
        <div class="text-center fs-36 fw-bold text-green pt-40">會員註冊</div>
        <div class="d-flex justify-content-center">
          <form class="formSet">
            <div class="pt-20">
              <label for="exampleInputEmail1" class="form-label">姓名</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="請輸入姓名"
                autocomplete="on"
              />
            </div>
            <div class="mb-3 pt-20">
              <label for="exampleInputPassword2" class="form-label"
                >Email</label
              >
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword2"
                placeholder="請輸入Email"
                autocomplete="on"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword3" class="form-label">帳號</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword3"
                placeholder="請輸入帳號"
                autocomplete="on"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword4" class="form-label">密碼</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword4"
                placeholder="請輸入密碼"
                autocomplete="on"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword5" class="form-label">載具</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword5"
                placeholder="請輸入載具"
                autocomplete="on"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">性別</label>
              <div class="form-check">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                    autocomplete="on"
                  />
                  <label class="form-check-label" for="inlineCheckbox1"
                    >男</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                    autocomplete="on"
                  />
                  <label class="form-check-label" for="inlineCheckbox2"
                    >女</label
                  >
                </div>
              </div>
            </div>
            <button
              type="submit"
              class="submitBtn btnSet fs-24 fw-bold"
              @click="showSweetAlert"
            >
              會員註冊
            </button>
            <router-link to="/MemberLogin">
              <button type="submit" class="loginBtn btnSet fs-24 fw-bold mt-20">
                會員登入
              </button>
            </router-link>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// import Swal from "sweetalert2";
export default {
  methods: {
    showSweetAlert() {
      this.$swal("Good job!", "會員註冊成功", "success");
    },
  },
};
</script>

<style lang="scss" scoped>
.section1 {
  border-radius: 10px;
  width: 600px;
  height: 720px;
  background-color: #fff;
  .formSet {
    width: 450px;
    .form-label {
      font-style: 24px;
      font-weight: bold;
      color: var(--green-color1);
    }
    .btnSet {
      width: 440px;
      height: 60px;
      border-radius: 60px;
      color: #fff;
      border: 0px;
    }
    .loginBtn {
      background-color: var(--green-color2);
      &:hover {
        background-color: var(--green-color1);
      }
      &:active {
        background-color: var(--orange-color2);
      }
    }
    .submitBtn {
      background-color: var(--orange-color3);
      &:hover {
        background-color: var(--orange-color4);
      }
      &:active {
        background-color: var(--orange-color2);
      }
    }
  }
}

.bg-1 {
  background-image: url(../assets/img/bg/Member/member-bg.svg);
  width: 100%;
  height: 930px;
  background-repeat: no-repeat;
}

.phone {
  display: none;
}
.dropdownClass {
  background: rgba(172, 168, 168, 0.5);
  border-radius: 10px;
  backdrop-filter: blur(4.1px);
  -webkit-backdrop-filter: blur(4.1px);
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
  .phone {
    display: block;
  }
  .phone-cart {
    margin-left: 30px;
  }
  .phone-logo {
    margin-left: 30px;
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
