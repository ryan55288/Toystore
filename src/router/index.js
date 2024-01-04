import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Default Title";
  next();
});

export default router;
