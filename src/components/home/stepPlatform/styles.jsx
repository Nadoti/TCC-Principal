import styled from "styled-components";


export const Container = styled.section`
  max-width: 1440px;
  margin: 200px auto auto auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 10px;
`

export const Title = styled.h3`
  font-size: 40px;
  color: #80B2A6;

  &::after {
    content: '';
      width: 50px;
      height: 2px;
      background: #BAE7DC;
      display: block;
      margin: 20px auto;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  div {
    text-align: center;
    margin-top: 80px;

    span {
      color: #1F6050;
      border: 3px solid #1F6050;
      padding: 15px;
      border-radius: 50%;
      font-size: 18px;
      font-family: monospace;
      font-weight: bold;
      
    }

    h4 {
      margin-top: 40px;
      font-size: 20px;
      color: #413F3F;
      font-family: monospace;
      font-weight: bold;
    }

    p {
      font-size: 16px;
      margin-top: 20px;
      color: #707371;
    }
  }
`

