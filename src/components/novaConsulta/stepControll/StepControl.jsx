import * as S from './styles'


export function StepControl({handleClick, currentStep, steps}) {

  return (
    <S.BtnStepContainer>
      <S.BtnStepBack 
        onClick={() => handleClick()}
        currentStep={currentStep}
        disabled={currentStep === 1 && "disabled"}
      >
        Voltar
      </S.BtnStepBack>
      <S.BtnStepNext 
        onClick={() => handleClick("next")}
      >
        {currentStep === steps.length  ? "Confirmar" : "Próximo"}
        
      </S.BtnStepNext>
    </S.BtnStepContainer>
  )
}