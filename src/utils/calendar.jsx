import dayjs from 'dayjs'

export function getMonth(month = dayjs().month()) {
  const year = dayjs().year()
  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day()

  let currentMonthCount = 0 - firstDayOfMonth

  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++
      return dayjs(new Date(year, month, currentMonthCount))
    })
  })

  return daysMatrix
}

export function getHours() {
  let countHour = Number(dayjs().hour(7).format("HH"))

  let countMin = Number(dayjs().minute(30).format("mm"))

  const arrayHorario = new Array(25).fill(null).map(() => {
    countMin = countMin + 30
    return dayjs().hour(countHour).minute(countMin).second(0)
  })

  return arrayHorario
}