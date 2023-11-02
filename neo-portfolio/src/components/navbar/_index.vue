<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/projetos">Projetos</router-link>
      <router-link to="/experiencias">Experiências</router-link>
      <router-link to="/curriculo">Currículo</router-link>
    </nav>
  </footer>
</template>

<style scoped>
footer {
  @apply fixed bottom-0 bg-white w-full z-30;
  @apply lg:bottom-5 lg:bg-transparent;
}

nav {
  @apply flex items-center relative border-t-4 border-black lg:border-4 lg:w-1/2 bg-white lg:m-auto;
}

nav a {
  @apply py-3 px-1 flex-[0.5] truncate text-center text-xl transition-all;
  @apply [&:not(:last-child)]:border-r-4 border-black;
}

.active-link {
  @apply flex-1 bg-electric-blue text-black;
}
</style>
