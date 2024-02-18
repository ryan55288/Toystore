<script setup>

const props = defineProps(['activeIndex', 'totalPage'])
const emit = defineEmits(['update:activeIndex'])

const prevPage = () => {
  if (props.activeIndex === 1) return
  emit('update:activeIndex', props.activeIndex - 1)
}
const nextPage = () => {
  if (props.activeIndex === props.totalPage) return
  emit('update:activeIndex', props.activeIndex + 1)
}
const updateActiveIndex = (page) => {
  emit('update:activeIndex', page)
}
</script>

<template>
  <div class="section1">
    <ul>
      <li @click="prevPage">
        <i class="fas fa-chevron-left"></i>
      </li>
      <li @click="prevPage">上一頁</li>
      <li v-for="page in totalPage" @click="updateActiveIndex(page)" :class="{ 'activePage': activeIndex === page }">{{ page }}</li>
      <li @click="nextPage">下一頁</li>
      <li @click="nextPage">
        <i class="fas fa-chevron-right"></i>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.activePage {
  background-color: var(--orange-color3);
  border-radius: 5px;
  color: #fff !important;
}
.box1 .box1 ul li:hover {
  background-color: var(--orange-color3);
  border-radius: 5px;
  color: #fff;
}

.section1 {
  height: 200px;
  background-image: url(../assets/img/bg/product-area-bg.jpg);
  background-size: cover;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 60px;
    width: 1300px;
    height: 50px;
    background-color: #fff;
  }
  li {
    cursor: pointer;
    font-weight: bold;
    font-size: 24px;
    color: gray;
    padding: 10px 20px;
    &:hover {
      background-color: var(--orange-color3);
      border-radius: 5px;
      color: #fff;
    }
    &:active {
      background-color: var(--orange-color2);
      border-radius: 5px;
      color: #fff;
    }
  }
}
</style>
