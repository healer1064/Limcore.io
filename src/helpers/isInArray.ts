export const isInArray = (id: string, arr: Array<any>) => {
  if (arr.some((e) => e.id === id)) {
    return true
  }
  return false
}
