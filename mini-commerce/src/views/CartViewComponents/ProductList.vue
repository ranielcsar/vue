<script setup lang="ts">
import { type T_ProductOnCart } from '@/types'
import PlusIcon from '@/assets/plus-icon.vue'
import MinusIcon from '@/assets/minus-icon.vue'
import { handlePriceFormat } from '@/utils/handlePriceFormat'

function handleSubtotalValue(product: T_ProductOnCart) {
  const subtotal = product.quantityInCart * product.price
  const formatedValue = handlePriceFormat(subtotal)

  return formatedValue
}

defineProps<{
  cart: T_ProductOnCart[]
}>()
</script>

<template>
  <section
    class="my-10 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 xl:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] xl:gap-10"
  >
    <article
      class="grid h-auto grid-rows-[5rem,15rem,fit-content] rounded-lg bg-white shadow-md"
      v-for="product in cart"
      :key="product.id"
    >
      <h2 class="p-3">{{ product.name }}</h2>

      <img class="h-full w-full" :src="product.image" :alt="product.name" />

      <div class="flex h-full flex-col justify-between p-3">
        <p class="text-lg">{{ product.description }}</p>

        <div class="mt-5 flex w-full items-center justify-between">
          <div class="flex items-center gap-2">
            <button class="group">
              <PlusIcon class="h-7 w-7 group-hover:text-amber-500" />
            </button>
            <span class="text-dark rounded-full px-6 py-2 text-2xl transition-colors">
              {{ product.quantityInCart }}
            </span>
            <button class="group">
              <MinusIcon class="h-7 w-7 group-hover:text-amber-500" />
            </button>
          </div>

          <span class="w-max border-b-2 border-b-amber-500 tracking-tighter">
            {{ handleSubtotalValue(product)?.real }}
            <sub>{{ handleSubtotalValue(product)?.cents }}</sub>
          </span>
        </div>
      </div>
    </article>
  </section>
</template>
