<script setup lang="ts">
import {useTest} from "~/store/test";
import { NButton } from 'naive-ui'

const test = useTest()
test.value = 12333
</script>

<template>
  <div class="">
    <n-button type="primary">dddd</n-button>
    <NuxtWelcome />
  </div>
</template>
