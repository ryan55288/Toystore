<script setup>
import Navbar from "@/components/Navbar.vue";
import Footbottom from "@/components/Footbottom.vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

route.path;
console.log(route.path);
</script>

<template>
  <header>
    <!-- v-show="route.path == '/News'"  -->
    <!-- 用動態class方式去寫 -->
    <Navbar />
  </header>
  <main>
    <router-view> </router-view>
  </main>
  <footer>
    <Footbottom />
  </footer>
</template>

<style scoped lang="scss"></style>
