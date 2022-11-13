import React from 'react'
import { CalendarContext } from '../../../../context/CalendarContext'
import * as S from './styles'

export default function DayHourChosen() {

  const { dayChosen, hourChosen } = React.useContext(CalendarContext)

  return (
    <S.ContainerDayHourChosen>
      <span>{dayChosen}</span>
      <span>{hourChosen}</span>
    </S.ContainerDayHourChosen>
  )
}
