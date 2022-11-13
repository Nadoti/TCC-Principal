import React from "react";
import * as S from "./styles";
import { MdOutlineQueryStats, } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

export function HomePanel() {



  return (
    <S.Container>
      <S.DashboardTop>
        <S.AppointmentScheduled>
          <div>
            <MdOutlineQueryStats fontSize="40px" />
            <h2>Data da Consulta</h2>
          </div>
          <p>Você não tem consulta marcado</p>
        </S.AppointmentScheduled>
        <S.AppointmentScheduled>
          <div>
            <AiOutlineUsergroupAdd fontSize="40px" />
            <h2>Nova Consulta</h2>
          </div>
          <a href="/novaconsulta">Nova Consulta</a>
        </S.AppointmentScheduled>

      </S.DashboardTop>
    </S.Container>
  )
}









/*https://www.tabnews.com.br/henriquemusk/como-faco-rota-privada-no-nextjs
https://brasiliapp.com.br/
https://medium.com/@devjpnobrega/primeiros-passos-com-react-hooks-usereducer-c435d83643d8
https://www.zup.com.br/blog/domain-driven-design-ddd
https://medium.com/agora-io/how-does-webrtc-work-996748603141
https://www.joshwcomeau.com/react/usememo-and-usecallback/



https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection
https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/track_event
https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/icecandidate_event
https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/MediaStream
*/