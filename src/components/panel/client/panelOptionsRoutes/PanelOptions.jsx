import { Calendar } from "../main/calendar/Calendar"
import { Exams } from "../main/exams/Exams"
import { HomePanel } from "../main/home/HomePanel"
import * as S from './styles'


export function PanelOptions({ urlRoutes }) {
  const route = urlRoutes.split('/')[1]
  const panelRoutes = {
    home: {
      component: <HomePanel />
    },
    consulta: {
      component: <Exams />
    },
    historico: {
      component: <Calendar />
    },
    examesdieta: {
      component: <Calendar />
    },
    calendario: {
      component: <Calendar />
    },
    cardapionutri: {
      component: <Calendar />
    },
    metas: {
      component: <Calendar />
    },
    historicobalanca: {
      component: <Calendar />
    },
    configuracao: {
      component: <Calendar />
    },

  }

  return (
    <>
      <S.Container>
        {urlRoutes ? panelRoutes[route]?.component : <p>Não existe</p>}
      </S.Container>

    </>
  )
}