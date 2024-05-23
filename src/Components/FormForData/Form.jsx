/********************************************************\
* Описание: компонента формы данных                     *
* Дата создания: 23.05.2024                             *
* Изменения:                                            *
* 23.05.2024 Ферхов А.A. - создание файла               *
*                                                       *
*********************************************************/
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import s from './Form.module.css'
import Button from '../Button/Button';


let Form = () => {
    const [numberTel, setNumberTel] = useState('')
    const refNumberTel = useRef()

    const isNumberTel = () => {         //блокирует ввод символов, которые не относятся к цифрам
        if (refNumberTel.current) {
            setNumberTel(refNumberTel.current.value)
        }
    }

    const { register, handleSubmit } = useForm({
        defaultValues: {}
    })

    const Submit = (data) => {
        console.log(data)
    }

    const isCorrectness = (data) => {       //Функция проверяет регистр первого символа
        return true
    }

    const isNumber = (data) => {            //Функция проверяет вводятся ли цифры
        return true
    }

    return <div className={s.osnov}>
        <form method="post" className={s.forma} onSubmit={handleSubmit(Submit, ()=>{alert('error')})}>

            <input type='text' placeholder="введите вашу Фамилию" {...register('lastName', { required: true, validate: isCorrectness })} />

            <input type='text' placeholder="введите вашу Имя" {...register('firstName', { required: true, validate: isCorrectness })} />

            <input type='text' placeholder="введите ваше Отчество" {...register('Otchestvo', { required: true, validate: isCorrectness })} />


            <input type='text' placeholder="введите контактный номер телефона" maxLength="11"
                {...register('numTel', { required: true, validate: isNumber })} value={numberTel} onChange={isNumberTel} ref={refNumberTel} />

            <Button />

        </form>
    </div>
}

export default Form;