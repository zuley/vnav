<script setup lang="ts">

// 首页SEO
const opt = useOption()
useHead({
  title: `${opt.get('site-name')}-${opt.get('site-subtitle')}`,
  meta: [
    { name: 'description',  content: opt.get('site-description') },
    { name: 'keywords', content: opt.get('site-keys') }
  ]
})
</script>

<template>
  <search />
  <term-box />
  <post-box />
</template>

<style scoped>

</style>