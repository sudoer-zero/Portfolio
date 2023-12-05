<template>
  <div>
    <nav>
      <ul
        class="flex gap-4 py-2 px-4 text-sm font-medium text-slate-700 dark:text-slate-300 rounded-full border-2 border-slate-200 dark:border-slate-700"
      >
        <li :class="{ 'text-teal-500': activeLink === 'projects' }">
          <nuxt-link to="/projects" @click="setActiveLink('projects')"
            >Projects</nuxt-link
          >
        </li>
        <li :class="{ 'text-teal-500': activeLink === 'articles' }">
          <nuxt-link to="/articles" @click="setActiveLink('articles')"
            >Articles</nuxt-link
          >
        </li>
        <li :class="{ 'text-teal-500': activeLink === 'uses' }">
          <nuxt-link to="/uses" @click="setActiveLink('uses')">Uses</nuxt-link>
        </li>
        <li :class="{ 'text-teal-500': activeLink === 'about' }">
          <nuxt-link to="/about" @click="setActiveLink('about')"
            >About</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const activeLink = ref(null);

const setActiveLink = (link) => {
  activeLink.value = link;
};
</script>

<style scoped>
button {
}
</style>
