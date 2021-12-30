/* eslint-disable no-unused-expressions */
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'

export const countDaysDifference = () => {
  let difference = differenceInCalendarDays(new Date('2022, 3, 21'), new Date())
  difference > 80 ? (difference = 80) : difference
  return difference < 0 ? 0 : difference
}
