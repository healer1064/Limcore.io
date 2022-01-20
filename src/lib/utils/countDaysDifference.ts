/* eslint-disable no-unused-expressions */
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'

export const countDaysDifference = () => {
  let difference = differenceInCalendarDays(1647810000000, new Date())
  difference > 80 ? (difference = 80) : difference
  return difference < 0 ? 0 : difference
}
