import { Link } from 'react-router-dom'
import * as S from '../../styles/login/form/styles'
import useForm from '../../hooks/useForm'
import { Input } from '../../components/forms/input/Input'
import { Button } from '../../components/forms/button/Button'
import { RiArrowLeftLine, RiLoginBoxLine } from "react-icons/ri";

export function LoginUser() {

  const email = useForm('email')
  const password = useForm('password')

  return (

    <S.LoginContainer>
      <Link to='/' ><img src="/images/logoLogin.png" alt="Logo" /></Link>
      <S.ContentLoginUser>
        <S.Back>
          <Link to="/login">
            <RiArrowLeftLine />
          </Link>
        </S.Back>
        <h2>Entrar como Usuário</h2>
        <p>Informe seu email e senha para acessar sua conta.</p>
        <S.Login>
          <Input
            type="text"
            value={email.value}
            onChange={email.onChange}
            onBlur={email.onBlur}
            name='email'
            label="Email"
            error={email.error}
          />
          <Input
            type="password"
            value={password.value}
            onChange={password.onChange}
            onBlur={password.onBlur}
            name='password'
            label="Senha"
            error={password.error}
          />
          <Button><RiLoginBoxLine />Entrar</Button>
        </S.Login>
        <S.Register>Não é cadastrado? crie sua conta <Link to="/register/usuario">aqui</Link> </S.Register>
      </S.ContentLoginUser>

    </S.LoginContainer>
  )
}