<script setup></script>

<template>
  <div class="box1">
    <div class="box3">
      <router-link to="/Center">
        <a href="">
          <div class="logoSET">
            <img src="../assets/img/logo&icon/logo.svg" alt="" />
          </div>
        </a>
      </router-link>
    </div>
    <div class="box4">
      <input type="text" />
      <button class="searchSet">
        <img src="../assets/img/logo&icon/search.svg" alt="" />
      </button>
    </div>
    <div class="box5">
      <ul class="d-flex">
        <li class="mr-3">
          <div class="dropdown">
            <button
              class="btn dropdown-toggle btn-sm text-white fw-bold fs-24"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              關於我們
            </button>
            <ul
              class="dropdown-menu dropdownClass"
              aria-labelledby="dropdownMenuButton1"
            >
              <a class="dropdown-item fw-bold text-white" href="#">最新消息</a>
              <a class="dropdown-item fw-bold text-white" href="#"
                >關於JUNGLE</a
              >
            </ul>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <button
              class="btn dropdown-toggle btn-sm text-white fw-bold fs-24"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              商品頁
            </button>
            <ul
              class="dropdown-menu dropdownClass"
              aria-labelledby="dropdownMenuButton1"
            >
              <router-link to="/Grade8">
                <a class="dropdown-item text-white fw-bold" href="#"
                  >8年級生玩具</a
                >
              </router-link>

              <a class="dropdown-item text-white fw-bold" href="#">新潮玩具</a>
            </ul>
          </div>
        </li>
        <li class="mt-2 pr-2">
          <a href="" class="text-white fw-bold">會員中心</a>
        </li>
        <li class="mt-2"><a href="" class="text-white fw-bold">註冊</a></li>
        <li class="mt-2">
          <a href="" class="text-white fw-bold">購物車</a>
        </li>
        <div class="mt-1 web-cart">
          <img src="../assets/img/logo&icon/cart.svg" class="w-50" alt="" />
        </div>
      </ul>
    </div>
    <!--------------------------phone -->
    <div class="phone">
      <div class="d-flex align-items-center pt-1 justify-content-around">
        <div class="dropdown dropdown-menu-start">
          <a
            class="btn"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src="../assets/img/logo&icon/moneybox.svg" alt="" />
          </a>
          <ul
            class="dropdown-menu dropdownSet"
            aria-labelledby="dropdownMenuLink"
          >
            <li>
              <a class="dropdown-item" href="#"
                >關於我們<i class="fas fa-sort-down"></i
              ></a>
            </li>
            <li>
              <a class="dropdown-item" href="#"
                >商品頁<i class="fas fa-sort-down"></i
              ></a>
            </li>
            <li><a class="dropdown-item" href="#">會員中心</a></li>
            <li><a class="dropdown-item" href="#">註冊</a></li>
            <li><a class="dropdown-item" href="#">購物車</a></li>
          </ul>
        </div>
        <div class="phone-logo">
          <a href=""><img src="../assets/img/logo&icon/logo2.svg" alt="" /></a>
        </div>
        <div class="phone-cart">
          <a href=""><img src="../assets/img/logo&icon/cart.svg" alt="" /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.phone {
  display: none;
}
.dropdownClass {
  background: rgba(172, 168, 168, 0.5);
  border-radius: 10px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background: rgba(255, 255, 255, 0.33);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.1px);
  -webkit-backdrop-filter: blur(4.1px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: fixed;
  z-index: 2;
}
.box1 input {
  width: 375px;
  height: 35px;
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
}

.searchSet {
  border: 0px;
  border-radius: 5px;
  background-color: var(--orange-color1);
  position: relative;
  top: 6px;
  left: -41px;
}

.box1 ul li a {
  text-decoration: none;
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
