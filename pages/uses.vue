<template>
  <div class="p-4 w-full lg:w-3/4 mx-auto">
    <div class="my-10">
      <h1
        class="text-slate-700 dark:text-slate-300 font-bold text-3xl md:text-5xl"
      >
        Software I use, programming languages I adore, and other things I
        recommend.
      </h1>
      <p class="mt-4 text-slate-600 dark:text-slate-400">
        I get asked a lot about the things I use to build software and stay
        productive. Here’s a big list of all of my favourite stuff.
      </p>
    </div>
    <div v-for="use in uses" :key="use.title">
      <div class="grid grid-cols-12 gap-4 font-bold text-sm">
        <h1
          class="text-slate-700 dark:text-slate-300 px-4 col-span-4 md:col-span-2 justify-self-center"
        >
          {{ use.title }}
        </h1>
        <div
          class="col-span-8 md:col-span-10 border-b-2 border-slate-200 dark:border-slate-700 mb-8"
        >
          <div v-for="(item, index) in use.data" :key="index" class="pb-8">
            <h2 class="text-slate-700 dark:text-slate-300 pb-2">
              {{ item.Name }}
            </h2>
            <p
              class="text-sm font-normal text-slate-600 dark:text-slate-400 pb-8"
            >
              {{ item.Description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import data from "../server/uses.json";
const uses = [
  { title: "Programming Languages", data: data.ProgrammingLanguages },
  { title: "Web Technologies", data: data.WebTechnologies },
  { title: "Operating Systems", data: data.OperatingSystems },
  { title: "Development Tools", data: data.DevelopmentTools },
];
</script>
