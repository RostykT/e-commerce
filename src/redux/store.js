import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const MiddleWares = [logger];

const store = createStore(rootReducer, applyMiddleware(...MiddleWares));

export default store;
