<script setup lang="ts">
import useTerm from "~/composables/useTerm";

const props = defineProps<{
  slug?: string
}>()

const { data: res } = await useTerm()
const list = res.value!.data
</script>

<template>
  <div class="container mx-auto pt-6 mb-4">
    <nuxt-link class="mr-8" :class="{ 'text-red-700': !props.slug }" to="/">全部</nuxt-link>
    <NuxtLink
      class="mr-8"
      v-for="item in list"
      :class="{ 'text-red-700': item.slug === props.slug }"
      :to="`/term/${item.slug}`"
    >{{ item.name }}</NuxtLink>
  </div>
</template>

<style scoped>

</style>