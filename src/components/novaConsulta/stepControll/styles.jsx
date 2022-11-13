import styled from "styled-components";

export const BtnStepContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-top: 1rem;
  padding-bottom: 2rem;
`

export const BtnStepBack = styled.button`
  background: transparent;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  color: #CDCACA;
  border-radius: 0.75rem;
  font-weight: 600;
  border: 2px solid #CDCACA;
  transition: 200ms ease-in-out;
  font-family: "Roboto";
  opacity: ${props => props.currentStep === 1 ? "0.5" : ""};
  cursor: ${props => props.currentStep === 1 ? "not-allowed" : ""};

  &:hover {
    color: ${props => props.currentStep === 1 ? "" : "#fff"};
    background: ${props => props.currentStep === 1 ? "none" : "#CDCACA"};
  }
`

export const BtnStepNext = styled.button`
  background: transparent;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  color: #03CC71;
  border-radius: 0.75rem;
  font-weight: 600;
  border: 2px solid #03CC71;
  font-family: "Roboto";
  transition: 200ms ease-in-out;

  &:hover {
    background: #03CC71;
    color: #fff;
  }
`