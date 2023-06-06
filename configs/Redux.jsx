import { Account, Notification, Confirmation} from '../controllers/Slices';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { IS_PROD } from './Envs';

// let debug, devTools = IS_PROD === "true";
let debug, devTools = true;
const combinedReducer = combineReducers({ Account, Notification, Confirmation });

const masterReducer = (state, action) => combinedReducer(state, action);
export const makeStore = () => configureStore({ reducer: masterReducer, devTools} );
export const Redux = createWrapper(makeStore, { debug });