export const initialState = {
  name:{
    value: "",
    error: ""
  },
  cfn:{
    value: "",
    error: ""
  },
  email: {
    value: "",
    error: ""
  },
  cpf: {
    value: "",
    error: ""
  },
  dataNascimento: {
    value: "",
    error: ""
  },
  cep: {
    value: "",
    error: ""
  },
  rua: {
    value: "",
    error: ""
  },
  numero: {
    value: "",
    error: ""
  },
  bairro: {
    value: "",
    error: ""
  },
  cidade: {
    value: "",
    error: ""
  },
  estado: {
    value: "",
    error: ""
  },
  password: {
    value: "",
    error: ""
  },
  passwordConfirmed: {
    value: "",
    error: ""
  },
}

export const formReducer = (state, action) => {
  
  switch(action.type) {
    case "CHANGE_INPUT":
      console.log(state)
      return {
        ...state,
        [action.payload.name]: {
          value: action.payload.value,
          error: action.payload.error
        }
      }
    case "ADD_ERROR":
      return {
        ...state,
        [action.payload.name]: {
          value: action.payload.value,
          error: action.payload.error
        }
      }
    case "CEP":
      return {
        ...state,
        rua: {
          value: action.payload.value.logradouro,
          error: ""
        },
        bairro: {
          value: action.payload.value.bairro,
          error: ""
        },
        cidade: {
          value: action.payload.value.localidade,
          error: ""
        },
        estado: {
          value: action.payload.value.uf,
          error: ""
        }
      }
    case "CEP_ERROR":
      return {
        ...state,
        cep: {
          value: "",
          error: action.payload.value
        },
        rua: {
          value: "",
          error: ""
        },
        bairro: {
          value: "",
          error: ""
        },
        cidade: {
          value: "",
          error: ""
        },
        estado: {
          value: "",
          error: ""
        }
      }
    case "PASSWORD_ERROR":
      if(state.password.value !== action.payload.value){
        console.log('caiu aaaaaaaaaa')
        console.log(action.payload.value)
        return {
          ...state,
          [action.payload.name]: {
            value: action.payload.value,
            error: action.payload.error
          }
        }
      }
      
    default:
      return state
  }
}