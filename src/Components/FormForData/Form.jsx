/********************************************************\
* Описание: компонента формы данных                     *
* Дата создания: 23.05.2024                             *
* Изменения:                                            *
* 23.05.2024 Ферхов А.A. - создание файла               *
* 24.05.2024 Ферхов А.A. - добавление функции           *
*********************************************************/
import React from 'react';
import { useForm } from 'react-hook-form';
import s from './Form.module.css'
import Button from '../Button/Button';


let Form = ({setActive}) => {

    const { register, handleSubmit } = useForm({
        defaultValues: {}
    })

    const Submit = (data) => {
        console.log(data)
        setActive(true) //Скрывает модальное окно
    }

    const Errors = () => {
        alert(`Error: `)
    }

    const isCorrectness = (data) => {       //Функция проверяет регистр первого символа
        return /^[A-Z]|[А-Я]/.test(data)
    }

    return <div className={s.osnov}>
        <form method="post" className={s.forma} onSubmit={handleSubmit(Submit, Errors)}>

            <input type='text' placeholder="введите вашу Фамилию" {...register('lastName', { required: true, validate: isCorrectness })} />
            <div className={s.error}>Неверная форма данных</div>
            <input type='text' placeholder="введите вашу Имя" {...register('firstName', { required: true, validate: isCorrectness })} />
            <div className={s.error}>Неверная форма данных</div>
            <input type='text' placeholder="введите ваше Отчество" {...register('Otchestvo', { required: true, validate: isCorrectness })} />
            <div className={s.error}>Неверная форма данных</div>

            <select>
                <option>Google</option>
                <option>Яндекс</option>
            </select>
            <Button/>

        </form>
    </div>
}

export default Form;