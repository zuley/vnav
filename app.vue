<script setup lang="ts">
import {useFetch, useState} from "#app";
const res = await useFetch('/api/option')
useState('options', () => res.data.value!.data)
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>