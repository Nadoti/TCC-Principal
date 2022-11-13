import * as S from '../../styles/login/styles'

import imgLogin from '/images/login.png'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { LoginOptions } from '../../components/login/LoginOptions';
import { LoginUser } from './LoginUser';
import { LoginProfessional } from './LoginProfessional';

export default function Login() {



  return (
    <S.Container>
      <S.ImgContainer>
        <S.Img src={imgLogin} />
      </S.ImgContainer>

      <Routes>
        <Route path='/' element={<LoginOptions />} />
        <Route path='/usuario' element={<LoginUser />} />
        <Route path='/profissional' element={<LoginProfessional />} />
      </Routes>

    </S.Container>
  )
}