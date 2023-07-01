<script setup lang="ts">
const { params: { slug } } = useRoute()
</script>

<template>
  <search />
  <term-box :slug="slug as string" />
  <post-box :term="slug as string" />
</template>

<style scoped>

</style>