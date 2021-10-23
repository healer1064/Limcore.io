export const isNumbersOnly = (val: string): boolean => /^\d+$/.test(val.replace(/[^0-9]/g, ''))
