<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <router-link to="/Center">
        <a class="navbar-brand ml-200" href="#">
          <img src="../assets/img/logo&icon/logo.svg" alt=""
        /></a>
      </router-link>
      <!-- 手機版漢堡選單 -->
      <!-- <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> -->
      <form class="d-flex ml-40">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="keyword"
        />
        <button @click.prevent="searchKeyword"></button>
      </form>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              關於我們
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link to="News">
                  <span class="dropdown-item">最新消息</span>
                </router-link>
              </li>
              <li>
                <router-link to="/AboutJungle">
                  <span class="dropdown-item">關於JUNGLE</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              商品區
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link to="/Grade8">
                  <span class="dropdown-item">8年級生玩具</span>
                </router-link>
              </li>
              <li>
                <router-link to="/Newtoy">
                  <span class="dropdown-item">新潮玩具</span>
                </router-link>
              </li>
              <li>
                <router-link to="/OneReward">
                  <span class="dropdown-item">一番賞</span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              會員中心
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link to="/MemberSign">
                  <span class="dropdown-item">會員註冊</span>
                </router-link>
              </li>
              <li>
                <router-link to="/MemberLogin">
                  <span class="dropdown-item">會員登入</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown Cart">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              購物車
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <template v-if="getCartList.length">
                <li>
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
                      <tr v-for="product in getCartList">
                        <th @click.prevent="removeProductHandle(product.id)">
                          <a href="#" class="del" data-target="#del">
                            <i class="far fa-trash-alt fa-1x"></i>
                          </a>
                        </th>
                        <td>{{ product.name }}</td>
                        <td scope="row">{{ product.qty }}</td>
                        <td class="text-right">${{ product.price }}</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <router-link to="/Cart">
                  <button class="checkout mt-20">
                    {{ `共${getCartList.length}件總金額 $${getCartAmountTotal}` }}
                    <br>
                    結帳去
                  </button>
                </router-link>
              </template>
              <p v-else class="text-white">目前還沒有任何商品!</p>
            </ul>
          </li>
          <li class="d-flex align-items-center position-relative">
            <!-- <img src="../assets/img/logo&icon/cart.svg" alt="" /> -->
            <div class="cart-amount position-absolute text-center mt-2">
              {{ getCartList.length }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/store/cart'
import { useCategory } from '@/composables/category'
const { allCategory } = useCategory()

const router = useRouter()

const cartStore = useCartStore()
const { removeProduct } = cartStore
const { getCartList, getCartAmountTotal } = storeToRefs(cartStore)

const removeProductHandle = (productId) => {
  const payload = [productId]
  removeProduct(payload)
}

const keyword = ref('')
const keywordList = [...allCategory]
const searchKeyword = () => {
  if (keyword.value === '') return
  const regex = new RegExp(keyword.value, 'i')
  const result = keywordList.find(item => regex.test(item.title));
  if (result) {
    router.push({
      path: result.path,
      query: {
        keyword: result.title,
        id: result.id,
        section: result.section
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.33);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.1px);
  -webkit-backdrop-filter: blur(4.1px);
  position: fixed;
  z-index: 2;
  input {
    width: 375px;
    margin-left: 40px;
    border: 1px gray solid;
  }
  form button {
    margin-right: 80px;
    position: relative;
    top: 3px;
    width: 30px;
    height: 30px;
    right: 42px;
    border: 0px;
    border-radius: 5px;
    background-image: url(../assets/img/logo&icon/search.svg);
    background-repeat: no-repeat;
    background-color: var(--orange-color3);
    &:hover {
      background-color: var(--orange-color1);
    }
  }
  ul li {
    .cart-amount {
      padding-top: 5px;
      top: -4px;
      right: 2px;
      background-color: var(--orange-color1);
      width: 28px;
      height: 28px;
      border-radius: 60px;
      color: #fff;
    }
  }
  ul li a {
    font-weight: bolder;
    font-family: "Lemon";
    font-size: 24px;
    color: #ffffff;
    margin-right: 25px;
    > a:nth-child(4) {
      margin-right: 0px;
    }
    margin-right: 25px;
    &::after {
      content: "";
      display: block;
      width: 0;
      height: 3px;
      background-color: #fff;
      border-right: 0px;
      border-left: 0px;
      border-top: 1px;
    }
    &:hover::after {
      width: 100%;
      transition: 0.3s;
    }
    span {
      font-weight: bold;
      color: #fff;
    }
  }
  .dropdown-menu {
    background-color: rgba(75, 73, 73, 0.5);
  }
  .dropdown-item {
    &:hover {
      background-color: rgba(223, 222, 222, 0.5);
    }
  }

  .Cart {
    ul li {
      height: 35px;
      height: 100%;
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
    .checkout {
      width: 100%;
      margin: auto;
      background-color: var(--orange-color3);
      font-size: 18px;
      font-weight: bolder;
      color: #fff;
      border: 0px solid;
      border-radius: 10px;
      padding: 10px;
      &:hover {
        background-color: var(--orange-color1);
        color: #fff;
      }
    }
  }
}
@media (max-width: 1440px) {
  input {
    display: none;
  }
  form button {
    display: none;
  }
  .navbar-collapse {
    margin-right: 30px;
  }
}
@media (max-width: 768) {
  .navbar-collapse {
    margin-right: 30px;
  }
}
</style>
