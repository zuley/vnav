<script setup lang="ts">
// 首页SEO
import useTerm from "~/composables/useTerm";

const opt = useOption()
useHead({
  title: `${opt.get('site-name')}-${opt.get('site-subtitle')}`,
  meta: [
    { name: 'description',  content: opt.get('site-description') },
    { name: 'keywords', content: opt.get('site-keys') }
  ]
})

const Terms = await useTerm()

</script>

<template>
  <search />
  <div class="pt-10">
    <PostBox
      v-for="term in Terms"
      :term="term.slug"
      :term-name="term.name"
    />
  </div>
</template>

<style scoped>

</style>