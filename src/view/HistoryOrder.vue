<script setup>
// import UserComponents from "@/components/UserComponents.vue";
</script>

<template>
  <section class="section1">
    <section class="section2 mt-20 table-responsive">
      <table class="table text-center table-hover">
        <thead class="bg-green">
          <tr class="text-white fw-bold">
            <th scope="col">訂單編號</th>
            <th scope="col">訂單日期</th>
            <th scope="col">商品ID</th>
            <th scope="col">訂單狀態</th>
            <th scope="col">金額</th>
            <th scope="col">支付方式</th>
          </tr>
        </thead>
        <tbody class="bg-light">
          <tr>
            <th scope="row" class="fw-bold">710112</th>
            <th scope="row" class="fw-bold">20240116</th>
            <th scope="row" class="fw-bold">01</th>
            <th scope="row" class="fw-bold">已完成訂單</th>
            <th scope="row" class="fw-bold">500</th>
            <th scope="row" class="fw-bold">貨到付款</th>
          </tr>
        </tbody>
      </table>
    </section>
  </section>
</template>

<style scoped lang="scss">
.section1 {
  @include flexcenter;
  .section2 {
    width: 720px;
  }
}
</style>
