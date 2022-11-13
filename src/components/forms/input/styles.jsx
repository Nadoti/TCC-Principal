import styled from "styled-components";

export const ContainerInput = styled.div`
  position: relative;

  label {
    position: absolute;
    top: 20px;
    left: 16px;
    transition: all .3s;
    pointer-events: none;
    color: #CBC8C8;
  }

  p {
    color: red;
    font-size: 14px;
    margin: 0;
    text-align: left;
    max-width: 400px;
  }

  
  
`

export const InputStyles = styled.input`
  width: 100%;
  padding: 20px;
  border: 2px solid transparent;
  outline: none;
  font-size: 14px;
  font-family: monospace;
  border-color: ${props => props.error && 'red'};
  border-radius: 20px;
  transition: all .3s ease;

  &:focus, &:hover {
    border: 2px solid #03CC71;
    border-color: ${props => props.error && 'red'};

    & + label {
      color: ${props => props.error ? 'red' : `#03CC71` };
    }
  }

  &:focus + label {
    top: 8px;
    font-size: 12px;
    color: #03CC71;
    color: ${props => props.error && 'red'}
  }

  &::placeholder {
    color: transparent;
  }

  &:not(:placeholder-shown)&:not(:focus) + label {
    font-size: 12px;
    top: 8px;
    color: #03CC71;
    color: ${props => props.error && 'red'};
  }

  &:disabled {
    background: #DDDBDB;
    outline: none;
    border: none;
    cursor: no-drop;
  }
  
`