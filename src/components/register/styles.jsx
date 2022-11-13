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

export const RegisterContainer = styled.div`
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