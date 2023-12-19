<template>
  <div class="w-full">
    <div class="p-8 lg:p-4 mb-4 rounded-lg hover:bg-slate-100 hover:dark:bg-slate-800" v-for="article in articles"
      :key="article.title">
      <nuxt-link :to="`articles/${article.slug}`" @click="postClicked = true">
        <div>
          <span class="text-slate-500 text-sm">{{ article.date }}

            <Icon v-show="postClicked" name="ei:spinner" size="15" class="text-teal-500 pb-0.5 animate-spin" />
          </span>
          <h1 class="text-slate-700 dark:text-slate-300 font-medium pt-2">
            {{ article.title }}
          </h1>
          <p class="text-slate-600 text-sm py-2">{{ article.description }}</p>
          <p class="text-teal-500 text-sm">
            Read More
            <Icon name="uil:arrow-right" size="15" />
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup>
import data from "../server/articles.json";

const articles = data;

// fake loading :)
const postClicked = ref(false);
</script>
