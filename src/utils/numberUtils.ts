export function formatCurrency(value: number) {
  return Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
    maximumFractionDigits: 2,
  }).format(value)
}
