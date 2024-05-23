/********************************************************\
* Описание: Хранилище данных                            *
* Дата создания: 23.05.2024                             *
* Изменения:                                            *
* 23.05.2024 Ферхов А.A. - создание файла               *
*                                                       *
*********************************************************/

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import FormReducer from "./Reducers/FormReducer";
import {thunk} from "redux-thunk"

let reducers = combineReducers({
    Form: FormReducer
})

let store = legacy_createStore(reducers, applyMiddleware(thunk))

window.localStore = store

export default store