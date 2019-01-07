import {GET_REPOSITORIES} from '../actions/repositories'
import {getOperation} from "../../utilities/restClient";

export const getRepositories = ()=>{
    return async (dispatch) => {
        const repos = await getOperation('https://api.github.com/users/supreetsingh247/repos');
        dispatch({
            type:GET_REPOSITORIES,
            payload:repos,
        });
    }

};
