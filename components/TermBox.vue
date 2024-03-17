<script setup lang="ts">
import useTerm from "~/composables/useTerm";

const props = defineProps<{
  slug?: string
}>()

const Terms = await useTerm()
</script>

<template>
  <dl class="mb-4 pt-10">
    <dt class="text-zinc-500 text-xs px-4 mb-1">分类</dt>
    <dd class="text-sm leading-8">
      <nuxt-link class="block px-4 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800" to="/">全部</nuxt-link>
      <NuxtLink
          class="block px-4 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800"
          v-for="item in Terms"
          :to="`/term/${item.slug}`"
      >{{ item.name }}</NuxtLink>
    </dd>
  </dl>
</template>

<style scoped>

</style>