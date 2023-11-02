export type T_ProductProps = {
  id: string
  title: string
  images: string[]
  quantity: number
  description: string
  price: number
  category: string
}

export type T_ProductOnCart = T_ProductProps & {
  quantityInCart: number
}
