<script setup lang="ts">
import useOption from "~/composables/useOption";

const opt = useOption()
</script>

<template>
  <div class="m-baseHeader p-3 border-b border-slate-700 flex justify-between items-center">
  <div class="logo">
    <nuxt-link to="/" :title="opt.get('site-name')">
      <img class="h-10" :src="opt.get('site-logo')" alt="">
    </nuxt-link>
  </div>
  <MenuBox />
  <div>...</div>
</div>
</template>

<style scoped>

</style>