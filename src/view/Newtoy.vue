<template>
  <div class="Anchor"><Anchor /></div>
  <section class="section0"></section>
  <section class="section2 d-flex">
    <div class="bg-1"></div>
    <div class="bg-3"></div>
    <div class="bg-2"></div>
    <div
      id="carouselExampleIndicators"
      class="carousel slide carouselAll"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner carouselImg">
        <div class="carousel-item active" data-bs-interval="1500">
          <img
            src="../assets/img/Product/newtoy/輪播圖片/egg1.svg"
            class="d-block"
            alt="..."
          />
        </div>
        <div class="carousel-item" data-bs-interval="1500">
          <img
            src="../assets/img/Product/newtoy/輪播圖片/egg2.svg"
            class="d-block"
            alt="..."
          />
        </div>
        <div class="carousel-item" data-bs-interval="1500">
          <img
            src="../assets/img/Product/newtoy/輪播圖片/egg3.svg"
            class="d-block"
            alt="..."
          />
        </div>
        <div class="carousel-item" data-bs-interval="1500">
          <img
            src="../assets/img/Product/newtoy/輪播圖片/egg4.svg"
            class="d-block"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>

  <section class="productType" id="newToy">
    <ul class="d-flex justify-content-center align-items-center h-100">
      <li
        v-for="cate in newToyCategory"
        :key="cate.id"
        @click="currentSelectCategory = cate"
      >
        {{ cate.title }}
      </li>
    </ul>
  </section>

  <section class="section3">
    <div
      class="text-white text-center fw-bold fs-36 pt-40 animate__animated animate__flipInX text-Lemon"
    >
      {{ currentSelectCategory.title }}
    </div>
    <div class="container">
      <div class="row">
        <div
          v-for="prod in formatPageProductList[pageIndex - 1]"
          :key="prod.id"
          class="col-md-6 col-lg-3 p-10"
        >
          <ProductCard :productDetail="prod" />
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center">
      <div class="page pt-40" v-show="totalPage > 1">
        <Page v-model:active-index="pageIndex" :totalPage="totalPage" />
      </div>
    </div>
  </section>

  <section class="section4" ref="section4">
    <div class="d-flex justify-content-center">
      <img
        src="../assets/img/bg/newToyPage/reel-bottom.svg"
        alt=""
        class="reel"
      />
    </div>
    <!-- 卷軸 -->
    <div class="d-flex justify-content-center">
      <div
        id="oneReward"
        class="reel-body mb-200 animate__animated"
        :class="{ animate__bounceInDown: true }"
      >
        <router-link to="OneReward/" class="text-decoration-none">
          <div class="d-flex justify-content-center pt-50">
            <div class="d-flex align-items-center bg-orange2">
              <img src="../assets/img/Product/newtoy/一番賞/IMG-3.svg" alt="" />
            </div>
            <div>
              <h3
                class="d-flex justify-content-center align-items-center bg-orange2"
              >
                <div class="fs-36 fw-bold">一番賞 獵人XX</div>
              </h3>
              <h4 class="d-flex justify-content-center align-items-center">
                <div class="fs-24 fw-bold text-white">
                  預定自2020年04月03日(星期五)起逐次發售
                </div>
              </h4>
            </div>
          </div>
        </router-link>

        <router-link to="OneReward/" class="text-decoration-none">
          <div class="d-flex justify-content-center pt-50">
            <div class="d-flex align-items-center bg-orange2">
              <img src="../assets/img/Product/newtoy/一番賞/IMG-1.svg" alt="" />
            </div>
            <div class="">
              <h3 class="d-flex justify-content-center align-items-center">
                <div class="fs-36 fw-bold">一番賞 七龍珠</div>
              </h3>
              <h4 class="d-flex justify-content-center align-items-center">
                <div class="fs-24 fw-bold text-white">
                  預定自2020年04月05日(星期五)起逐次發售
                </div>
              </h4>
            </div>
          </div>
        </router-link>

        <router-link to="OneReward/" class="text-decoration-none">
          <div class="d-flex justify-content-center pt-50">
            <div class="d-flex align-items-center bg-orange2">
              <img
                src="../assets/img/Product/newtoy/一番賞/IMG.svg"
                alt=""
                class=""
              />
            </div>
            <div>
              <h3 class="d-flex justify-content-center align-items-center">
                <div class="fs-36 fw-bold">一番賞 我的英雄學院</div>
              </h3>
              <h4 class="d-flex justify-content-center align-items-center">
                <div class="fs-24 fw-bold text-white">
                  預定自2020年04月03日(星期五)起逐次發售
                </div>
              </h4>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useCategory } from "@/composables/category";
