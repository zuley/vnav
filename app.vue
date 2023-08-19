<script setup lang="ts">
import {useFetch, useState} from "#app";
// 初始化 - 设置选项
const res = await useFetch('/api/option')
useState('options', () => res.data.value!.data)
// 初始化 - 导航分类
const termRes = await useFetch('/api/term')
useState('terms', () => termRes.data.value!.data)
</script>

<template>
  <n-message-provider>
    <NuxtLayout class="bg-stone-100 min-h-screen">
      <NuxtPage />
    </NuxtLayout>
  </n-message-provider>
</template>