<script setup lang="ts">
import {useTest} from "~/store/test";

const test = useTest()
test.value = 12333
</script>

<template>
  <div class="">
    <NuxtWelcome />
  </div>
</template>
