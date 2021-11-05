export const formatPhoneNumber = (input) => {
  if (!input || isNaN(input)) {
    return ''
  }
  if (typeof input !== 'string') {
    input = input.toString()
  }

  return input.replace(/(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1-$2-$3-$4-$5')
}
