import * as S from '../../styles/register/form/styles'

import { Input } from '../../components/forms/input/Input'
import { Button } from '../../components/forms/button/Button'
import React from 'react'
import { formReducer, initialState } from '../../hooks/formReducer/formReducerRegisterUser'
import { RiArrowLeftLine } from "react-icons/ri";
import { Link } from 'react-router-dom'

const inputRegister = [
  {
    id: 1,
    name: 'name',
    type: 'text',
    label: "Name",
  },
  {
    id: 2,
    name: 'email',
    type: 'email',
    label: "Email",
  },
  {
    id: 3,
    name: 'cpf',
    type: 'text',
    label: "CPF",
  },
  {
    id: 4,
    name: 'dataNascimento',
    type: 'text',
    label: "Data de Nascimento",
  },
  {
    id: 5,
    name: 'cep',
    type: 'text',
    label: "Cep",
  },
  {
    id: 6,
    name: 'rua',
    type: 'text',
    label: "Rua",
  },
  {
    id: 7,
    name: 'numero',
    type: 'text',
    label: "Número",
  },
  {
    id: 8,
    name: 'bairro',
    type: 'text',
    label: "Bairro",
  },
  {
    id: 9,
    name: 'cidade',
    type: 'text',
    label: "Cidade",
  },
  {
    id: 10,
    name: 'estado',
    type: 'text',
    label: "Estado",
  },
  {
    id: 11,
    name: 'password',
    type: 'password',
    label: "Senha",
  },
  {
    id: 12,
    name: 'passwordConfirmed',
    type: 'password',
    label: "Confirmar Senha",
  },
]

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido'
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message: "A senha precisa ter 1 caracter maisculo, 1 minusculo e 1 digito. Com no mínimo 8 caracteres."
  },
  cep: {
    regex: /^([\d]{2})\.?([\d]{3})\-?([\d]{3})/,
    message: "Preencha um cep válido"
  }
}

export function RegisterUser() {

  const [state, dispatch] = React.useReducer(formReducer, initialState)


  function validate(val, name) {
    if (val.length === 0) {
      dispatch({ type: "ADD_ERROR", payload: { name: name, value: val, error: "campo não pode ser vazio" } })
      return false
    } else if (types[name] && !types[name].regex.test(val)) {
      dispatch({ type: "ADD_ERROR", payload: { name: name, value: val, error: types[name].message } })
      return false
    } else if (name === 'passwordConfirmed') {
      dispatch({ type: "PASSWORD_ERROR", payload: { name: name, value: val, error: "Senha Não Confere" } })
    } else {
      dispatch({ type: "ADD_ERROR", payload: { name: name, value: val, error: "" } })
      return true
    }
  }

  function onChange({ target }) {
    if (state[target.name].error) validate(target.value, target.name)
    dispatch({ type: "CHANGE_INPUT", payload: { name: target.name, value: target.value } })
    if (target.name === 'cep' && target.value.length === 9) {
      const changeCep = target.value.replace("-", "")
      fetch(`https://viacep.com.br/ws/${changeCep}/json/`)
        .then(valor => valor.json())
        .then(json => {
          if (json.erro) {
            dispatch({ type: "CEP_ERROR", payload: { value: 'Cep Inválido' } })
            return
          }
          dispatch({ type: "CEP", payload: { value: json } })
        })

    }

  }


  function handleOnBlur({ target }) {
    validate(target.value, target.name)

    //dispatch({type: "CHANGE_INPUT", payload:{name:target.name,value:target.value}})
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    const submitValues = new FormData()
    inputRegister.forEach((valor) => {
      if (valor.mode.value === '') {
        console.log('ERROR')
        return
      } if (valor.name === 'cep') {
        submitValues.append(valor.name, valor.mode.value.replace('-', ''))
        return
      } if (valor.name === 'cpf') {
        submitValues.append(valor.name, valor.mode.value.replace('.', '').replace('.', '').replace('-', ''))
        return
      } else {
        submitValues.append(valor.name, valor.mode.value)
      }
    })

    console.log(Object.fromEntries(submitValues.entries()))

  };


  return (

    <S.RegisterContainer>
      <Link to='/'><img src="/images/logoLogin.png" alt="Logo" /></Link>

      <S.ContentForm onSubmit={handleSubmit}>
        <S.Back>
          <Link to="/register">
            <RiArrowLeftLine />
          </Link>
        </S.Back>
        <S.Title>
          <h2>Registra-se como Usuário</h2>
        </S.Title>
        <S.BundlerInput>
          {inputRegister?.map(valor => (
            <Input
              key={valor.id}
              name={valor.name}
              type={valor.type}
              label={valor.label}
              value={state[valor.name].value}
              onChange={onChange}
              onBlur={handleOnBlur}
              error={state[valor.name].error}
            />

          ))}

        </S.BundlerInput>
        <Button> Cadastrar </Button>

      </S.ContentForm>
      <p>Já é cadastrado ? Entre <Link to="/login">aqui</Link> </p>
    </S.RegisterContainer>

  )
}