import styled from 'styled-components'


export const ContainerHours = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
`

export const ContentHours = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-width: 400px;
  height: 350px;
  gap: 2rem;

  &::-webkit-scrollbar {
    width: 18px;
  }

  &::-webkit-scrollbar-thumb {
    background: #21A980;
    border-left: 4px solid #E0EDE6;
    border-right: 4px solid #E0EDE6;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #E0EDE6;
  }
  

  p {
    
  }
`

export const Hour = styled.button`
  font-size: 1.5rem;
  background: ${props => props.hourSelected ? "#B4E4CA" : "none"};
  border: none;
  font-family: 'Roboto';
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all .2s ease;
  
  &:hover {
    background: #B4E4CA;
  }
`