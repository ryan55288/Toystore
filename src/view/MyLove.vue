<script setup>
import WebProductCard from "@/components/ProductCard.vue";
</script>

<template>
  <section class="section1">
    <div class="container">
      <div class="row">
        <div class="col-md-6"><WebProductCard /></div>
        <div class="col-md-6"><WebProductCard /></div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section1 {
  margin-top: 20px;
}
</style>
