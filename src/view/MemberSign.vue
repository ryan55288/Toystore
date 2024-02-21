<template>
  <div class="box1"></div>
  <div class="d-flex justify-content-center">
    <div class="bg-1 d-flex justify-content-center">
      <section class="section1 animate__animated animate__pulse">
        <div class="text-center fs-36 fw-bold text-green pt-40">會員註冊</div>
        <div class="d-flex justify-content-center">
          <form class="formSet">
            <div class="mb-3 pt-20">
              <label for="account" class="form-label">帳號</label>
              <input
                type="text"
                class="form-control"
                id="account"
                placeholder="請輸入帳號"
                v-model="form.account"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">密碼</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="請輸入密碼"
                v-model="form.password"
              />
            </div>
            <div class="mb-3">
              <label for="passwordCheck" class="form-label">確認密碼</label>
              <input
                type="password"
                class="form-control"
                id="passwordCheck"
                placeholder="請再次輸入密碼"
                v-model="form.passwordCheck"
              />
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">姓名</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="請輸入姓名"
                v-model="form.name"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label"> Email </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="請輸入Email"
                v-model="form.email"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">性別</label>
              <div class="form-check">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    name="sex"
                    type="radio"
                    id="ryanGay"
                    :value="'男'"
                    v-model="form.sex"
                  />
                  <label class="form-check-label fw-bold" for="ryanGay">
                    男
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    name="sex"
                    type="radio"
                    id="dannyGay"
                    :value="'女'"
                    v-model="form.sex"
                  />
                  <label class="form-check-label fw-bold" for="dannyGay">
                    女
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              class="submitBtn btnSet fs-24 fw-bold"
              @click.prevent="register"
            >
              會員註冊
            </button>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useRegisterStore } from '@/store/register'

const router = useRouter()
const route = useRoute()
const { addRegisterList, checkLogin } = useRegisterStore()
const form = reactive({
  account: "",
  password: "",
  passwordCheck: "",
  name: "",
  email: "",
  sex: "",
});

const register = () => {
  addRegisterList({
    account: form.account,
    password: form.password,
    name: form.name,
    email: form.email,
    sex: form.sex
  })
  successAlert('註冊成功')
  checkLogin({
    account: form.account,
    password: form.password
  })
  if (route.query.checkout) {
    router.push('/Cart')
  }
  else {
    router.push('/UserPage/UserInfo')
  }
}
</script>

<style lang="scss" scoped>
.section1 {
  border-radius: 10px;
  width: 600px;
  height: 680px;
  background-color: #fff;
  .formSet {
    width: 450px;
    padding-top: 10px;
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
      position: absolute;
      bottom: 50px;
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
  padding-top: 150px;
  background-image: url(../assets/img/bg/member/member-bg.svg);
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
.valid-danger {
  border: 2px solid red;
}
</style>
