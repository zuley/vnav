<script setup lang="ts">
import {useFetch, useState} from "#app";
const res = await useFetch('/api/option')
useState('options', () => res.data.value!.data)
</script>

<template>
  <NuxtLayout class="bg-stone-100 min-h-screen">
    <NuxtPage />
  </NuxtLayout>
</template>