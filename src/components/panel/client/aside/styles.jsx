import styled from "styled-components";

export const Painel = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #21A980;
  padding: 40px 0;
  
  nav {
    width: 100%;
  }
`

export const Logo = styled.img`
  background: #EDF3EE;
  padding: 10px;
  border-radius: 10px;
  margin: 0 10px;
`

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  span {
    font-family: sans-serif;
    font-size: 18px;
    color: #DEE1E0;
  }
`

export const Photo = styled.img`
  max-width: 60px;
  
`

export const ListaNavigation = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;

  a {
    width: 100%;
  }
`

export const LinksNavigation = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  font-size: 18px;
  font-family: monospace;
  font-weight: bold;
  color: #3E403F;
  transition: all .3s ease;
  padding: 1rem 0;
  
  @media (max-width: 1536px) {
    padding: 8px 0;
  }

  &:hover {
    background: #0F7B5B;
    color: #fff;
    
    &::after {
      content: '';
      width: 10px;
      height: 100%;
      background: #68CDAF;
      position: absolute;
      top: 0;
      right: 0;
      
    }
  }

  &.active {
    background: #0F7B5B;
    color: #fff;
    
    &::after {
      content: '';
      width: 10px;
      height: 100%;
      background: #68CDAF;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`

export const ButtonLoggof = styled.button`
  background: #21A980;
  display: flex;
  align-items: center;
  padding: 10px 40px;
  font-size: 18px;
  font-family: monospace;
  font-weight: bold;
  gap: 10px;
  border-radius: 10px;
  border: none;
  transition: all .3s ease;

  &:hover {
    background: #198262;
    color: #fff;
  }
  
  
`