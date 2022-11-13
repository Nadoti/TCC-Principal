import styled from "styled-components";




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
  }
  
`

export const ContentLoginUser = styled.div`
  text-align: center;
  padding: 100px 100px 20px 100px;
  border: 2px solid #B4E4CA;
  border-radius: 20px;
  margin-top: 40px;
  position: relative;

  h2 {
    font-size: 40px;
    font-family: sans-serif;
    color: #03CC71;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    font-family: sans-serif;
    color: #ACBDB4;
    margin-bottom: 60px;
  }

`

export const Back = styled.span`
  a {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 30px;
    color: #03CC71;
    border: 1px solid #03CC71;
    margin-left: 20px;
    margin-top: 20px;
    padding: 10px;
    display: flex;
    border-radius: 50%;

    &:hover {
      filter: brightness(1.2);
      scale: 1.1;
    }
  }
`

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  input, button {
    border-radius: 10px;
  }

`

export const Register = styled.p`
  margin-top: 20px;
  font-family: sans-serif;

  a {
    text-decoration: underline;
    color: #21A980;
    transition: all .2s ease;

    &:hover {
      color: #6C887B;
    }
  }
`