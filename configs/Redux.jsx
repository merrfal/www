import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import { Account, Notification, Confirmation } from '../controllers/Slices'
import { NEXT_PUBLIC_FB_PROJECT_ID } from './Envs'

let debug, devTools = NEXT_PUBLIC_FB_PROJECT_ID?.includes('local') ? false : true
const combinedReducer = combineReducers({ Account, Notification, Confirmation })

const masterReducer = (state, action) => combinedReducer(state, action)
export const makeStore = () => configureStore({ reducer: masterReducer, devTools} )
export const Redux = createWrapper(makeStore, { debug })