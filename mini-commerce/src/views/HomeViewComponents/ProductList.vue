<script setup lang="ts">
import { type T_ProductProps } from '@/types'
import { cartStore } from '@/stores/cart-store'
import { handlePriceFormat } from '@/utils/handlePriceFormat'

const { addToCart } = cartStore()

defineProps<{
  products: T_ProductProps[]
}>()
</script>

<template>
  <section
    class="my-10 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 xl:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] xl:gap-10"
  >
    <article
      class="grid h-auto grid-rows-[5rem,15rem,fit-content] rounded-lg bg-white shadow-md"
      v-for="product in products"
      :key="product.id"
    >
      <h2 class="p-3">{{ product.title }}</h2>

      <img class="h-full w-full" :src="product.images[0]" :alt="product.title" />

      <div class="flex h-full flex-col justify-between p-3">
        <p class="text-lg">{{ product.description }}</p>

        <div class="mt-5 flex w-full items-center justify-between">
          <button
            :disabled="product.quantity === 0"
            @click="() => addToCart(product)"
            class="rounded-md bg-amber-500 px-6 py-2 text-2xl text-white transition-colors hover:bg-amber-700 disabled:bg-zinc-400"
          >
            {{ product.quantity === 0 ? 'Out of order' : 'Order' }}
          </button>

          <span class="w-max border-b-2 border-b-amber-500 tracking-tighter">
            {{ handlePriceFormat(product.price)?.real }}
            <sub>{{ handlePriceFormat(product.price)?.cents }}</sub>
          </span>
        </div>
      </div>
    </article>
  </section>
</template>
