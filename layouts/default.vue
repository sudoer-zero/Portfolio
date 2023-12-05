<template>
  <div
    :class="{ 'dark-mode': $root.darkMode }"
    class="w-full sm:w-2/3 md:w-3/4 lg:w-3/4 xl:w-1/2 mx-auto"
  >
    <nav class="flex justify-between items-center p-4">
      <nuxt-link to="/">
        <img
          src="/logo.png"
          alt="logo"
          class="w-14 h-14 bg-teal-500 rounded-full p-2"
        />
      </nuxt-link>
      <NavBar />
      <div
        @click="toggleDarkMode"
        class="pointer-cursor rounded-full p-2 flex bg-slate-200 dark:bg-slate-700 border-2"
        :class="darkMode ? 'border-yellow-600' : 'border-teal-600'"
      >
        <Icon
          v-if="darkMode"
          name="uil:sun"
          class="text-black dark:text-white"
          size="20"
        />
        <Icon
          v-else
          name="uil:moon"
          class="text-black dark:text-white"
          size="20"
        />
      </div>
    </nav>
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
const darkMode = ref(false);
const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark");
  document.body.classList.toggle("bg-slate-900");
  darkMode.value = !darkMode.value;
};

watch(darkMode, (newValue) => {
  document.documentElement.classList.toggle("dark", newValue);
});
</script>

<style scoped>
.dark-mode {
  background-color: #1a202c;
  color: #ffffff;
}
</style>
