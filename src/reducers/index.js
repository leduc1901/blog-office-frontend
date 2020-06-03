import * as ActionType from '../actions/actionTypes';

const defaultState = {
    area : false,
    login : false,
    signup : false
}


export default function loginReducer(state = defaultState , action){
    switch(action.type){
        case ActionType.OPEN_AREA:
            return Object.assign({} , state , {
                area : true,
                login : true
            })
        case ActionType.CLOSE_AREA:
            return Object.assign({}, state ,{
                area : false,
                login : false,
                signup : false
            })
        case ActionType.SIGNUP_AREA:
            return Object.assign({}, state , {
                area : true,
                login : false ,
                signup: true
            })
         default:
             return state
    } 
 }