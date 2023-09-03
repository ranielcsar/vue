export type T_ProductProps = {
  id: string
  name: string
  image: string
  quantity: number
  description: string
  price: number
  category: T_ProductCategory
}

export type T_ProductOnCart = T_ProductProps & {
  quantityInCart: number
}

export type T_ProductCategory = 'shoes' | 'sandals' | 'shirts' | 'skirts'
