import React from 'react'
import * as S from './styles'

export function Step({steps, currentStep}) {

  const [newStep, setNewStep] = React.useState([])
  const stepsRef = React.useRef()

  function updateStep(stepNumber, steps) {
    const newSteps = [...steps]
    let count = 0

    while(count < newSteps.length) {
      if(count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: false,
        }
        count++
      } 
      else if(count < stepNumber) {
        
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        }
        count++
      } 
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        }
        count++
      }
    }
    return newSteps
  }

  React.useEffect(() => {
    const stepsState = steps.map((step, index) => 
      Object.assign({}, {
        description: step,
        completed: false,
        highlighted: index === 0 ? true: false,
        selected: index === 0 ? true : false,
      })
    )
    
    stepsRef.current = stepsState
    const current = updateStep(currentStep -1, stepsRef.current)
    
    setNewStep(current)
  },[steps, currentStep])

  return (
    <S.StepContainer>
      {newStep.map((valStep, index) => (
        <S.StepContent key={index} index={index} newStep={newStep}>
          <S.StepNumberTitleContainer>
            <S.StepNumbers valStep={valStep}>
              {valStep.completed ? <span>✓</span> : (index +1)}
            </S.StepNumbers>
            <S.StepTitle>
              <span>{valStep.description}</span>
            </S.StepTitle>
          </S.StepNumberTitleContainer>
          <S.StepLine valStep={valStep}></S.StepLine>
        </S.StepContent>
      ))}
    </S.StepContainer>
  )
}