import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './reducers'
import reduxImmutableStateInvarient from "redux-immutable-state-invariant";

export default function configureStore(inititialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // support for Redux dev tools
    return createStore(
        rootReducer,
        inititialState,
        composeEnhancers(
            applyMiddleware(
                reduxImmutableStateInvarient()
            )
        )
    )
}