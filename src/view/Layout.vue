<script setup>
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer></footer>
</template>

<style scoped lang="scss"></style>
