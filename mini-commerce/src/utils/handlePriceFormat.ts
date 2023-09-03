import { convertToMonetaryValue } from './convertToMonetaryValue'

export function handlePriceFormat(price: number) {
  if (!price) return

  const splitedPrice = convertToMonetaryValue(price).split(',')

  return {
    real: splitedPrice[0],
    cents: splitedPrice[1]
  }
}
