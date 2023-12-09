<template>
  <div>
    <div class="p-4">
      <div class="my-10">
        <h1
          class="text-slate-700 dark:text-slate-300 font-bold text-3xl md:text-5xl"
        >
          Writing on software development, developer tools, and other
          curiosities.
        </h1>
        <p class="mt-4 text-slate-600 dark:text-slate-400">
          All of my thoughts on programming, projects, architecture, and more,
          collected in chronological order.
        </p>
      </div>
      <div v-for="article in articles" :key="article.title">
        <div class="grid grid-cols-12 gap-2 md:gap-4">
          <h1
            class="text-slate-500 text-sm px-4 md:py-4 col-span-12 md:col-span-3 justify-self-start md:justify-self-center"
          >
            <Icon name="gg:time" size="15" /> {{ article.date }}
          </h1>
          <div
            class="col-span-12 md:col-span-9 border-b-2 border-slate-200 dark:border-slate-700 mb-8 hover:bg-slate-100 hover:dark:bg-slate-800 p-4 rounded-lg shadow-lg"
          >
            <nuxt-link :to="`/articles/${article.slug}`">
              <div>
                <h2 class="text-slate-700 dark:text-slate-300 font-bold pb-2">
                  {{ article.title }}
                </h2>
                <p
                  class="text-sm font-normal text-slate-600 dark:text-slate-400 pb-8"
                >
                  {{ article.description }}
                </p>
                <p class="text-teal-500 text-sm flex justify-between">
                  Read more
                  <span>
                    <Icon
                      size="15"
                      v-for="icon in article.icons"
                      :key="icon"
                      :name="icon"
                    />
                  </span>
                </p>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import data from "../server/articles.json";

const articles = data;
</script>
