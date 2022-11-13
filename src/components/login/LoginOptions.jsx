import * as S from '../../styles/login/styles'
import { Link } from 'react-router-dom';
import { RiUser2Fill, RiUser3Fill } from "react-icons/ri";


export function LoginOptions() {

  return (
    <S.LoginContainer>
      <Link to='/'><img src="/images/logoLogin.png" alt="Logo" /></Link>
      <S.ContentLogin>
        <h2>Acesse</h2>
        <span>Entre em sua conta pelo link abaixo.</span>

        <S.ContentRouter>
          <Link to="usuario"><RiUser3Fill />Usuário</Link>
          <Link to="profissional"><RiUser2Fill />Profissional</Link>
        </S.ContentRouter>
      </S.ContentLogin>
      <p>Não é cadastrado ?<br></br>crie sua conta <Link to="/register">aqui</Link> </p>
    </S.LoginContainer>
  )
}