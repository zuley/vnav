<template>
  <div class="flex flex-col bg-white dark:bg-slate-900">
    <base-header />
    <div class="flex-grow">
      <slot />
    </div>
    <Footer />
  </div>
</template>