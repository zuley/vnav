<script setup lang="ts">
import useMenu from "~/composables/useMenu";

const { data: menuRes } = await useMenu('TOP')
const menuList = menuRes.value!.data
</script>

<template>
<div class="leading-9">
  <NuxtLink
    class="mr-8"
    v-for="item in menuList"
    :to="item.url"
    :target="item.target"
  >{{ item.name }}</NuxtLink>
</div>
</template>

<style scoped>

</style>