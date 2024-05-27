/********************************************************\
* Описание: компонента формы данных                     *
* Дата создания: 23.05.2024                             *
* Изменения:                                            *
* 23.05.2024 Ферхов А.A. - создание файла               *
* 24.05.2024 Ферхов А.A. - добавление функции           *
*********************************************************/
import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import s from './Form.module.css'
import Button from '../Button/Button';


let Form = ({ setActive, collictionData }) => {
    const [statusLasttName, setStatusLasttName] = useState(false)
    const refLasttName = useRef()

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {}
    })

    const Submit = (data) => {
        console.log(data)
        collictionData(data)
        setStatusLasttName(false)
        setActive(true) //Скрывает модальное окно
    }

    const Errors = () => {
        for (let i in errors) {
            switch (i) {
                case ("nameBrend"):
                    {
                        setStatusLasttName(true)
                        break
                    }
                default:
                    break
            }
        }
    }

    const isCorrectness = (data) => {
        return /^[A-zА-я0-9]+$/.test(data)    //Функция проверяет регистр первого символа
    }


    return <div className={s.osnov}>
        <form method="post" className={s.forma} onSubmit={handleSubmit(Submit, Errors)}>

            <input type='text' ref={refLasttName} placeholder="Название бренда" {...register('nameBrend', { required: true, validate: isCorrectness })} />

            <div className={statusLasttName ? s.errorActiv : s.error}>Неверная форма данных. Поле ввода не может содержать символы <b>! @ # $ % ^ & * ( ) _</b></div>
            <div className={s.selec}>
                <label for="searchSystem">Ваша поисковая система</label><br />
                <select id="searchSystem" required {...register('searchSysytem', {required: true})}>
                    <option value="">-- Выберите поисковую систему --</option>
                    <option>Яндекс XML</option>
                    <option>Яндекс Desktop</option>
                    <option>Яндекс Mobile</option>
                    <option>Google Desktop</option>
                    <option>Google Mobile</option>
                    <option>YouTube Desktop</option>
                    <option>YouTube Mobile</option>
                </select>
            </div>
            <div className={s.selec}>
                <label for="search">Глубина поиска</label><br />
                <select id="search" {...register('search')}>
                    <option value="">Выберите глубину поиска</option>
                    <option>5</option>
                    <option selected>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>50</option>
                    <option>100</option>
                </select>
            </div>

            <Button />

        </form>
    </div>
}

export default Form;