import React from "react"
import { getMonth } from "../../../utils/calendar"
import { Day } from "./day/Day"
import * as S from './styles'
import "dayjs/locale/pt"
import { HeaderCalendar } from "./headerCalendar/HeaderCalendar"
import { CalendarContext } from "../../../context/CalendarContext"
import { Hours } from "./hours/Hours"
import DayHourChosen from "./dayHourChosen/DayHourChosen"


export function NewDate() {
  const [currentMonth, setCurrentMonth] = React.useState(getMonth())

  const { monthIndex, daySelected, dayChosen } = React.useContext(CalendarContext)


  React.useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])


  return (
    <S.ContainerNewDate>
      <S.Calendar>
        <HeaderCalendar />
        <S.ContainerCalendar>
          {currentMonth.map((row, i) => (
            <React.Fragment key={i}>
              {row.map((day, idx) => (
                <Day
                  day={day}
                  key={idx}
                  rowIdx={i}
                />
              ))}
            </React.Fragment>
          ))}
        </S.ContainerCalendar>
      </S.Calendar>
      {daySelected && <Hours />}
      {dayChosen !== "" ? (<DayHourChosen />) : ""}
    </S.ContainerNewDate>

  )
}