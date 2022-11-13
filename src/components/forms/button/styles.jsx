import styled from "styled-components";


export const ButtonStyles = styled.button`
  width: 100%;
  padding: 15px;
  background: #03CC71;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  svg {
    font-size: 25px;
  }

  &:hover {
    filter: brightness(1.2);
  }
`