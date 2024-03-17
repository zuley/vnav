<script setup lang="ts">
import {usePostDetail} from "~/composables/usePost";
import type { Post } from "~/composables/useCms";
import {useThumbnail} from "~/composables/useCms";
import {TimeAgo} from "../../.nuxt/imports";
import {markdownToHtml} from "~/composables/useMarkdown";
import useShiki from "~/composables/useShiki";
import {onMounted} from "#imports";
import {base64Decode, toThirdPartyUrl} from "~/composables/useUtils";

const route = useRoute()
const { post } = await usePostDetail(route.params.slug as string)
const resetPost = post as unknown as Post
const resGithub = post.value.github_info

// 页面挂载后渲染代码高亮
onMounted(() => {
  useShiki().then((highlighter) => {
    const code = document.querySelectorAll('pre code')
    code.forEach((block) => {
      block.innerHTML = highlighter.codeToHtml(block.textContent || '', 'typescript')
    })
  })
})
// seo
const opt = useOption()
useHead({
  title: `${post.value.title} - ${opt.get('site-name')}-${opt.get('site-subtitle')}`,
  meta: [
    { name: 'description',  content: post.value.title },
    { name: 'keywords', content: post.value.tags }
  ]
})
</script>

<template>
  <div class="mb-10 flex items-center">
    <div class="bg-zinc-800 rounded-md w-60 h-60 p-10 mr-10">
      <div class="h-full bg-cover" :style="{ backgroundImage: `url(${useThumbnail(resetPost.cover.id)})` }"></div>
    </div>
    <div>
      <h1 class="text-4xl mb-4">{{ resetPost.title }}</h1>
      <p class="text-zinc-400 mb-4">{{ resetPost.desc }}</p>
      <div class="flex text-zinc-400 mb-5">
        <div class="w-32">
          <div class="text-sm text-slate-600">Star</div>
          <div class="text-md">{{ resGithub.info.stargazers_count }}</div>
        </div>
        <div class="w-32">
          <div class="text-sm text-slate-600">Forks</div>
          <div class="text-md">{{ resGithub.info.forks_count }}</div>
        </div>
        <div class="w-32">
          <div class="text-sm text-slate-600">Updated at</div>
          <div class="text-md">{{ TimeAgo(new Date(resGithub.info.updated_at)) }}</div>
        </div>
        <div class="w-32">
          <div class="text-sm text-slate-600">License</div>
          <div class="text-md">{{ resGithub.info.license.name }}</div>
        </div>
      </div>
      <div v-if="resGithub">
        <u-button class="mr-3" color="yellow" @click="toThirdPartyUrl(resGithub.info.homepage)">前往官网查看</u-button>
        <u-button @click="toThirdPartyUrl(resGithub.info.html_url)">前往Github查看</u-button>
      </div>
    </div>
  </div>
  <!--  主体内容  -->
  <UDivider label="Getting Started" />
  <div class="m-format text-zinc-200 pt-5" v-html="resetPost.content_artivle"></div>
</template>

<style scoped>

</style>