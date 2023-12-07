<template>
  <div class="w-full">
    <div
      class="p-8 lg:p-4 mb-4 rounded-lg hover:bg-slate-100 hover:dark:bg-slate-800"
      v-for="article in articles"
      :key="article.title"
    >
      <nuxt-link :to="`articles/${article.slug}`">
        <span class="text-slate-500 text-sm">{{ article.date }}</span>
        <h1 class="text-slate-700 dark:text-slate-300 font-medium pt-2">
          {{ article.title }}
        </h1>
        <p class="text-slate-600 text-sm py-2">{{ article.description }}</p>
        <p class="text-teal-500 text-sm">
          Read More
          <Icon name="uil:arrow-right" size="15" />
        </p>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup>
import data from "../server/articles.json";

const articles = data;
</script>
