<template>
  <div class="m-header">
    <div class="container">
      <div class="logo">
        <nuxt-link to="/">
          <img class="rounded-full w-10 h-10 shadow-2xl" :src="opt.get('site-logo')" alt="">
        </nuxt-link>
      </div>
      <MenuBox />
    </div>
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
import useOption from "~/composables/useOption";

const opt = useOption()

</script>