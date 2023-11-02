<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from '@/components/header/_index.vue'
import Navbar from '@/components/navbar/_index.vue'
import Background from '@/components/background/_index.vue'
</script>

<template>
  <div class="relative flex h-full flex-col gap-10">
    <main-header />

    <main class="relative m-auto flex-1 pb-24 xl:max-w-[90rem]">
      <div class="z-20 px-4">
        <RouterView />
      </div>
    </main>

    <navbar />
  </div>

  <background />
</template>

<style></style>
