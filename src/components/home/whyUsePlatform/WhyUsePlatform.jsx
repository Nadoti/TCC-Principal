import * as S from './styles'
import { FiArrowRight } from "react-icons/fi";

export function WhyUsePlatform() {
  return (
    <S.Container>
      <S.SubContainer>
        <S.ListInfo>
          <h3>Por que usar nossa plataforma ?</h3>
          <ul>
            <li>Facil Usabilidade <FiArrowRight color='red'/></li>
            <li>Fornecimento de Dados</li>
          </ul>
        </S.ListInfo>
        <S.DetailsContainer>
          <S.DetailsContent>
            <div>
            <p>Plataforma facil de usar, feito com design moderno,
              com todas informações essenciais para você usar 
            </p>
            </div>
          </S.DetailsContent>
        </S.DetailsContainer>
      </S.SubContainer>
    </S.Container>
  )
}