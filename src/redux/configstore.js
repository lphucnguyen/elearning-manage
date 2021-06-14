import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from 'redux-thunk';
import { CourseReducer } from "./reducers/CourseReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";
import { UserReducer } from "./reducers/UserReducer";
import { AuthReducer } from "./reducers/AuthReducer";

const rootReducer = combineReducers({
    LoadingReducer: LoadingReducer,
    CourseReducer: CourseReducer,
    UserReducer: UserReducer,
    AuthReducer: AuthReducer
})

export const store = createStore(rootReducer,applyMiddleware(reduxThunk))