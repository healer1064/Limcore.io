/* eslint-disable no-unused-expressions */
export const countDaysBetween = (dateStart, dateEnd) => {
  const diffTime = Math.abs(dateEnd - dateStart)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}
