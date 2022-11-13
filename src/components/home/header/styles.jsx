import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background: url("/images/containerQuadrados.png") no-repeat center;
  height: 500px;
`

export const Nav = styled.nav`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`

export const Logo = styled.img`
  width: 70px;
  margin-top: 30px;
  cursor: pointer;
`

export const Navigation = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;

  .login {
    color: #fff;
    border: 2px solid #fff;
    padding: 10px 20px;
    border-radius: 10px;
    font-family: monospace;
    font-size: 14px;
    transition: all .3s ease;
    

    &:hover {
      background: #fff;
      color: #30845D;
      scale: 1.1;
      font-weight: bold;
    }
  }
`
export const LinkPages = styled.li`

  a {
    font-size: 18px;
    font-family: monospace;
    color: #C6C5C5;
    margin-left: 40px;
    position: relative;

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
    &::after {
      content: "";
      position: absolute;
      top: 25px;
      right: 0;
      height: 2px;
      width: 100%;
      color: #03CC71;
      background-color: #03CC71;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.6s;
    }
  }

  &:nth-last-child(2) {
    margin-right: 80px;
  }
`



export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  justify-content: space-between;
  display: flex;
  padding: 0 10px;

  /* .sa {
    margin-top: 59px;
  } */

`

export const Info = styled.div`
  margin-top: 60px;
`

export const TitleMain = styled.h1`
  font-size: 48px;
  line-height: 45px;
  color: #F0E4E4;
  font-family: Arial, Helvetica, sans-serif;

  & span {
    color: #66CB9C
  }

`

export const SubInfo = styled.p`
  font-size: 24px;
  margin-top: 20px;
  color: #C6C5C5;
`

export const Register = styled.div`
  width: 150px;
  margin: 0 auto;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    border: 2px solid #00FFA5;
    padding: 10px 20px;
    border-radius: 10px;
    transition: all .3s ease;
    font-family: monospace;
    font-weight: bold;
    font-size: 14px;
    background: #00FFA5;
    color: #30845D;

    &:hover {
      background: none;
      scale: 1.1;
      color: #00FFA5;
    }
  }

`