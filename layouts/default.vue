<template>
  <div class="flex flex-col bg-white dark:bg-zinc-900">
    <base-header />
    <div class="flex-grow flex">
      <div class="w-60 leading-8 border-r border-slate-100 dark:border-zinc-700">
        <TermBox />
      </div>
      <div class="flex-1 py-4 px-6">
        <slot />
      </div>
    </div>
    <Footer />
  </div>
</template>