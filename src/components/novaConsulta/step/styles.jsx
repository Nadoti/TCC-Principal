import styled from "styled-components"



export const StepContainer = styled.div`
margin: 0 1rem;
padding: 1rem;
display: flex;
justify-content: space-between;
align-items: center;
`





export const StepContent = styled.section`
display: flex;
align-items: center;
width: ${props => props.index !== props.newStep.length -1 ? "100%" : ""};
`

export const StepNumberTitleContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
color: #30845D;
`

export const StepNumbers = styled.div`
border-radius: 100%;
color: ${props => props.valStep.completed ? "#000" : "#30845D"};
transition: .5s ease-in-out;
border: 2px solid ${props => props.valStep.completed ? "#00FFA5" : "#30845D"};
height: 3rem;
width: 3rem;
display: flex;
align-items: center;
justify-content: center;
font-family: "Roboto";
font-weight: bold;
background: ${props => props.valStep.completed ? "#00FFA5" : "#fff"};
`

export const StepTitle = styled.div`
position: absolute;
top: 0;
text-align: center;
margin-top: 4rem;
width: 8rem;
font-size: 0.75rem;
line-height: 1rem;
text-transform: uppercase;
font-weight: bold;
font-family: 'Roboto';
`

export const StepLine = styled.div`
content: "";
width: 100%;
height: 3px;
transition: 500ms ease-in-out;
background: ${props => props.valStep.completed ? "#00FFA5" : "#fff"};
`