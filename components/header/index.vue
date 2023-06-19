<script setup lang="ts">
import useOption from "~/composables/useOption";

const opt = useOption()

</script>

<template>
  <div class="m-header">
    <div class="container mx-auto flex py-5">
      <div class="logo mr-8">
        <nuxt-link to="/" :title="opt.get('site-name')">
          <img class="rounded-full w-10 h-10 shadow-2xl" :src="opt.get('site-logo')" alt="">
        </nuxt-link>
      </div>
      <MenuBox />
    </div>
  </div>
</template>

<style lang="" scoped>

</style>