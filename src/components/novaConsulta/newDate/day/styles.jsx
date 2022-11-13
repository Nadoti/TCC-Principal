import styled from "styled-components";


export const ContainerDay = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ContentDay = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const WeekOfMonth = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;
  margin-top: 0.25rem;
  font-weight: bold;
  font-family: "Roboto";
  color: #21A980;
`

export const DayOfMonth = styled.p`
  height: 40px;
  width: 40px;
  font-size: 0.875;
  line-height: 1.25rem;
  padding: 0.5rem;
  margin: 1rem 0;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  transition: .2s ease-in-out;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.today ? "#21A980" : ""};
  color: ${props => props.today ? "#fff" : "#585656"};
  color: ${props => !props.daysOfTheMonth ? "#B1AEAE" : ""};
  color: ${props => props.getDayClass ? "#21A980" : ""};
  background: ${props => props.getDayClass ? "#B4E4CA" : ""};

  &:hover {
    background: #B4E4CA;
  }

`