import { type T_ProductOnCart, type T_ProductProps } from '@/types'
import create from 'vue-zustand'
import { ref, watch } from 'vue'

export const cartStore = create(() => {
  const cart = ref<T_ProductOnCart[]>([])
  const totalItens = ref(0)

  watch(cart, () => {
    totalItens.value = cart.value.reduce((total, product) => {
      return total + product.quantityInCart
    }, 0)
  })

  function addToCart(newProduct: T_ProductProps) {
    const newCart = cart.value.slice()
    const existingProduct = newCart.find((product) => newProduct.id === product.id)

    if (existingProduct) {
      cart.value = newCart.map((product) => {
        if (newProduct.id === product.id) {
          return {
            ...product,
            quantityInCart: product.quantityInCart + 1
          }
        }

        return product
      })

      return
    }

    newCart.push({ ...newProduct, quantityInCart: 1 })

    cart.value = newCart
  }

  function removeFromCart(id: T_ProductProps['id']) {
    const cartCopy = cart.value.slice()

    const newCart = cartCopy.filter((product) => product.id !== id)

    cart.value = newCart
  }

  return { cart, addToCart, removeFromCart, totalItens }
})
