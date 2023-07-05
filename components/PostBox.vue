<script setup lang="ts">
import usePost from "~/composables/usePost";
import {Post, useThumbnail} from "~/composables/useCms";

const porps = defineProps<{
  term?: string
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
    <!-- 文章 -->
    <div class="container mx-auto grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-4">
      <div class="bg-white rounded-lg p-3 text-center" v-for="item in (list as Post[])" :key="item.id">
        <nuxt-link :to="`/post/${item.slug}`" class="block h-0 pb-[50%] bg-no-repeat bg-center bg-contain hover:rotate-2 transition-all" :style="{ backgroundImage: `url(${useThumbnail(item.cover.id)})` }"></nuxt-link>
        <h2 class="text-xl leading-10">
          <nuxt-link to="/">{{ item.title }}</nuxt-link>
        </h2>
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