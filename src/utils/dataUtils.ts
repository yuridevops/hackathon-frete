export const formatDate = (date: Date) => {
  const formatedDate = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })

  return formatedDate
}
