<script setup>
import UserComponents from "@/components/UserComponents.vue";
import Web_Product_Card from "@/components/Web_Product_Card.vue";
</script>

<template>
  <div class="box1"></div>
  <section class="section1">
    <UserComponents />
  </section>
</template>

<style scoped lang="scss">
.section1 {
  height: 920px;
}
.box1 {
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: var(--green-color2);
}
</style>
