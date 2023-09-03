<script setup lang="ts">
import { cartStore } from '@/stores/cart-store'
import ProductList from './CartViewComponents/ProductList.vue'
const { cart } = cartStore()
</script>

<template>
  <main class="m-auto w-full max-w-[90rem]">
    <div v-if="cart.length === 0" class="m-auto my-10 text-center">Your cart is empty 🙁</div>

    <ProductList v-else :cart="cart" />
  </main>
</template>
