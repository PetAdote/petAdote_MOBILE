import { combineReducers } from "redux";
import loginReducer from '../redux/login/loginReducer'

const rootReducer = combineReducers({
    login: loginReducer,
})

export default rootReducer