<template>
  <div><Anchor /></div>
  <section class="section1 box1">
    <div class="marquee-all">
      <div class="marquee-content fs-48 text-white marquee mt-100">
        Lots of toys you may have missed
      </div>
      <div
        class="marquee-content2 mt-50 d-flex justify-content-center marquee2"
      >
        <div>
          <img src="../assets/img/Product/80toy/戰隊系列/IMG-3.svg" alt="" />
        </div>
        <div>
          <img src="../assets/img/Product/80toy/彈珠超人/IMG-1.svg" alt="" />
        </div>
        <div>
          <img src="../assets/img/Product/80toy/徽章戰士/IMG-2.svg" alt="" />
        </div>
        <div>
          <img src="../assets/img/Product/80toy/戰隊系列/IMG-10.svg" alt="" />
        </div>
        <div>
          <img src="../assets/img/Product/80toy/戰隊系列/IMG-2.svg " alt="" />
        </div>
      </div>
      <div class="marquee-content3 fs-48 text-white marquee3">
        But Jungle can help you collect it
      </div>
    </div>
  </section>
  <div>
    <section class="productType" id="grade8">
      <ul class="d-flex justify-content-center align-items-center h-100">
        <li v-for="cate in grade8Category" :key="cate.id" @click="currentSelectCategory = cate">{{ cate.title }}</li>
      </ul>
    </section>
  </div>

  <section class="section2">
    <div class="pt-40 text-center fs-36 fw-bold text-white">{{ currentSelectCategory.title }}</div>
    <div class="container mt-40">
      <div class="row animate__animated animate__backInLeft">
        <div class="col-md-3 mb-4" v-for="product in formatProductByCategory" :key="product.id">
          <ProductCard :productDetail="product"/>
        </div>
      </div>
    </div>
    <div class="page"><Page /></div>
  </section>

  <section class="section3">
    <div
      class="fs-36 fw-bold text-white text-center pt-40 animate__animated animate__flipInX"
    >
      熱銷商品
    </div>
    <div class="container mt-40">
      <div class="row">
        <div v-for="(prod, index) in hotSaleProducts" :key="prod.id" class="col-md-6 col-lg-3">
          <ProductCard :productDetail="prod" :hotSaleIndex="index + 1"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useCategory } from '@/composables/category'
const { grade8Category, currentSelectCategory } = useCategory('grade8')

