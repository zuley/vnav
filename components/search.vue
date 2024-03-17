<script setup lang="ts">
import {useRoute, useRouter} from "#app";

const props = defineProps<{
  name?: string
  desc?: string
}>()

const router = useRouter()
const route = useRoute()

const keyword = ref(route.query.keyword || '')
const handleSearch = () => {
  if (typeof keyword.value === 'string' && keyword.value.trim() === '') {
    router.push({ path: route.path })
    return
  }
  router.push({
    path: route.path,
    query: {
      keyword: keyword.value
    }
  })
}
</script>

<template>
  <div class="m-search">
    <div class="container mx-auto">
      <h1 class="text-3xl text-center leading-loose">
        {{ name || '聚合流行的Vue相关工具栈' }}
      </h1>
      <p class="text-center text-lg text-slate-400 mb-5">
        {{ desc || '在这里探索你所感兴趣的 Vue 相关工具栈的组件库，工具库，等等' }}
      </p>
      <div class="max-w-lg mx-auto rounded-full px-5 py-2 flex bg-zinc-700">
        <input class="border-none bg-transparent outline-none flex-1 mr-5" type="text" placeholder="搜索感兴趣的资源，回车立即搜索"
          v-model="keyword"
          @keyup.enter="handleSearch"
        />
        <div class="cursor-pointer hover:text-red-600"
           @click="handleSearch"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>