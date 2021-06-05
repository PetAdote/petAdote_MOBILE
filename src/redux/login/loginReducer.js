import { ATIVAR_CONTA } from './loginType'

const initialState = [""]

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case ATIVAR_CONTA: return {
            ...state,
            
        }

        default: return state
    }   
}

export default loginReducer