<script setup lang="ts">
import BagHeart from '@/assets/bag-heart.vue'
import { cartStore } from '@/stores/cart-store'
import { RouterLink } from 'vue-router'

const { totalItens } = cartStore()
</script>

<template>
  <header class="header-container">
    <section class="header-content">
      <RouterLink to="/" class="flex items-center gap-2">
        <div class="h-12 w-12 rounded-full bg-zinc-600"></div>
        <p class="text-2xl"><span class="text-amber-500">Mini</span>Commerce</p>
      </RouterLink>

      <nav>
        <RouterLink to="/cart" class="cart-link">
          <BagHeart class="h-7 w-7" /> <span class="text-xl">{{ totalItens }}</span>
        </RouterLink>
      </nav>
    </section>
  </header>
</template>

<style>
.header-container {
  @apply sticky top-0 z-20 flex w-full bg-white shadow-sm;
}

.header-content {
  @apply m-auto flex w-full max-w-[90rem] items-center justify-between py-4;
}

.cart-link {
  @apply group flex items-center gap-2 rounded-full p-2 transition-colors hover:bg-amber-500 hover:text-white;
}
</style>
