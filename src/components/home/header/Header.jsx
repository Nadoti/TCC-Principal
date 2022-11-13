import * as LottiePlayer from "@lottiefiles/lottie-player";
import * as S from "./styles";
import { Link } from "react-router-dom";
import React from "react";
import logo from '/images/logo.svg'

export function Header() {


  //Jakob Winterholler

  return (
    <S.Container>
      <S.Nav>
        <Link href="/">
          <S.Logo src={logo} alt="Logo" />
        </Link>
        <S.Navigation>
          <S.LinkPages>
            <Link to="/sobre">Sobre</Link>
          </S.LinkPages>
          <S.LinkPages>
            <Link to="/especialistas">Especialistas</Link>
          </S.LinkPages>
          <Link to="login" className="login">Entrar</Link>
        </S.Navigation>
      </S.Nav>

      <S.Content>
        <S.Info>
          <S.TitleMain>Mantenha-se sempre <br /> <span>saudável</span></S.TitleMain>
          <S.SubInfo>Plataforma de atendimento em tempo real <br /> com profissionais da área de nutrição</S.SubInfo>
          <S.Register>
            <Link to="/register">Cadastre-se</Link>
          </S.Register>
        </S.Info>

        <div>
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="./images/tcc.json"
            style={{ maxWidth: "450px", maxHeight: "450px" }}
          ></lottie-player>
        </div>
      </S.Content>
    </S.Container>
  )
}