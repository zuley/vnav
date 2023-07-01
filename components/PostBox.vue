<script setup lang="ts">
import usePost from "~/composables/usePost";
import {Post, useThumbnail} from "~/composables/useCms";

const porps = defineProps<{
  term?: string
}>()
const { page, list, allPages } = await usePost({
  termSlug: porps.term,
  page: 1
})
</script>

<template>
  <template v-if="list.length > 0">
    <!-- 文章 -->
    <div class="container mx-auto grid grid-cols-6 gap-4">
      <div class="bg-white rounded-lg p-3 text-center" v-for="item in (list as Post[])" :key="item.id">
        <div class="h-0 pb-[50%] bg-no-repeat bg-center bg-contain" :style="{ backgroundImage: `url(${useThumbnail(item.cover.id)})` }"></div>
        <h2 class="text-xl leading-10">{{ item.title }}</h2>
        <p class="text-gray-400 text-xs h-8">{{ item.desc }}</p>
      </div>
    </div>
    <!-- 分页 -->
    <div class="container mx-auto flex justify-center py-10">
      <n-pagination
        :page-count="allPages"
        v-model:page="page"
      >
        <template #prev>
          上一页
        </template>
        <template #next>
          下一页
        </template>
      </n-pagination>
    </div>
  </template>
  <n-empty class="pt-20" size="large" description="这什么都没有啊" v-else />
</template>

<style scoped>

</style>