<template>
  <div>
    <div class="flex space-x-4">
      <div v-for="image in images" :key="image">
        <img :src="`/Name/${image}`" class="-rotate-2" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
const images = ["o.png", "s.png", "a.png", "m.png", "a.png"];
</script>
