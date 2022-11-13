import * as S from './styles'
import { Link } from 'react-router-dom';
import { RiUser2Fill, RiUser3Fill } from "react-icons/ri";

export function RegisterOption() {


  return (
    <S.RegisterContainer>
      <Link to='/'><img src="/images/logoLogin.png" alt="Logo" /></Link>
      <S.ContentLogin>
        <h2>Registra-se</h2>
        <span>Registre em sua conta pelo link abaixo.</span>

        <S.ContentRouter>
          <Link to="usuario"><RiUser3Fill />Usuário</Link>
          <Link to="profissional"><RiUser2Fill />Profissional</Link>
        </S.ContentRouter>
      </S.ContentLogin>
      <p>Já é cadastrado ? Entre <Link to="/login">aqui</Link> </p>
    </S.RegisterContainer>

  )
}