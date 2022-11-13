import * as S from './styles'

export function Footer() {


  return (
    <S.Container>
     <S.Content>
      <S.InfoCompany>
        <h6>A empresa</h6>
        <ul>
          <li>Sobre</li>
          <li>Nutricionistas</li>
        </ul>
      </S.InfoCompany>
      <div>
        <span>© 2022 StayHealthy. Todos os direitos reservados </span>
      </div>
     </S.Content>
    </S.Container>
  )
}