export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "USD"
  }).format(price)
}