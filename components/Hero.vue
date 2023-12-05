<template>
  <div class="p-0 md:p-4">
    <div class="relative">
      <div
        class="flex rounded-r-lg w-1/2 overflow-hidden bg-gradient-to-r from-slate-100 to-slate-200"
      >
        <img src="/avatar.png" alt="avatar" class="w-16 h-16 p-2" />
      </div>
      <div
        class="rounded-l-lg transform translate-x-20 -translate-y-8 p-4 md:p-8 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold bg-gradient-to-l from-slate-100 to-white dark:from-slate-800 dark:to-slate-900"
      >
        <h1 class="text-xl md:text-2xl">Web Developer,</h1>
        <h1 class="text-2xl md:text-3xl">Content Creator,</h1>
        <h1 class="text-3xl md:text-4xl">
          <span
            class="bg-gradient-to-r from-teal-600 to-teal-400 inline-block text-transparent bg-clip-text pb-2"
          >
            learning
          </span>
          lover.
        </h1>
        <p
          class="text-slate-600 dark:text-slate-400 font-normal pb-4 text-sm md:text-base w-3/4 md:w-full"
        >
          I’m Sudoer, a web developer and content creator based in Africa. I’m
          the co-founder of Talk The Talk, where we connect people with each
          other randomly. I mostly focus on Nuxtjs, Vuejs, Node.js, JavaScript,
          Python, Django and Supabase. I’m also interested in video games
          developement, but not so soon.
        </p>
        <SocialLinks />
      </div>
    </div>
  </div>
</template>
