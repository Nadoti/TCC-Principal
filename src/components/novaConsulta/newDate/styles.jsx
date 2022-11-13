import styled from "styled-components";

export const ContainerNewDate = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 200px;
  align-items: flex-start;
`

export const Calendar = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  text-align: center;
`

export const ContainerCalendar = styled.main`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-template-rows: repeat(5, minmax(1fr));
`
