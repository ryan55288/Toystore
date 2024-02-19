<script setup></script>

<template>
  <div class="section1">
    <section class="section2 mt-20 table-responsive">
      <table class="table text-center table-hover">
        <tbody class="bg-green">
          <tr>
            <th scope="row" class="text-white fw-bold">姓名:</th>
            <td colspan="3" class="text-start bg-light">Tom</td>
          </tr>
          <tr>
            <th scope="row" class="text-white fw-bold">帳號:</th>
            <td colspan="3" class="text-start bg-light">tom123</td>
          </tr>
          <tr>
            <th scope="row" class="text-white fw-bold">信箱:</th>
            <td colspan="3" class="text-start bg-light">tom123@yahoo.com.tw</td>
          </tr>
          <tr>
            <th scope="row" class="text-white fw-bold">性別:</th>
            <td colspan="3" class="text-start bg-light">男</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<style scoped lang="scss">
.section1 {
  @include flexcenter;
  .section2 {
    width: 720px;
  }
}
</style>
