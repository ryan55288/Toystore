<script setup></script>

<template>
  <div class="box1">
    <div class="section3">
      <router-link to="/Center">
        <a href="">
          <div class="pb-20">
            <img src="../assets/img/logo&icon/logo.svg" alt="" />
          </div>
        </a>
      </router-link>
    </div>

    <div class="section4">
      <input type="text" />
      <button class="searchSet">
        <img src="../assets/img/logo&icon/search.svg" alt="" />
      </button>
    </div>

    <div class="section5">
      <ul class="d-flex">
        <li class="mr-3">
          <div class="dropdown">
            <div
              class="btn dropdown-toggle btn-sm text-white fw-bold mr-20 fs-24"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              關於我們
            </div>
            <li
              class="dropdown-menu dropdownClass"
              aria-labelledby="dropdownMenuButton1"
            >
              <router-link to="/News"
                ><a class="dropdown-item fw-bold text-white" href="#"
                  >最新消息</a
                >
              </router-link>

              <router-link to="/AboutJungle">
                <a class="dropdown-item fw-bold text-white" href="#"
                  >關於JUNGLE</a
                >
              </router-link>
            </li>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <a
              class="btn dropdown-toggle btn-sm text-white fw-bold mr-20"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              商品頁
            </a>
            <li
              class="dropdown-menu dropdownClass"
              aria-labelledby="dropdownMenuButton1"
            >
              <router-link to="/Grade8">
                <a class="dropdown-item text-white fw-bold" href="#"
                  >8年級生玩具</a
                >
              </router-link>
              <router-link to="/Newtoy"
                ><a class="dropdown-item text-white fw-bold" href="#"
                  >新潮玩具</a
                ></router-link
              >
            </li>
          </div>
        </li>

        <li class="section1">
          <div class="dropdown">
            <a
              class="btn dropdown-toggle btn-sm text-white fw-bold mr-20"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              會員中心
            </a>
            <li
              class="dropdown-menu dropdownClass"
              aria-labelledby="dropdownMenuButton1"
            >
              <router-link to="/MemberLogin">
                <a href="#" class="dropdown-item text-white fw-bold"
                  >會員登入</a
                >
              </router-link>

              <router-link to="/MemberSign">
                <a href="#" class="dropdown-item text-white fw-bold"
                  >會員註冊</a
                >
              </router-link>
              <router-link to="/UserPage">
                <a href="#" class="dropdown-item text-white fw-bold"
                  >會員頁面</a
                >
              </router-link>
            </li>
          </div>
        </li>

        <li class="section2">
          <div class="dropdown">
            <div class="d-flex"></div>
            <a
              class="btn btn-sm text-white fw-bold cart-img mr-20"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              購物車
              <span><img src="../assets/img/logo&icon/cart.svg" alt="" /></span>
            </a>
            <li
              class="dropdown-menu dropdownClass"
              aria-labelledby="dropdownMenuButton1"
            >
              <table class="table table-striped table-hover table-size">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">商品</th>
                    <th scope="col">數量</th>
                    <th scope="col">價格</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <a
                        href="#"
                        class="del"
                        data-target="#del"
                        data-toggle="modal"
                        data-title="超好吃拉麵"
                      >
                        <i class="far fa-trash-alt fa-1x"></i>
                      </a>
                    </th>
                    <td>自由鋼彈</td>
                    <td scope="row">1</td>
                    <td class="text-right">$500</td>
                  </tr>
                  <th colspan="4">
                    <router-link to="/Cart">
                      <button class="checkout mt-20">結帳去</button>
                    </router-link>
                  </th>
                </tbody>
              </table>
            </li>
          </div>
        </li>
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
            <li><a class="dropdown-item" href="#">會員登入</a></li>
            <li><a class="dropdown-item" href="#">會員註冊</a></li>
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
.dropdown span img {
  width: 20px;
  height: 20px;
}
.section2 {
  .checkout {
    background-color: var(--orange-color3);
    font-size: 18px;
    font-weight: bolder;
    color: #fff;
    border: 0px solid;
    border-radius: 10px;
    padding: 10px 110px;
    &:hover {
      background-color: var(--orange-color1);
      color: #fff;
    }
    .dropdownClass {
      background: rgba(184, 187, 184, 0.7);
      border-radius: 10px;
      backdrop-filter: blur(4.1px);
      -webkit-backdrop-filter: blur(4.1px);
    }
  }
  .thead-dark {
    color: #fff;
    font-weight: bold;
  }
  tbody {
    th,
    td {
      color: #fff;
      font-weight: bold;
    }
    i {
      color: #fff;
      &:hover {
        color: var(--orange-color1);
      }
    }
  }
  .table-size {
    width: 300px;
  }
}

.phone {
  display: none;
}

.section5 {
  ul a {
    font-size: 24px;
    font-family: "Lemon";
  }
  /* ul li {
    padding-left: 35px;
  } */
  .dropdownClass {
    background: rgba(184, 187, 184, 0.7);
    border-radius: 10px;
    backdrop-filter: blur(4.1px);
    -webkit-backdrop-filter: blur(4.1px);
  }
}

.section3 a {
  margin-left: 80px;
}

.section4 {
  input {
    position: relative;
    margin-left: 40px;
    border: 1px gray solid;
  }
  .searchSet {
    position: relative;
    top: 5px;
    right: 40px;
    border: 0px;
    border-radius: 5px;
    background-color: var(--orange-color3);
    &:active {
      background-color: var(--orange-color1);
    }
  }
}

.box1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.33);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.1px);
  -webkit-backdrop-filter: blur(4.1px);
  position: fixed;
  z-index: 2;
  input {
    width: 375px;
    height: 35px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
  ul li a {
    text-decoration: none;
  }
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
  .section3 {
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
