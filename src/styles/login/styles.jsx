import styled from 'styled-components'





export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background: #E0EDE6;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;

`

export const ImgContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

`

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`

export const LoginContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    cursor: pointer;
    margin-bottom: 40px;
  }

  p {
    font-size: 18px;
    font-family: sans-serif;
    color: #969997;
    margin-top: 20px;
    

    a {
      text-decoration: underline;
      color: #21A980;
      transition: all .2s ease;

      &:hover {
        color: #000;
      }
    }
  }
  
`


export const ContentLogin = styled.div`
  border: 2px solid #B4E4CA;
  border-radius: 20px;

  h2 {
    font-size: 40px;
    font-family: sans-serif;
    color: #21A980;
    padding: 40px 80px 0 20px;
    margin-bottom: 20px;
  }

  span {
    font-size: 20px;
    padding: 40px 80px 0 20px;
    color: #969997;
  }

  
`

export const ContentRouter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 40px;
  
  a {
    width: 100%;
    text-align: center;
    padding: 15px;
    font-size: 18px;
    font-family: sans-serif;
    font-weight: bold;
    transition: all .3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  a:first-child {
    background: #263238;
    border-radius: 0 0 0 10px;
    color: #fff;
    

    &:hover {
      scale: 1.1;
      border-radius: 0;
    }
  }

  a:last-child {
    background: #21A980;
    color: #fff;
    border-radius: 0 0 10px 0;

    &:hover {
      scale: 1.1;
      border-radius: 0;
    }
  }

`



















/*
export const Container = styled.main`
  background: #E0EDE6;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  img {
    margin-bottom: 40px;
    cursor: pointer;
  }
`

export const ContainerInputLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  box-shadow: 0 0 16px 2px rgba(0,0,0,0.25);
  border-radius: 20px;

  h2 {
      padding: 100px 100px 20px 100px;
      font-size: 30px;
      font-family: sans-serif;
      color: #707371;
    }

  div {
    display: flex;
    flex-direction: column;

    a {
      width: 100%;
      padding: 10px 60px;
      font-size: 20px;
      font-family: sans-serif;
      margin-bottom: 40px;
      font-weight: bold;
      display: flex;
      align-items: center;
      transition: all .3s ease;

      svg {
        margin-right: 20px;
      }

      &:first-child {
        border-bottom: 2px solid #969997;
        padding-bottom: 40px;
        color: #1F6050;
      }

      &:last-child {
        color: #21A980;
      }

      &:hover {
        text-decoration: underline;
      }
    }
    
  }
`
*/