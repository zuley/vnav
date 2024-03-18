<template>
  <div class="flex flex-col bg-zinc-900 text-white">
    <base-header />
    <div class="flex-grow flex">
      <div class="w-60 leading-8 border-r border-slate-100 border-zinc-700">
        <TermBox />
      </div>
      <div class="flex-1 py-4 px-6">
        <slot />
      </div>
    </div>
    <Footer />
  </div>
</template>