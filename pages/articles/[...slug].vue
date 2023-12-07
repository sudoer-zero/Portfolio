<template>
  <button
    @click="$router.go(-1)"
    class="p-2 mx-4 mt-8 rounded-full bg-teal-500 text-slate-100 dark:text-slate-800"
  >
    <Icon name="uil:arrow-left" size="30" />
  </button>
  <main class="p-4 lg:w-5/6 mx-auto">
    <ContentDoc />
  </main>
</template>
