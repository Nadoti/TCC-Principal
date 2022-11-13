import * as S from './styles'
import { AiOutlineCalendar, AiOutlineForm, AiOutlineTeam, AiOutlineFileText } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";


const options = [
  {
    id: 1,
    title: 'Formulário',
    img: <AiOutlineForm fontSize="50px"/>,
    class: 'ativo'
  },
  {
    id: 2,
    title: 'Escolha uma data',
    img: <AiOutlineCalendar fontSize="50px"/>,
  },
  {
    id: 3,
    title: 'Realize uma consulta em tempo real',
    img: <AiOutlineTeam fontSize="50px"/>,
  },
  {
    id: 4,
    title: 'Faça o exame',
    img:  <FaRegHeart fontSize="50px"/>,
  },
  {
    id: 5,
    title: 'Receba um o cardápio nutricional',
    img:  <AiOutlineFileText fontSize="50px"/>,
  },
]

export function HowWorkQuery() {


  return (
    <S.Container>
      
      <S.Content>
        <h2>Conheça como funciona as consultas</h2>
        <S.Options>
          {options?.map((option) => (
            <div key={option.id} className={option.class}>
              <span>{option.img}</span>
              <h4>{option.title}</h4>
            </div>
          ))}
        </S.Options>
      </S.Content>
      <S.ResultOptions>
        <div>
          <h5>Formulário</h5>
          <p>Preencha o formulario de acordo com as informações pedidas, essas informações serão repassadas para o profissional saber alguns constumes e alimentos que o paciente pode ou não pode comer.</p>
        </div>
      </S.ResultOptions>
    </S.Container>
  )
}