const productList = reactive([
  {
    id: 13,
    name: "徽章戰士- 麥特比電鍍版",
    stock: 3,
    price: 2232,
    picture: new URL("../assets/img/Product/center/IMG-5.svg", import.meta.url),
    qty: 0,
    categoryId: 1
  },
  {
    id: 14,
    name: "徽章戰士-金屬骨架 DX版",
    stock: 5,
    price: 3050,
    picture: new URL("../assets/img/Product/center/IMG-5.svg", import.meta.url),
    qty: 0,
    categoryId: 1
  },
  {
    id: 15,
    name: "徽章戰士-美達比",
    stock: 5,
    price: 3050,
    picture: new URL("../assets/img/Product/center/IMG-5.svg", import.meta.url),
    qty: 0,
    categoryId: 1
  },
  {
    id: 4,
    name: "徽章戰士-組裝模型",
    stock: 5,
    price: 900,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 1
  },
  {
    id: 16,
    name: "徽章戰士-Fancy Aile",
    stock: 12,
    price: 2650,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 1
  },
  {
    id: 17,
    name: "徽章戰士- 藍電犬",
    stock: 5,
    price: 1300,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 1
  },
  {
    id: 18,
    name: "徽章戰士-甲蟲",
    stock: 5,
    price: 1580,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 1
  },
  {
    id: 19,
    name: "徽章戰士-羅庫修",
    stock: 12,
    price: 958,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 1
  },
  {
    id: 1,
    name: "百獸戰隊-天空精靈王",
    stock: 12,
    price: 2499,
    picture: new URL("../assets/img/Product/center/IMG-5.svg", import.meta.url),
    qty: 0,
    categoryId: 2
  },
  {
    id: 20,
    name: "百獸戰隊- 牙吠騎士",
    stock: 5,
    price: 2150,
    picture: new URL("../assets/img/Product/center/IMG-5.svg", import.meta.url),
    qty: 0,
    categoryId: 2
  },
  {
    id: 21,
    name: "百獸戰隊-牙吠王DX",
    stock: 5,
    price: 9800,
    picture: new URL("../assets/img/Product/center/IMG-5.svg", import.meta.url),
    qty: 0,
    categoryId: 2
  },
  {
    id: 22,
    name: "百獸戰隊-牙吠神",
    stock: 12,
    price: 1800,
    picture: new URL("../assets/img/Product/center/IMG-5.svg", import.meta.url),
    qty: 0,
    categoryId: 2
  },
  {
    id: 23,
    name: "百獸戰隊- 紅獅王",
    stock: 3,
    price: 990,
    picture: new URL("../assets/img/Product/center/IMG-5.svg", import.meta.url),
    qty: 0,
    categoryId: 2
  },
  {
    id: 2,
    name: "百獸戰隊-牙吠獵人",
    stock: 5,
    price: 3200,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 2
  },
  {
    id: 8,
    name: "忍風戰隊-忍風合體",
    stock: 8,
    price: 1690,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 2
  },
  {
    id: 24,
    name: "百獸戰隊-牙吠力士",
    stock: 5,
    price: 5500,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 2
  },
  {
    id: 25,
    name: "百獸戰隊-牙吠北極熊",
    stock: 12,
    price: 3300,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 2
  },
  {
    id: 26,
    name: "百獸戰隊-轟雷神",
    stock: 5,
    price: 4500,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 2
  },
  {
    id: 27,
    name: "百獸戰隊-牙吠王",
    stock: 5,
    price: 2434,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 2
  },
  {
    id: 28,
    name: "百獸戰隊-牙吠連者",
    stock: 12,
    price: 2070,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 2
  },
  {
    id: 29,
    name: "彈珠人-元祖彈珠人",
    stock: 12,
    price: 300,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 2
  },
  {
    id: 7,
    name: "彈珠人- 疾風炸彈人",
    stock: 5,
    price: 1550,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 3
  },
  {
    id: 30,
    name: "睿謙人- gay的超人",
    stock: 5,
    price: 4500,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 3
  },
  {
    id: 31,
    name: "彈珠人-大地魔神",
    stock: 12,
    price: 1000,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 3
  },
  {
    id: 32,
    name: "彈珠人- 翼朱雀",
    stock: 3,
    price: 990,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 3
  },
  {
    id: 33,
    name: "彈珠人-綠捲蟲",
    stock: 5,
    price: 560,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 3
  },
  {
    id: 34,
    name: "彈珠人-潛艇",
    stock: 8,
    price: 2500,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 3
  },
  {
    id: 35,
    name: "彈珠人-紅寶專用",
    stock: 5,
    price: 1450,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 3
  },
  {
    id: 36,
    name: "彈珠人-焰之魔神",
    stock: 12,
    price: 650,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 3
  },
  {
    id: 37,
    name: "彈珠人- 邪惡五人眾號",
    stock: 5,
    price: 1000,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 3
  },
  {
    id: 38,
    name: "戰鬥陀螺-木之宮龍",
    stock: 5,
    price: 1900,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 4
  },
  {
    id: 39,
    name: "戰鬥陀螺-銀牙烈虎F",
    stock: 1,
    price: 1300,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 4
  },
  {
    id: 6,
    name: "戰鬥陀螺-龍騎士",
    stock: 5,
    price: 1480,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 4
  },
  {
    id: 3,
    name: "戰鬥陀螺-極地銀狼 2",
    stock: 5,
    price: 900,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 4
  },
  {
    id: 40,
    name: "戰鬥陀螺-閃電獵豹",
    stock: 12,
    price: 299,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 4
  },
  {
    id: 41,
    name: "戰鬥陀螺- 堅甲戰龜V",
    stock: 5,
    price: 350,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 4
  },
  {
    id: 42,
    name: "戰鬥陀螺- 銀牙烈虎",
    stock: 5,
    price: 200,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 4
  },
  {
    id: 43,
    name: "戰鬥陀螺- 烈焰飛鳳",
    stock: 5,
    price: 450,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 4
  },
  {
    id: 44,
    name: "數碼寶貝-機甲獸龍",
    stock: 1,
    price: 850,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 5
  },
  {
    id: 45,
    name: "數碼寶貝-機械暴龍獸",
    stock: 1,
    price: 2280,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 5
  },
  {
    id: 46,
    name: "數碼寶貝-戰鬥暴龍獸",
    stock: 1,
    price: 460,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 5
  },
  {
    id: 47,
    name: "數碼寶貝-黑暗戰鬥暴龍獸",
    stock: 1,
    price: 1099,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 5
  },
  {
    id: 48,
    name: "數碼寶貝-閃電獵豹",
    stock: 12,
    price: 299,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 5
  },
  {
    id: 49,
    name: "數碼寶貝- 天使獸",
    stock: 5,
    price: 680,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 5
  },
  {
    id: 50,
    name: "數碼寶貝- 帝皇龍甲獸",
    stock: 5,
    price: 990,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 5
  },
  {
    id: 51,
    name: "數碼寶貝- 機械邪龍獸",
    stock: 5,
    price: 1520,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 5
  },
  {
    id: 52,
    name: "數碼寶貝-鐵鷹獸",
    stock: 12,
    price: 499,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 5
  },
  {
    id: 53,
    name: "數碼寶貝- 帝皇龍甲獸",
    stock: 5,
    price: 1880,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 5
  },
])
const hotSaleProducts = reactive([
  {
    id: 13,
    name: "徽章戰士- 麥特比電鍍版",
    stock: 3,
    price: 2232,
    picture: new URL("../assets/img/Product/center/IMG-5.svg", import.meta.url),
    qty: 0,
    categoryId: 1
  },
  {
    id: 1,
    name: "百獸戰隊-天空精靈王",
    stock: 12,
    price: 2499,
    picture: new URL("../assets/img/Product/center/IMG-5.svg", import.meta.url),
    qty: 0,
    categoryId: 2
  },
  {
    id: 30,
    name: "睿謙人- gay的超人",
    stock: 5,
    price: 4500,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 3
  },
  {
    id: 6,
    name: "戰鬥陀螺-龍騎士",
    stock: 5,
    price: 1480,
    picture: new URL("../assets/img/Product/center/IMG-4.svg", import.meta.url),
    qty: 0,
    categoryId: 4
  },
])
const formatProductByCategory = computed(() => productList.filter(prod => prod.categoryId === currentSelectCategory.value.id))
</script>

