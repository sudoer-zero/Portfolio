<template>
  <footer class="m-4 py-4 border-top border-teal-500">
    <div class="md:flex justify-between items-center">
      <SocialLinks />
      <div class="text-sm text-slate-500 dark:text-slate-400">
        © {{ new Date().getFullYear() }} Sudoer Zero. All rights reserved.
      </div>
    </div>
  </footer>
</template>
<style scoped>
.border-top {
  border-top-width: 1px;
}
</style>
