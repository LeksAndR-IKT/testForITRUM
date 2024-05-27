/********************************************************\
* Описание: Редюсер формы для заполнения                *
* Дата создания: 23.05.2024                             *
* Изменения:                                            *
* 23.05.2024 Ферхов А.A. - создание файла               *
* 24.05.2024 Ферхов А.A. - обработка данных формы       *
*********************************************************/

let initialState = {
    dataIsForm: {
        nameBrend: null, //имя бренда
        searchSystem: null, // выбранная система 
        search: 10,         //Глубина поиска
        task_id: null
    }
}
const collictionData = "collictionData"

let FormReducer = (state = initialState, action) => {
    switch (action.type) {
        case (collictionData):   //запись полученных данных в локальный стейт
            {
                return {
                    ...state, dataIsForm:
                    {
                        nameBrend: action.data.nameBrend, //имя бренда
                        searchSystem: action.data.searchSystem, // выбранная система 
                        search: action.data.search         //Глубина поиска
                    }
                }
            }
        default:
            {
                return state
            }
    }
}

export let collictionDataAC = (data) => ({ type: collictionData, data }) //Action Creater запись данных в локальный стейт


export let collictionDataTC = (data) => {                           //Thunk Creater
    return async (dispatch) => {
        dispatch(collictionDataAC(data))//запись полученных данных в локальный стейт
        // Будет происходить запрос на сервер
    }
}

export default FormReducer;