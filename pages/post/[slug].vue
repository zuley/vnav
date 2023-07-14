<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import {usePostDetail} from "~/composables/usePost";
import {Post, useThumbnail} from "~/composables/useCms";
import {useGithubDetail, useGithubReadme} from "~/composables/useGithub";

const route = useRoute()

const { post } = await usePostDetail(route.params.slug as string)
const resetPost = post as unknown as Post
const resGithub = await useGithubDetail(post.value.github as string)
const resGithubDetail = await useGithubReadme(post.value.github as string)
const content = atob((resGithubDetail.data.value as any).content)


const markdownRenderer = new MarkdownIt()
const html = markdownRenderer.render(content)
</script>

<template>
  <div class="container mx-auto">
    <!--  基本信息  -->
    <div class="mb-10 mt-16 flex gap-8 justify-between items-center">
      <div class="border rounded-md w-36 h-36 p-3">
        <div class="h-full" :style="{ backgroundImage: `url(${useThumbnail(resetPost.cover.id)})` }"></div>
      </div>
      <div class="flex-1">
        <h1 class="text-4xl text-red-500">{{ resetPost.title }}</h1>
        <p class="text-slate-400">{{ resetPost.desc }}</p>
        <div class="flex gap-2 mt-4">
          <div class="w-32" v-for="item in 4">
            <div class="text-sm text-slate-500">Star</div>
            <div class="text-xl">
              <n-number-animation :from="0" :to="12039" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <n-button block color="#ef4444">前往官网查看</n-button>
        <n-button block color="#ef4444">前往Github查看</n-button>
      </div>
    </div>

    <!--  主体内容  -->
    <div class="flex justify-between gap-10 border-t pt-10">
      <div class="m-format w-3/4 min-h-[50vh] border-r pr-10" v-html="html"></div>
      <div class="w-1/4">这里是侧边</div>
    </div>
  </div>
</template>

<style scoped>

</style>