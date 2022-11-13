import React from 'react'
import { CalendarContext } from '../../../../context/CalendarContext'
import { getHours } from '../../../../utils/calendar'
import * as S from "./styles"

export function Hours() {
  const { setHourChosen } = React.useContext(CalendarContext)
  const hours = getHours()
  const [selectHour, setSelectHour] = React.useState(true)



  function hourSelected(hour) {
    return selectHour === hour
  }

  function handleGetHourSelected(e) {
    if (selectHour === e.target.id) {
      setHourChosen('')
      setSelectHour('')
    } else {
      setHourChosen(e.target.id)
      setSelectHour(e.target.id)
    }

  }

  return (
    <S.ContainerHours>
      <S.ContentHours>
        {hours.map((hour) => (
          <S.Hour
            key={hour}
            id={hour.format("HH:mm:ss")}
            onClick={handleGetHourSelected}
            hourSelected={hourSelected(hour.format("HH:mm:ss"))}
          >
            {hour.format("HH:mm:ss")}
          </S.Hour>
        ))}
      </S.ContentHours>
    </S.ContainerHours>
  )
}
