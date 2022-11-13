import styled from "styled-components";


export const ContainerHeaderCalendar = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.125rem;
  margin-bottom: 1rem;

  span {
    font-size: 1.25rem;
    font-family: "Roboto";
    font-weight: bold;
    color: #ACBDB4;
  }
`

export const ChangeMonth = styled.div`
  display: flex;
  gap: 2rem;

  button {
    background: none;
    border: none;
    font-size: 1.125rem;
    padding: 0.25rem;
    color: #7D7B7B;
  }
`