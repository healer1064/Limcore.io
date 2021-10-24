export const parseNum = (val) => val.replace(/[^0-9]/g, '')
export const isNumbersOnly = (val: string): boolean => /^\d+$/.test(parseNum(val))
