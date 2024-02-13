<script setup>
import Footbottom from "@/components/Footbottom.vue";
import { useCartStore } from '@/store/cart'
const cartStore = useCartStore()
const { cleanDirectPurchase } = cartStore
const route = useRoute();
watch(
  () => route.path,
  (newValue) => {
    if (newValue !== '/CheckList1' && newValue !== '/CheckList2') {
      cleanDirectPurchase()
    }
  }
)
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