<style scoped>
.section1 {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 400px;
    height: 400px;
    padding: 20px;
  }
  .marquee-all {
    overflow: hidden;
    overflow-x: hidden;
    .marquee-content {
      display: inline-block;
      white-space: nowrap;
      animation: marquee 8s linear infinite;
      display: flex;
      align-items: center;
      font-family: "Lemon";
    }

    .marquee-content2 {
      display: inline-block;
      white-space: nowrap;
      animation: marquee 8s ease-in-out infinite;
    }
    .marquee-content3 {
      display: inline-block;
      white-space: nowrap;
      animation: marquee 8s linear infinite;
      font-family: "Lemon";
    }
  }
}
.section2 {
  min-height: 1200px;
  width: 100%;
  background-color: var(--green-color1);
}
.section3 {
  width: 100%;
  background-repeat: no-repeat;
  height: 700px;
  background-image: url(../assets/img/bg/80ToyPage/bottom-bg-1.svg);
  .hot-icon {
    z-index: 1;
    position: relative;
    top: 36px;
    left: 18px;
    background-color: var(--orange-color1);
    color: #fff;
    border-radius: 5px;
    padding: 10px;
  }
}

.box1 {
  background-image: url(../assets/img/bg/80ToyPage/top-bg1.svg);
  width: 100%;
  height: 750px;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes marquee2 {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes marquee3 {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
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