const { newToyCategory, currentSelectCategory } = useCategory("newToy");

const productList = reactive([
  {
    id: 54,
    name: "鋼彈模型- 飛翼零式",
    stock: 1,
    price: 680,
    picture: new URL(
      "../assets/img/Product/newtoy/鋼彈模型/Rectangle 6.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 6,
  },
  {
    id: 55,
    name: "鋼彈模型- OO鋼彈",
    stock: 1,
    price: 820,
    picture: new URL(
      "../assets/img/Product/newtoy/鋼彈模型/IMG.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 6,
  },
  {
    id: 56,
    name: "RG 019 紅色異端",
    stock: 1,
    price: 680,
    picture: new URL(
      "../assets/img/Product/newtoy/鋼彈模型/IMG-1.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 6,
  },
  {
    id: 57,
    name: "鋼彈模型- 獨角獸鋼彈",
    stock: 1,
    price: 1040,
    picture: new URL(
      "../assets/img/Product/newtoy/鋼彈模型/IMG-2.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 6,
  },
  {
    id: 58,
    name: "鋼彈模型- 爆喪女妖",
    stock: 1,
    price: 1400,
    picture: new URL(
      "../assets/img/Product/newtoy/鋼彈模型/IMG-3.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 6,
  },
  {
    id: 59,
    name: "鋼彈模型-自由鋼彈",
    stock: 1,
    price: 699,
    picture: new URL(
      "../assets/img/Product/newtoy/鋼彈模型/IMG-4.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 6,
  },
  {
    id: 60,
    name: "鋼彈模型-RX-78-2",
    stock: 1,
    price: 680,
    picture: new URL(
      "../assets/img/Product/newtoy/鋼彈模型/IMG-5.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 6,
  },
  {
    id: 61,
    name: "鋼彈模型-命運鋼彈",
    stock: 1,
    price: 565,
    picture: new URL(
      "../assets/img/Product/newtoy/鋼彈模型/IMG-6.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 6,
  },
  {
    id: 9,
    name: "鋼彈模型-翔翼攻擊",
    stock: 12,
    price: 600,
    picture: new URL(
      "../assets/img/Product/newtoy/鋼彈模型/IMG-7.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 6,
  },
  {
    id: 62,
    name: "鋼彈模型-海牛",
    stock: 5,
    price: 945,
    picture: new URL(
      "../assets/img/Product/newtoy/鋼彈模型/Rectangle 6-1.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 6,
  },
  {
    id: 63,
    name: "鋼彈模型-逆襲的夏亞",
    stock: 5,
    price: 970,
    picture: new URL(
      "../assets/img/Product/newtoy/鋼彈模型/IMG-8.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 6,
  },
  {
    id: 64,
    name: "模型車-豐田AE86",
    stock: 12,
    price: 300,
    picture: new URL(
      "../assets/img/Product/newtoy/模型車系列/IMG.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 7,
  },
  {
    id: 65,
    name: "模型車- 特斯拉",
    stock: 5,
    price: 250,
    picture: new URL(
      "../assets/img/Product/newtoy/模型車系列/IMG-1.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 7,
  },
  {
    id: 66,
    name: "模型車-阿提斯",
    stock: 5,
    price: 335,
    picture: new URL(
      "../assets/img/Product/newtoy/模型車系列/IMG-2.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 7,
  },
  {
    id: 67,
    name: "模型車-HONDA 4",
    stock: 12,
    price: 1000,
    picture: new URL(
      "../assets/img/Product/newtoy/模型車系列/IMG-3.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 7,
  },
  {
    id: 68,
    name: "模型車- 馬自達RX7",
    stock: 3,
    price: 490,
    picture: new URL(
      "../assets/img/Product/newtoy/模型車系列/IMG-4.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 7,
  },
  {
    id: 69,
    name: "模型車-AMG 賓士",
    stock: 5,
    price: 188,
    picture: new URL(
      "../assets/img/Product/newtoy/模型車系列/IMG-5.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 7,
  },
  {
    id: 70,
    name: "模型車-模型悍馬車",
    stock: 8,
    price: 150,
    picture: new URL(
      "../assets/img/Product/newtoy/模型車系列/Rectangle 6.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 7,
  },
  {
    id: 71,
    name: "模型車 -保時捷",
    stock: 5,
    price: 260,
    picture: new URL(
      "../assets/img/Product/newtoy/模型車系列/IMG-6.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 7,
  },
  {
    id: 72,
    name: "模型車-焰之魔神",
    stock: 12,
    price: 650,
    picture: new URL(
      "../assets/img/Product/newtoy/模型車系列/IMG-7.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 7,
  },
  {
    id: 73,
    name: "模型車-合金跑車寶馬",
    stock: 5,
    price: 1000,
    picture: new URL(
      "../assets/img/Product/newtoy/模型車系列/IMG-8.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 7,
  },
  {
    id: 74,
    name: "LEGO-龍年限定",
    stock: 1,
    price: 450,
    picture: new URL(
      "../assets/img/Product/newtoy/LEGO/IMG.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 8,
  },
  {
    id: 75,
    name: "LEGO-中世紀古堡",
    stock: 1,
    price: 1300,
    picture: new URL(
      "../assets/img/Product/newtoy/LEGO/IMG-1.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 8,
  },
  {
    id: 10,
    name: "LEGO-冰忍的強化機械人",
    stock: 1,
    price: 299,
    picture: new URL(
      "../assets/img/Product/newtoy/LEGO/IMG-2.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 8,
  },
  {
    id: 76,
    name: "LEGO -阿光的鈦機械人",
    stock: 1,
    price: 2400,
    picture: new URL(
      "../assets/img/Product/newtoy/LEGO/IMG-3.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 8,
  },
  {
    id: 77,
    name: "LEGO-泰坦機器人",
    stock: 12,
    price: 770,
    picture: new URL(
      "../assets/img/Product/newtoy/LEGO/IMG-4.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 8,
  },
  {
    id: 78,
    name: "LEGO- 水晶國王",
    stock: 5,
    price: 1599,
    picture: new URL(
      "../assets/img/Product/newtoy/LEGO/IMG-5.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 8,
  },
  {
    id: 79,
    name: "LEGO- 機械人摩托飛車",
    stock: 5,
    price: 1465,
    picture: new URL(
      "../assets/img/Product/newtoy/LEGO/IMG-6.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 8,
  },
  {
    id: 80,
    name: "LEGO- 忍者小隊機械人",
    stock: 5,
    price: 2575,
    picture: new URL(
      "../assets/img/Product/newtoy/LEGO/IMG-7.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 8,
  },
  {
    id: 81,
    name: "漫威-漫威蜘蛛人",
    stock: 1,
    price: 319,
    picture: new URL(
      "../assets/img/Product/newtoy/漫威/IMG.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 9,
  },
  {
    id: 82,
    name: "漫威-美國隊長",
    stock: 1,
    price: 1300,
    picture: new URL(
      "../assets/img/Product/newtoy/漫威/IMG-1.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 9,
  },
  {
    id: 83,
    name: "漫威-死侍",
    stock: 1,
    price: 299,
    picture: new URL(
      "../assets/img/Product/newtoy/漫威/IMG-2.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 9,
  },
  {
    id: 84,
    name: "漫威 -鋼鐵人",
    stock: 1,
    price: 2400,
    picture: new URL(
      "../assets/img/Product/newtoy/漫威/IMG-3.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 9,
  },
  {
    id: 85,
    name: "漫威-金鋼狼",
    stock: 12,
    price: 770,
    picture: new URL(
      "../assets/img/Product/newtoy/漫威/IMG-4.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 9,
  },
  {
    id: 86,
    name: "漫威- 八爪博士",
    stock: 5,
    price: 1599,
    picture: new URL(
      "../assets/img/Product/newtoy/漫威/IMG-5.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 9,
  },
  {
    id: 87,
    name: "漫威- 雷神之鎚",
    stock: 5,
    price: 1349,
    picture: new URL(
      "../assets/img/Product/newtoy/漫威/IMG-6.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 9,
  },
  {
    id: 88,
    name: "漫威- 星爵",
    stock: 5,
    price: 775,
    picture: new URL(
      "../assets/img/Product/newtoy/漫威/IMG-7.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 9,
  },
  {
    id: 11,
    name: "洛克人-黑暗EXE",
    stock: 1,
    price: 1550,
    picture: new URL(
      "../assets/img/Product/newtoy/洛克人/IMG.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 10,
  },
  {
    id: 89,
    name: "洛克人- 第二裝甲",
    stock: 1,
    price: 1650,
    picture: new URL(
      "../assets/img/Product/newtoy/洛克人/IMG-1.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 10,
  },
  {
    id: 90,
    name: "洛克人-Premium",
    stock: 1,
    price: 3050,
    picture: new URL(
      "../assets/img/Product/newtoy/洛克人/IMG-2.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 10,
  },
  {
    id: 91,
    name: "洛克人 -第四裝甲",
    stock: 1,
    price: 1850,
    picture: new URL(
      "../assets/img/Product/newtoy/洛克人/IMG-3.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 10,
  },
  {
    id: 92,
    name: "洛克人-流星洛克人",
    stock: 12,
    price: 1849,
    picture: new URL(
      "../assets/img/Product/newtoy/洛克人/IMG-4.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 10,
  },
  {
    id: 93,
    name: "洛克人- 獵鷹鎧甲",
    stock: 5,
    price: 1599,
    picture: new URL(
      "../assets/img/Product/newtoy/洛克人/IMG-5.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 10,
  },
  {
    id: 94,
    name: "洛克人- Rockman 11",
    stock: 5,
    price: 1680,
    picture: new URL(
      "../assets/img/Product/newtoy/洛克人/IMG-6.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 10,
  },
  {
    id: 95,
    name: "洛克人- MAX ARMOR",
    stock: 5,
    price: 1980,
    picture: new URL(
      "../assets/img/Product/newtoy/洛克人/IMG-7.svg",
      import.meta.url
    ),
    qty: 0,
    categoryId: 10,
  },
]);

const formatProductByCategory = computed(() =>
  productList.filter(
    (prod) => prod.categoryId === currentSelectCategory.value.id
  )
);

const formatPageProductList = computed(() => {
  const newArray = [];
  for (let i = 0; i < formatProductByCategory.value.length; i += 8) {
    newArray.push(formatProductByCategory.value.slice(i, i + 8));
  }

  return newArray;
});

const pageIndex = ref(1);
const totalPage = ref(1);

// 當總頁數發生改變時，也把pageIndex指向1
watchEffect(() => {
  totalPage.value = formatPageProductList.value.length;
  pageIndex.value = 1;
});
</script>

<style lang="scss" scoped>
@keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -1500px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }

  75% {
    transform: translate3d(0, -10px, 0);
  }

  90% {
    transform: translate3d(0, 5px, 0);
  }

  to {
    transform: none;
  }
}
.reel-body {
  z-index: 1;
  width: 1200px;
  height: 1100px;
  background-color: var(--green-color2);
  position: relative;
  top: -15px;
  left: 0px;
  opacity: 0; /* 初始时设置透明度为 0 */
  transition: opacity 1s; /* 添加渐变效果 */
  h3 {
    background-color: #fff;
    width: 610px;
    height: 215px;
    color: var(--green-color1);
    &:hover {
      color: var(--green-color2);
    }
  }
  h4 {
    background-color: var(--orange-color3);
    width: 610px;
    height: 85px;
    color: var(--green-color1);
    &:hover {
      color: var(--green-color2);
    }
  }
}

.section4 {
  height: 1450px;
  background-image: url(../assets/img/bg/product-area-bg.jpg);
  background-size: contain;
  .animate__bounceInDown {
    animation-name: bounceInDown;
    animation-duration: 1.5s;
    opacity: 1;
  }
}
.section3 {
  min-height: 1300px;
  background-image: url(../assets/img/bg/product-area-bg.jpg);
  background-size: contain;
  .row {
    padding-top: 40px;
  }
}
.section2 {
  .carouselImg {
    height: 600px;
  }
  .carouselAll {
    width: 450px;
    height: 550px;
  }
  .bg-1 {
    background-image: url(../assets/img/bg/newToyPage/bg-top1.svg);
    width: 100%;
    height: 600px;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.section0 {
  height: 80px;
  width: 100%;
  background-image: url(../assets/img/bg/product-area-bg.jpg);
  background-size: contain;
}
@media (max-width: 1440px) {
  .Anchor {
    display: none;
  }
}
.productType {
  height: 80px;
  width: 100%;
  background-color: var(--orange-color2);
  font-family: "Lemon";
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 50px;
    background-color: var(--orange-color3);
    color: #fff;
    font-weight: bold;
    font-size: 24px;
    border-radius: 60px;
    margin-right: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    cursor: pointer;
    &:hover {
      background-color: var(--orange-color1);
      color: var(--orange-color2);
    }
    &:active {
      background-color: var(--orange-color2);
      color: var(--orange-color3);
    }
  }
}
</style>
