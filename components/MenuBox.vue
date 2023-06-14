<script setup lang="ts">
import useMenu from "~/composables/useMenu";
import {Menu} from "~/composables/useCms";

const { data: menuRes } = await useMenu('TOP')
const menuList = menuRes.value!.data
</script>

<template>
<ul>
  <li v-for="item in menuList as Menu[]">{{ item.name }}</li>
</ul>
</template>

<style scoped>

</style>