

<template>
  <section class="section1">
    <section class="section2 mt-20 table-responsive">
      <table class="table text-center table-hover">
        <thead class="bg-green">
          <tr class="text-white fw-bold">
            <th scope="col">訂單編號</th>
            <th scope="col">訂單日期</th>
            <th scope="col">商品數量</th>
            <th scope="col">收據方式</th>
            <th scope="col">金額</th>
            <th scope="col">支付方式</th>
          </tr>
        </thead>
        <tbody class="bg-light">
          <tr v-for="order in getOrderList">
            <th scope="row" class="fw-bold">{{ order.orderNumber }}</th>
            <th scope="row" class="fw-bold">{{ order.orderDate }}</th>
            <th scope="row" class="fw-bold">{{ order.qty }}</th>
            <th scope="row" class="fw-bold">{{ order.invoice }}</th>
            <th scope="row" class="fw-bold">{{ order.amount }}</th>
            <th scope="row" class="fw-bold">{{ order.payment }}</th>
          </tr>
        </tbody>
      </table>
    </section>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useOrderStore } from '@/store/order'

const orderStore = useOrderStore()
const { getOrderList } = storeToRefs(orderStore)
</script>

<style scoped lang="scss">
.section1 {
  @include flexcenter;
  .section2 {
    width: 720px;
  }
}
</style>
