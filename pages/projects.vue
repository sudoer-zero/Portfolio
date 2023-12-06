<template>
  <div class="p-4 mt-10">
    <h1 class="text-5xl lg:w-5/6 font-bold text-slate-700 dark:text-slate-300">
      Things I’ve made and working on...
    </h1>
    <p class="my-8 text-slate-600 dark:text-slate-400">
      I’ve worked on tons of little projects over the years, but these are the
      ones I’m most proud of. Many of them are open-source, so if you see
      something that piques your interest, check out the code and contribute if
      you have ideas for how it can be improved.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div class="w-full" v-for="project in data" :key="project.title">
        <div
          class="p-6 mb-4 rounded-lg hover:bg-slate-100 hover:dark:bg-slate-800"
        >
          <a :href="project.url" target="_blank">
            <img
              :src="/works/ + project.logo"
              alt=""
              class="w-14 h-14 p-1 rounded-full border-2 border-slate-200 dark:border-slate-700"
            />
            <h3 class="text-slate-700 dark:text-slate-300 font-bold py-2">
              {{ project.title }}
            </h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm">
              {{ project.description }}
            </p>
            <div class="flex justify-between items-center pt-4">
              <span
                class="text-slate-500 dark:text-slate-400 hover:text-teal-500 hover:dark:text-teal-500 text-xs flex items-center px-2"
              >
                <Icon name="uil:link" size="15" class="mr-2" />{{
                  project.url.substring(8, 50)
                }}
              </span>

              <div>
                <span class="pt-4" v-for="tool in project.tools" :key="tool">
                  <Icon
                    :name="`${tool}`"
                    size="15"
                    class="text-slate-500 dark:text-slate-400 mr-2"
                  />
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import projects from "../server/projects.json";
const data = projects;
</script>
