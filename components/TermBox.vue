<script setup lang="ts">
import useTerm from "~/composables/useTerm";

const props = defineProps<{
  slug?: string
}>()

const Terms = await useTerm()
</script>

<template>
  <dl class="mb-4">
    <dt class="text-slate-300 text-xs mb-1">分类</dt>
    <dd>
      <nuxt-link :class="{ 'text-red-700': !props.slug }" to="/">全部</nuxt-link>
      <NuxtLink
          class="flex"
          v-for="item in Terms"
          :class="{ 'text-red-700': item.slug === props.slug }"
          :to="`/term/${item.slug}`"
      >{{ item.name }}</NuxtLink>
    </dd>
  </dl>
</template>

<style scoped>

</style>