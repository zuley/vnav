<script setup lang="ts">
import usePost from "~/composables/usePost";
import type {Post} from "~/composables/useCms"
import {useThumbnail} from "~/composables/useCms";

const porps = defineProps<{
  term?: string
  termName?: string
}>()

const route = useRoute()
const { page, list, allPages, keyword } = await usePost({
  termSlug: porps.term,
  page: 1,
  keyword: route.query.keyword as string || ''
})
watch(() => route.query, () => {
  keyword.value = route.query.keyword as string
})
</script>

<template>
  <template v-if="list.length > 0">
    <h2 class="mb-4 text-zinc-500">{{ termName }}</h2>
    <!-- 文章 -->
    <div class="grid grid-cols-5 gap-4 mb-10">
      <div
        class="bg-zinc-800 hover:bg-zinc-700 duration-200 rounded-md"
        v-for="item in (list as Post[])" :key="item.id"
      >
        <u-tooltip class="block text-wrap" :text="item.desc">
          <nuxt-link class="flex items-center p-3" :to="`/post/${item.slug}`" :title="item.desc" target="_blank">
            <div class="w-10 h-10 overflow-hidden mr-3"><img :src="useThumbnail(item.cover.id)" alt=""></div>
            <div class="flex-1 overflow-hidden">
              <h3 class="text-zinc-200 mb-1">{{ item.title }}</h3>
              <p class="text-xs text-zinc-500 truncate overflow-ellipsis">{{ item.desc }}</p>
            </div>
          </nuxt-link>
        </u-tooltip>
      </div>
    </div>
  </template>
</template>

<style scoped>

</style>