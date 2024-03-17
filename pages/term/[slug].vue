<script setup lang="ts">
const { params: { slug } } = useRoute()
const Terms = useTerm()
const opt = useOption()
const actTerm = Terms.value.find(e => e.slug === slug)
useHead({
  title: `${actTerm!.name} - ${opt.get('site-name')} - ${opt.get('site-subtitle')}`,
  meta: [
    { name: 'description',  content: actTerm!.desc },
    { name: 'keywords', content: `${actTerm!.name},${opt.get('site-keys')}` }
  ]
})
</script>

<template>
  <search :name="actTerm.name" :desc="actTerm.desc" />
  <div class="pt-10">
    <post-box :term="slug as string" />
  </div>
</template>

<style scoped>

</style>