import * as S from '../../styles/painel/styles'
import { AsideCliente } from '../../components/panel/client/aside/asideCliente'
import { PanelOptions } from '../../components/panel/client/panelOptionsRoutes/PanelOptions'
import { useParams } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

export function PainelCliente() {

  const path = useParams()

  const urlRoutes = path['*']//.split('/')[1]
  console.log(urlRoutes)

  return (
    <S.Container>

      <AsideCliente urlRoutes={urlRoutes} />
      <Routes>
        <Route path={`${urlRoutes}`} element={<PanelOptions urlRoutes={urlRoutes} />} />
      </Routes>

    </S.Container>

  )
}