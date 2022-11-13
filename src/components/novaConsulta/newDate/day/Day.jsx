import React from 'react'
import * as S from './styles'
import dayjs from 'dayjs'
import "dayjs/locale/pt"
import { CalendarContext } from '../../../../context/CalendarContext'

export function Day({ day, rowIdx }) {
  const { monthIndex, setDaySelected, selectDay, setSelectDay, setDayChosen, setHourChosen } = React.useContext(CalendarContext)

  const today = day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? true : false

  function daysOfTheMonth() {
    const qntDaysOfTheMonth = dayjs(new Date(dayjs().year(), monthIndex)).daysInMonth()
    let count = 1
    for (count; count <= qntDaysOfTheMonth; count++) {
      if (day.format("DD-MM-YYYY") === dayjs(new Date(dayjs().year(), monthIndex, count)).format('DD-MM-YYYY')) {
        return true
      }
    }
  }

  function handleGetDaySelected(e) {

    if (selectDay) {
      if (selectDay.format("DD-MM-YY") === day.format("DD-MM-YY")) {
        setHourChosen("")
        setDayChosen("")
        setSelectDay("")
        setDaySelected(false)
      } else {
        setDayChosen(day.format("DD/MM/YYYY"))
        setSelectDay(day)
        setDaySelected(true)
      }
    } else {
      setDayChosen(day.format("DD/MM/YYYY"))
      setSelectDay(day)
      setDaySelected(true)
    }

  }

  function getDayClass(day) {
    const format = "DD-MM-YY"
    const nowDay = dayjs().format(format)
    const currDay = day.format(format)
    const selectedDay = selectDay && selectDay.format(format)

    if (nowDay === currDay) {
      return false
    } else if (currDay === selectedDay) {
      return true
    } else {
      return false
    }

  }



  return (
    <S.ContainerDay>
      <S.ContentDay>
        {rowIdx === 0 && (
          <S.WeekOfMonth>
            {day.locale("pt-br").format("ddd").toUpperCase()}
          </S.WeekOfMonth>
        )}

      </S.ContentDay>
      <S.DayOfMonth
        id={day.locale("pt-br").format("DD/MMMM/YYYY")}
        onClick={handleGetDaySelected}
        today={today}
        daysOfTheMonth={daysOfTheMonth()}
        getDayClass={getDayClass(day)}
      >
        {day.format("DD")}
      </S.DayOfMonth>
    </S.ContainerDay>
  )
}
