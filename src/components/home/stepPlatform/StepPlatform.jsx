import * as S from './styles'

const stepsOptions = [
  {
    id: 1,
    tittle: 'Cadastro',
    text: 'Crie uma conta na nossa plataforma para ter acesso as informações sobre consulta'
  },
  {
    id: 2,
    tittle: 'Agende sua Consulta',
    text: 'Crie uma conta na nossa plataforma para ter acesso as informações sobre consulta'
  },
  {
    id: 3,
    tittle: 'Profissional',
    text: 'Crie uma conta na nossa plataforma para ter acesso as informações sobre consulta'
  },
  {
    id: 4,
    tittle: 'Consulta com profissional',
    text: 'Crie uma conta na nossa plataforma para ter acesso as informações sobre consulta'
  },
  {
    id: 5,
    tittle: 'Plano Alimentar',
    text: 'Crie uma conta na nossa plataforma para ter acesso as informações sobre consulta'
  },
]

export function StepPlatform() {

  return (
    <S.Container>
      <S.Title>Conheça os passos para usar nossa plataforma</S.Title>
      <S.Content>
        {stepsOptions?.map((step) => (
          <div key={step.id}>
            <span>{step.id}</span>
            <h4>{step.tittle}</h4>
            <p>{step.text}</p>
          </div>
        ))}
      </S.Content>
      
    </S.Container>
  )
}