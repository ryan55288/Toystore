<template>
  <div
    class="anchor text-center"
    @click="scrollToTop"
    v-if="showAnchor"
    :style="{ backgroundColor }"
  >
    <i
      class="fas fa-chevron-up fa-2x pt-10"
      :class="{ 'gray-icon': shouldShowGray }"
    ></i>
    <div class="d-flex justify-content-center">
      <div class="img"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: String,
  },
  data() {
    return {
      showAnchor: false,
      shouldShowGray: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 200) {
        this.showAnchor = true;
      } else {
        this.showAnchor = false;
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped lang="scss">
.gray-icon {
  color: gray;
}
.anchor {
  position: absolute;
  cursor: pointer;
  position: fixed;
  border-radius: 100%;
  width: 120px;
  height: 120px;
  bottom: 10.5%;
  right: 3.5%;
  background-color: var(--orange-color2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:hover {
    background-color: var(--orange-color3);
    i {
      color: #fff;
    }
  }
  .img {
    background-image: url(../assets/img/bg/shovel.svg);
    background-repeat: no-repeat;
    background-size: contain;
    width: 60px;
    height: 60px;
    background-size: auto;
  }
  i {
    color: gray;
  }
}
</style>
