<script setup lang="ts">
import {usePostDetail} from "~/composables/usePost";
import {Post, useThumbnail} from "~/composables/useCms";
import {useGithubDetail, useGithubReadme} from "~/composables/useGithub";

const { post } = await usePostDetail('VueJS')
const resetPost = post as unknown as Post
const resGithub = await useGithubDetail('vuejs/vue-next')
const resGithubDetail = await useGithubReadme('vuejs/vue-next')
const content = atob((resGithubDetail.data.value as any).content)
</script>

<template>
<!--  <vue-markdown :source="content" />-->
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
      <div class="m-format w-3/4 min-h-[50vh] border-r pr-10">
        <h2>这里是标题</h2>
        <p>这里是段落</p>
        <h2>无序列表</h2>
        <ul>
          <li>无序列表</li>
          <li>无序列表</li>
          <li>无序列表</li>
        </ul>
        <h2>无序列表</h2>
        <ol>
          <li>无序列表</li>
          <li>无序列表</li>
          <li>无序列表</li>
        </ol>
        <h2>这里是链接</h2>
        <p>这里是一个跳转到<a href="http://baidu.com">百度</a>的链接</p>
      </div>
      <div class="w-1/4">这里是侧边</div>
    </div>
  </div>
</template>

<style scoped>

</style>