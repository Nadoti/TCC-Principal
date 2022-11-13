import * as S from './styles'
import React from 'react'
import { mascaraDataNascimento, mascaraCPF } from '../../../masks/mask'

export function Input({value,onChange,error,onBlur, name, label, type,pattern}) {
  const [focus, setFocus] = React.useState(false)

  const handleKeyUp = React.useCallback((e) => {
    if(name === 'cep') {
      mascaraDataNascimento(e)
    } else if(name === 'cpf'){
      mascaraCPF(e)
    } else {
      return null
    }
  }, [name])

  return (
    <S.ContainerInput>
      
      <S.InputStyles
        onKeyUp={handleKeyUp}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={label}
        error={error}
        disabled={(name === 'rua' || name === 'bairro' || name === 'cidade' || name === 'estado') && (value.length > 0 || value === undefined)}
      />
      <label htmlFor={name}>{label}</label>
      {error && <p>{error}</p>}
      {/* {focus && name === 'confirmarSenha' && (pattern !== value) && <p>A confirmação de senha não confere.</p>} */}
    </S.ContainerInput>
    
  )
}