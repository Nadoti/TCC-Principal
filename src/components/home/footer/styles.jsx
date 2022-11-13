import styled from "styled-components";


export const Container = styled.section`
  width: 100%;
  background: linear-gradient(94.52deg, #3B5C49 39.1%, #2D9063 99.45%);
  margin-top: 120px;
`

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 20px;


  span {
    color: #ACA4A4;
  }
`

export const InfoCompany = styled.div`

  h6 {
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    color: #ACA4A4;
  }

  ul {
    margin-top: 10px;

    li {
      margin-bottom: 5px;
      color: #D2D2D2;
    }
  }

`