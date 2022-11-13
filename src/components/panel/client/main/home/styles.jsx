import styled from "styled-components";



export const Container = styled.section`
  max-width: 1400px;
  height: 100%;

`


export const DashboardTop = styled.div`
  padding: 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
`

export const AppointmentScheduled = styled.div`
  background: #21A980;
  width: 350px;
  padding: 5px 10px;
  border-radius: 20px;
  color: #E0EDE6;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    width: 100%;

    h2 {
      font-family: monospace;
      font-size: 24px;
    }
  }

  p {
    padding-bottom: 20px;
    font-family: monospace;
    font-size: 18px;
  }

  a {
    display: inline-block;
    font-family: monospace;
    font-size: 18px;
    background: #E0EDE6;
    padding: 10px 20px;
    border-radius: 10px;
    color: #21A980;
    font-weight: bold;
    border: none;
    transition: all .3s ease;

    &:hover {
      background: #198262;
      color: #fff;
    }
  }

`