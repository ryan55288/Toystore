<script setup></script>

<template>
  <div class="section1">
    <section class="section2 mt-20 table-responsive">
      <table class="table text-center table-hover">
        <tbody class="bg-green">
          <tr>
            <th scope="row" class="text-white fw-bold">姓名:</th>
            <td colspan="3" class="text-start bg-light">{{ getLoginInfo.name }}</td>
          </tr>
          <tr>
            <th scope="row" class="text-white fw-bold">帳號:</th>
            <td colspan="3" class="text-start bg-light">{{ getLoginInfo.account }}</td>
          </tr>
          <tr>
            <th scope="row" class="text-white fw-bold">信箱:</th>
            <td colspan="3" class="text-start bg-light">{{ getLoginInfo.email }}</td>
          </tr>
          <tr>
            <th scope="row" class="text-white fw-bold">性別:</th>
            <td colspan="3" class="text-start bg-light">{{ getLoginInfo.sex }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup>
import { useRegisterStore } from '@/store/register'

const { getLoginInfo } = useRegisterStore()
</script>

<style scoped lang="scss">
.section1 {
  @include flexcenter;
  .section2 {
    width: 720px;
  }
}
</style>
