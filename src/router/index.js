import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    redirect: "/Center",
    name: "Layout",
    component: () => import("@/view/Layout.vue"),
    children: [
      {
        path: "Center",
        name: "Center",
        component: () => import("@/view/Center.vue"),
        meta: {
          title: "首頁",
        },
      },
      {
        path: "Grade8",
        name: "Grade8",
        component: () => import("@/view/Grade8.vue"),
        meta: {
          title: "8年級生區",
        },
      },
      {
        path: "Newtoy",
        name: "Newtoy",
        component: () => import("@/view/Newtoy.vue"),
        meta: {
          title: "新潮玩具",
        },
      },
      {
        path: "MemberSign",
        name: "MemberSign",
        component: () => import("@/view/MemberSign.vue"),
        meta: {
          title: "會員註冊",
        },
      },
      {
        path: "MemberLogin",
        name: "MemberLogin",
        component: () => import("@/view/MemberLogin.vue"),
        meta: {
          title: "會員登入",
        },
      },
      {
        path: "News",
        name: "News",
        component: () => import("@/view/News.vue"),
        meta: {
          title: "最新消息",
        },
      },
      {
        path: "AboutJungle",
        name: "AboutJungle",
        component: () => import("@/view/AboutJungle.vue"),
        meta: {
          title: "關於Jungle",
        },
      },
      {
        path: "UserPage",
        name: "UserPage",
        component: () => import("@/view/UserPage.vue"),
        //再新增3個頁面
        children: [
          {
            path: "UserInfo",
            name: "UserInfo",
            component: () => import("@/view/UserInfo.vue"),
            meta: {
              title: "會員資訊",
            },
          },
          {
            path: "MyLove",
            name: "MyLove",
            component: () => import("@/view/MyLove.vue"),
            meta: {
              title: "會員資訊",
            },
          },
          {
            path: "HistoryOrder",
            name: "HistoryOrder",
            component: () => import("@/view/HistoryOrder.vue"),
            meta: {
              title: "會員資訊",
            },
          },
        ],
        meta: {
          title: "會員頁面",
        },
      },
      {
        path: "OneReward",
        name: "OneReward",
        component: () => import("@/view/OneReward.vue"),
        meta: {
          title: "一番賞",
        },
      },
      {
        path: "Cart",
        name: "Cart",
        component: () => import("@/view/Cart.vue"),
        meta: {
          title: "購物車",
        },
      },
      {
        path: "CheckList1",
        name: "CheckList1",
        component: () => import("@/view/CheckList1.vue"),
        meta: {
          title: "結帳一",
        },
      },
      {
        path: "CheckList2",
        name: "CheckList2",
        component: () => import("@/view/CheckList2.vue"),
        meta: {
          title: "結帳二",
        },
      },
      {
        path: "CheckList3",
        name: "CheckList3",
        component: () => import("@/view/CheckList3.vue"),
        meta: {
          title: "結帳三",
        },
      },
      {
        path: "Product",
        name: "Product",
        component: () => import("@/view/Product.vue"),
        meta: {
          title: "產品頁",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    return { top: 0 }
  }
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Default Title";
  next();
});

export default router;
