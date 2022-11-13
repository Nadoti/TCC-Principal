import React from "react";
import dayjs from "dayjs";


export const CalendarContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => { },
  daySelected: false,
  setDaySelected: () => { },
  selectDay: null,
  setSelectDay: (day) => { },
  dayChosen: "",
  setDayChosen: (day) => { },
  hourChosen: "",
  setHourChosen: (hour) => { }
})

export function ContextCalendarWrapper(props) {
  const [monthIndex, setMonthIndex] = React.useState(dayjs().month())
  const [daySelected, setDaySelected] = React.useState(false)
  const [selectDay, setSelectDay] = React.useState(dayjs())

  const [dayChosen, setDayChosen] = React.useState('')
  const [hourChosen, setHourChosen] = React.useState('')

  //console.log(dayjs(new Date(dayjs().year(), 13, 1)).format('DD-MM-YYYY'))

  return (
    <CalendarContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        daySelected,
        setDaySelected,
        selectDay,
        setSelectDay,
        dayChosen,
        setDayChosen,
        hourChosen,
        setHourChosen
      }}
    >
      {props.children}
    </CalendarContext.Provider>
  )
}