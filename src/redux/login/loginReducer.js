import { ATIVAR_CONTA } from './loginType'

const initialState = {
    respostaAPI: JSON
}

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case ATIVAR_CONTA: return {
            ...state,
            state: state = resposta
        }

        default: return state
    }   
}

export default loginReducer