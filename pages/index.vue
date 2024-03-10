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
  <div class="flex">
    <div class="m-baseSider w-60 p-4 leading-8 border-r border-slate-100 dark:border-slate-700">
      <TermBox class="" />
    </div>
    <div class="flex-auto py-4 px-6">
      <search />
    </div>
  </div>
</template>

<style scoped>
.m-baseSider {

}
</style>