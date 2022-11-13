import React from 'react'
import * as S from './styles'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { CalendarContext } from '../../../../context/CalendarContext';
import dayjs from 'dayjs';


export function HeaderCalendar() {

  const { monthIndex, setMonthIndex } = React.useContext(CalendarContext)


  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1)
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1)
  }

  return (
    <S.ContainerHeaderCalendar>
      <span>{dayjs(new Date(dayjs().year(), monthIndex)).locale('pt-br').format("MMMM YYYY")}</span>
      <S.ChangeMonth>
        <button onClick={handlePrevMonth}>
          <AiOutlineArrowLeft />
        </button>
        <button onClick={handleNextMonth}>
          <AiOutlineArrowRight />
        </button>
      </S.ChangeMonth>
    </S.ContainerHeaderCalendar>
  )
}
