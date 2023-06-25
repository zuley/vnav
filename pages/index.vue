<script setup lang="ts">
import useTerm from "~/composables/useTerm";
import usePost from "~/composables/usePost";
import {Post} from "~/composables/useCms";

const { data: res } = await useTerm()
const list = res.value!.data

const { data: postRes } = await usePost()
const postList = postRes.value!.data
</script>

<template>
  <!-- 搜索 -->
  <Search />
  <!-- 分类 -->
  <div class="container mx-auto pt-6 mb-4">
    <NuxtLink
      class="mr-8"
      v-for="item in list"
      :to="`/term/${item.slug}`"
    >{{ item.name }}</NuxtLink>
  </div>
  <!-- 文章 -->
  <div class="container mx-auto grid grid-cols-6 gap-4">
    <div class="bg-white rounded-lg p-3 text-center" v-for="item in (postList as Post[])">
      <div class="h-0 pb-[50%] bg-no-repeat bg-center bg-contain" :style="{ backgroundImage: `url(${useThumbnail(item.cover)})` }"></div>
      <h2 class="text-xl leading-10">{{ item.title }}</h2>
      <p class="text-gray-400 text-xs">{{ item.desc }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>