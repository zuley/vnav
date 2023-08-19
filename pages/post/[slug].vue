<script setup lang="ts">
import {usePostDetail} from "~/composables/usePost";
import {Post, useThumbnail} from "~/composables/useCms";
import {useGithubDetail, useGithubReadme} from "~/composables/useGithub";
import {TimeAgo} from "../../.nuxt/imports";
import {markdownToHtml} from "~/composables/useMarkdown";
import useShiki from "~/composables/useShiki";
import {onMounted} from "#imports";
import {toThirdPartyUrl} from "~/composables/useUtils";

const route = useRoute()

const { post } = await usePostDetail(route.params.slug as string)
const resetPost = post as unknown as Post
const resGithub = await useGithubDetail(post.value.github as string)
const resGithubDetail = await useGithubReadme(post.value.github as string)
const content = atob((resGithubDetail.data.value as any).content)

const html = markdownToHtml(content)


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
  title: `${resetPost.title} - ${opt.get('site-name')}-${opt.get('site-subtitle')}`,
  meta: [
    { name: 'description',  content: post.value.title },
    { name: 'keywords', content: post.value.tags }
  ]
})
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
          <div class="w-32">
            <div class="text-sm text-slate-500">Star</div>
            <div class="text-xl">
              <n-number-animation :from="0" :to="resGithub.data.value.stargazers_count" />
            </div>
          </div>
          <div class="w-32">
            <div class="text-sm text-slate-500">Forks</div>
            <div class="text-xl">
              <n-number-animation :from="0" :to="resGithub.data.value.forks_count" />
            </div>
          </div>
          <div class="w-40">
            <div class="text-sm text-slate-500">Updated at</div>
            <div class="text-xl">
              {{ TimeAgo(new Date(resGithub.data.value.updated_at)) }}
            </div>
          </div>
          <div class="w-32">
            <div class="text-sm text-slate-500">License</div>
            <div class="text-xl">
              {{ resGithub.data.value.license.name }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <n-button block color="#ef4444" @click="toThirdPartyUrl(resGithub.data.value.homepage)">前往官网查看</n-button>
        <n-button block color="#ef4444" @click="toThirdPartyUrl(resGithub.data.value.html_url)">前往Github查看</n-button>
      </div>
    </div>

    <!--  主体内容  -->
    <div class="flex justify-between gap-10 border-t pt-10" v-if="html">
      <div class="m-format min-h-[50vh] border-r pr-10" v-html="html"></div>
<!--      <div class="w-1/4">这里是侧边</div>-->
    </div>
  </div>
</template>

<style scoped>

</style>