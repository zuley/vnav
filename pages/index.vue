<script setup lang="ts">
import useOption from "~/composables/useOption";
const opt = useOption()
</script>

<template>
  <div>
    <h1>Index {{ opt.get('site-name') }} 222</h1>
  </div>
</template>

<style scoped>

</style>