<template>
  <div class="w-full md:w-3/4 lg:w-full mx-auto p-4 border-2 border-slate-200 dark:border-slate-700 rounded-lg">
    <h1 class="flex items-center font-bold text-slate-700 dark:text-slate-300 my-4 mx-2">
      <Icon name="uil:bag" size="25" class="text-slate-500 mr-3" /> Works
    </h1>
    <div class="flex items-center" v-for="work in data" :key="work.company">
      <div class="border-2 border-slate-200 dark:border-slate-700 rounded-full p-1">
        <img :src="/works/ + work.logo" alt="" class="w-8 h-8" />
      </div>
      <div class="w-full my-3">
        <h1 class="text-slate-700 dark:text-slate-300 font-bold text-sm ml-2">
          {{ work.company }}
        </h1>
        <div class="flex justify-between px-2 py-1">
          <span class="text-slate-500 dark:text-slate-400 text-xs">{{
            work.role
          }}</span>

          <span class="text-slate-500 dark:text-slate-400 text-xs">

            <Icon name="gg:time" size="15" class="text-slate-500 dark:text-slate-400 pb-0.5" />
            {{
              work.tsp
            }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import works from "../server/works.json";

const data = works;
</script>
