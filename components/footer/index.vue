<script setup lang="ts">
const opt = useOption()
</script>

<template>
  <div class="text-center py-3 border-t border-zinc-700">
    <h4 class="text-gray-400">
      版权所有@VNAV -
      <a href="https://beian.miit.gov.cn" target="_blank" rel="nofollow">{{ opt.get('site-beian') }}</a>
    </h4>
  </div>
</template>

<style scoped>

</style>