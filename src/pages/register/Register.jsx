import React from 'react'
import * as S from '../../styles/register/form/styles'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { RegisterOption } from '../../components/register/RegisterOption';
import { RegisterProfessional } from './RegisterProfessional';
import { RegisterUser } from './RegisterUser';
import imgRegister from '/images/register.png'


export function Register() {
  return (
    <S.Container>
      <Routes>
        <Route path='/' element={<RegisterOption />} />
        <Route path='/profissional' element={<RegisterProfessional />} />
        <Route path='/usuario' element={<RegisterUser />} />
      </Routes>
      <S.ImgContainer>
        <S.Img src={imgRegister} alt='Registrar' />
      </S.ImgContainer>
    </S.Container>
  )
}