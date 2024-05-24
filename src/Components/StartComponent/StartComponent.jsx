import s from './Start.module.css'
import { NavLink } from 'react-router-dom'
let Start = () => {
    return <div className={s.btn}>
    <NavLink to='/form'>Заполнить форму (первый вариант)</NavLink>
    </div>
}

export default Start