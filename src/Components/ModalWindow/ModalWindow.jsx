/********************************************************\
* Описание: Модальное окно                              *
* Дата создания: 24.05.2024                             *
* Изменения:                                            *
* 24.05.2024 Ферхов А.A. - создание файла               *
*********************************************************/


import Form from '../FormForData/Form';
import s from './ModalWindow.module.css'

let ModalWindow = ({active, setActive}) => {
    return <div className={ active ? s.disactive: s.active} >

        <div className={s.wind} onClick={e => e.stopPropagation()}>
                <Form setActive={setActive}/>
        </div>

    </div>
}

export default ModalWindow;