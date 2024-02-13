<template>
  <section class="section1">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mb-4" v-for="prod in getMyFavourList" :key="prod.id">
          <ProductCard :productDetail="prod"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useMyFavourStore } from '@/store/my-favour'

const myFavourStore = useMyFavourStore()
const { getMyFavourList } = storeToRefs(myFavourStore)

</script>

<style scoped lang="scss">
.section1 {
  margin-top: 20px;
}
</style>
