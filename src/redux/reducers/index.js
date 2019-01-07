import { combineReducers } from "redux";
import { createStore, applyMiddleware  } from "redux";
import overview from "./overview";
import repositories from "./repositories";
import reduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
    overview,repositories
});

export default createStore(rootReducer, applyMiddleware(reduxThunk));
