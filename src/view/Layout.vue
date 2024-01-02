<script setup>
import Navbar from "@/components/Navbar.vue";
import Footbottom from "@/components/Footbottom.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <Footbottom />
  </footer>
</template>

<style scoped lang="scss"></style>
