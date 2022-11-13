import styled from "styled-components";


export const Container = styled.section`
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  margin-top: 160px;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 10px;
`

export const Content = styled.div`
  text-align: center;
  max-width: 600px;

  h2 {
    font-size: 32px;
    color: #707371;
    margin-bottom: 30px;

    &::after {
      content: '';
      width: 50px;
      height: 2px;
      background: #D9D9D9;
      display: block;
      margin: 20px auto;
    }
  }

  div {
    max-width: 600px;
  }

  p {
    text-align: center;
    font-size: 20px;
    color: #A8A4A4;
    font-family: monospace;
  }

`