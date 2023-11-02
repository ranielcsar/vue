<script setup lang="ts">
import { api } from '@/services/api'
import { type T_ProductProps } from '@/types'
import { onMounted, ref } from 'vue'
import ProductList from './HomeViewComponents/ProductList.vue'

const products = ref<T_ProductProps[]>([])

async function getProducts() {
  try {
    const response = await api.get('/products')
    const data = await response.data

    products.value = data.products
  } catch (error) {
    console.error(error)
  }
}

onMounted(getProducts)
</script>

<template>
  <main class="m-auto w-full max-w-[90rem]">
    <ProductList :products="products" />
  </main>
</template>
