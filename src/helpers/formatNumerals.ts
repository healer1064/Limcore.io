export const formatNumerals = (number: number, words: string[]): string => {
  const processedNumber = (Math.abs(number) % 100) % 10
  if (number > 10 && number < 20) {
    return words[2]
  }
  if (processedNumber > 1 && processedNumber < 5) {
    return words[1]
  }
  if (processedNumber === 1) {
    return words[0]
  }
  return words[2]
}
