<script setup lang="ts">
import useOption from "~/composables/useOption";
import {useMenu} from "#imports";
const opt = useOption()
const menu = await useMenu('TOP')
</script>

<template>
  <div>
    <h1>Index {{ opt.get('site-name') }} 222</h1>
      {{ menu.data.value.data }}
  </div>
</template>

<style scoped>

</style>