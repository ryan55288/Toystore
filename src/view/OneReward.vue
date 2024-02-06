<template>
  <div class="box1"></div>
  <Anchor :backgroundColor="'white'" />
  <!--  -->
  <section class="section1 pt-140">
    <section class="section2" ref="section2">
      <div class="d-flex justify-content-center">
        <img src="../assets/img/bg/newToyPage/reel-bottom3.svg" alt="" />
      </div>
      <!-- 卷軸 -->
      <div class="d-flex justify-content-center">
        <div id="oneReward" class="reel-body2">
          <div class="container pt-50">
            <div class="row justify-content-center">
              <div class="col-md-12 reel-contant">
                <h3 class="mt-40">一番賞是什麼？</h3>
                <p>
                  一番賞是來自日文「一番くじ」，是2003年由日本萬代南宮夢（bandai
                  namco）旗下的萬代魂（bandai
                  spirits）所推出的動漫、遊戲周邊抽獎商品，一番賞會將獎項區分為A-F級，並須付費抽取，且每一抽都有獎，跟扭蛋的概念很類似。
                  而一番賞價格每一抽依商品不同，約落在600至800日圓不等，且必須要由bandai
                  spirits所推出的商品，才能夠被稱作一番賞哦。
                </p>
                <h3>二、Banpresto是什麼？</h3>
                <p>
                  講解完一番賞的由來，大家可能會想起另一個跟它很相像的「banpresto」，萬普（banpresto）本是一家成立於1977年的玩具公司，
                  但於2008年被萬代南宮夢遊戲合併為現在的萬普，以販售景品聞名，景品與一番賞最大的差別在於，景品是透過抽獎、集點、遊戲等活動所獲得的商品，
                  且這個商品本身是沒有在販售且官方無定價的，可以想成無法依照一般管道獲得的商品。
                </p>
                <h3>三、一番賞哪裡抽得到？</h3>
                <p>
                  接下來就要講到重頭戲「哪裡可以買得到一番賞」這個問題，一般來說一番賞分為實體商店購買與線上一番賞，實體管道的部分則是在大部分書店、玩具店、
                  模型店或便利商店都可以買到，而其中最有名又最方便的購買管道又非全家一番賞莫屬。且目前只要在台灣獨家代理的實體一番賞店面購買遊玩的話，
                  還可以享有一番賞雙重中獎的機會，抽一次獎卻有機會獲得兩種商品，實在很難讓人不心動！
                </p>
                <h3>四、jungle的一番賞特賣區</h3>
                <p>
                  jungle的一番賞是將過季商品以特價隨機售出的形式售出給平台用戶，有抽到全新但是想轉賣的玩家歡迎聯絡我們，當然!!來逛jungle的用戶可以直接購買指定過季商品，有緣人來帶走他們吧!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="d-flex justify-content-center">
      <hr />
    </div>
    <div class="d-flex justify-content-center">
      <section class="reel-body1">
        <div class="d-flex justify-content-center">
          <img src="../assets/img/bg/newToyPage/reel-bottom.svg" alt="" />
        </div>
        <!-- 卷軸 -->
        <div id="oneReward" class="reel-body animate__animated">
          <div class="container pt-10">
            <div class="row">
              <div
                class="col-md-4 d-flex justify-content-center p-20"
                v-for="prod in productList"
              >
                <NewProductCard :productDetail="prod" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import NewProductCard from "@/components/NewProductCard.vue";
import Anchor from "@/components/Anchor.vue";
export default {
  components: { NewProductCard, Anchor },

  data() {
    return {
      productList: [
        {
          id: 1,
          name: "一番賞-我的英雄學院",
          stock: 10,
          price: 2400,
          imgurl: new URL(
            "../assets/img/Product/newtoy/一番賞/IMG.svg",
            import.meta.url
          ),
          iconSrc: new URL(
            "../assets/img/logo&icon/mylove.svg",
            import.meta.url
          ),
          quantity: 0,
        },
        {
          id: 2,
          name: "一番賞-七龍珠",
          stock: 13,
          price: 2000,
          imgurl: new URL(
            "../assets/img/Product/newtoy/一番賞/IMG-1.svg",
            import.meta.url
          ),
          iconSrc: new URL(
            "../assets/img/logo&icon/mylove.svg",
            import.meta.url
          ),
          quantity: 0,
        },
        {
          id: 3,
          name: "一番賞-咒術迴戰",
          stock: 15,
          price: 2800,
          imgurl: new URL(
            "../assets/img/Product/newtoy/一番賞/IMG-2.svg",
            import.meta.url
          ),
          iconSrc: new URL(
            "../assets/img/logo&icon/mylove.svg",
            import.meta.url
          ),
          quantity: 0,
        },
        {
          id: 4,
          name: "一番賞-HUNTER×HUNTER",
          stock: 1,
          price: 1500,
          imgurl: new URL(
            "../assets/img/Product/newtoy/一番賞/IMG-3.svg",
            import.meta.url
          ),
          iconSrc: new URL(
            "../assets/img/logo&icon/mylove.svg",
            import.meta.url
          ),
          quantity: 0,
        },
        {
          id: 5,
          name: "一番賞-東京復仇者",
          stock: 8,
          price: 2000,
          imgurl: new URL(
            "../assets/img/Product/newtoy/一番賞/IMG-4.svg",
            import.meta.url
          ),
          iconSrc: new URL(
            "../assets/img/logo&icon/mylove.svg",
            import.meta.url
          ),
          quantity: 0,
        },
        {
          id: 6,
          name: "一番賞-疾風伝",
          stock: 1,
          price: 2200,
          imgurl: new URL(
            "../assets/img/Product/newtoy/一番賞/IMG-5.svg",
            import.meta.url
          ),
          iconSrc: new URL(
            "../assets/img/logo&icon/mylove.svg",
            import.meta.url
          ),
          quantity: 0,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.box1 {
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: var(--green-color2);
}
.section1 {
  height: 2800px;
  background-color: var(--orange-color2);
  hr {
    margin: 60px;
    width: 1700px;
    border: 3px gray solid;
    border-radius: 5px;
  }
  .reel-body1 {
    width: 1200px;
    height: 1300px;
    background-color: var(--green-color2);
  }
}
.section2 {
  h3 {
    font-size: 36px;
    font-weight: bold;
    padding: 30px 0px;
    font-family: "Lemon";
  }
  p {
    font-size: 24px;
    padding: 0px 25px;
    font-family: "Lemon";
  }
  .reel-contant {
    padding: 0px 30px;
    width: 1100px;
    height: 900px;
    background: #fff;
  }
  .reel-body2 {
    width: 1200px;
    height: 1000px;
    background-color: var(--green-color2);
  }
}
</style>
