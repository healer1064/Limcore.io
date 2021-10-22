import moment from 'moment'

export const getMonth = (date) => {
  moment.locale('ru', { week: { dow: 1 } })

  const day = new Date(date.year, date.month - 1)
  const dayWrapper = moment(day)

  const nameMonth = dayWrapper.format('MMMM')

  const startMonth = dayWrapper.clone().startOf('month').startOf('week')
  const endMonth = dayWrapper.clone().endOf('month').endOf('week')

  const startDay = startMonth.clone()

  const month = [{ name: nameMonth, days: [] }]

  while (!startDay.isAfter(endMonth)) {
    const data = { month: null, day: null }

    data.month = Number(startDay.clone().format('M'))
    data.day = startDay.clone().format('D')

    month[0].days.push(data)

    startDay.add(1, 'day')
  }

  return month
}
