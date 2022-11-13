import styled from "styled-components";


export const Container = styled.section`
  width: 100%;
  background: #3B5C49;
  margin-top: 120px;
`


export const SubContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 10px;
`

export const ListInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;

  h3 {
    font-size: 40px;
    color: #E9EFEA;

    &:after {
      content: '';
      width: 50px;
      height: 2px;
      background: #2F4F3E;
      display: block;
      margin: 20px auto;
    }
  }

  ul {
    margin-top: 40px;
    li {
      font-size: 18px;
      margin-bottom: 30px;
      color: #CCD0CD;
      font-family: monospace;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`

export const DetailsContainer = styled.div`
  position: relative;
  height: 700px;

`

export const DetailsContent = styled.div`
  position: absolute;
  background: #D6D6D6;
  height: 720px;
  margin-top: 40px;
  border-radius: 20px;
  width: 100%;
  
  div {
    max-width: 400px;
    margin: 140px auto auto auto;
  

    p {
    color: #616161;
    font-weight: bold;
  }
  }

`

