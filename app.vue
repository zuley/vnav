<script setup lang="ts">
import {useFetch, useState} from "#app";
const res = await useFetch('/api/option')
useState('options', () => res.data.value!.data)
</script>

<template>
  <n-message-provider>
    <NuxtLayout class="bg-stone-100 min-h-screen">
      <NuxtPage />
    </NuxtLayout>
  </n-message-provider>
</template>