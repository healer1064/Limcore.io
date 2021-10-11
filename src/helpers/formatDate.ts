export const formatDate = (date: string): string => {
  const option: Intl.DateTimeFormatOptions = { month: 'numeric', day: 'numeric', year: 'numeric' }
  const parseDate = new Date(date)
  return parseDate.toLocaleTimeString() + ' ' + parseDate.toLocaleDateString('ru-RU', option)
}
