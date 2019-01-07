import {GET_REPOSITORIES} from '../actions/repositories'
export default  (state = {}, {type, payload})=>{
    switch (type) {
        case GET_REPOSITORIES:
            return {...state, repos:payload};
            break;
        default:
            return state

    }
}
