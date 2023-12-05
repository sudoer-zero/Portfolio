<template>
  <div>
    <nav>
      <ul
        class="flex gap-4 py-2 px-4 text-sm font-medium text-slate-700 dark:text-slate-300 rounded-full border-2 border-slate-200 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 shadow-md"
      >
        <li
          v-for="link in links"
          :key="link.name"
          :class="{ 'text-teal-500': activeLink === link.link }"
          class="px-0 md:px-4 hover:text-teal-600"
        >
          <nuxt-link :to="link.link" @click="setActiveLink(link.link)">{{
            link.name
          }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const links = [
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Articles",
    link: "/articles",
  },
  {
    name: "Uses",
    link: "/uses",
  },
  {
    name: "About",
    link: "/about",
  },
];
const activeLink = ref(null);

const setActiveLink = (link) => {
  activeLink.value = link;
};
</script>

<style scoped>
button {
}
</style>
