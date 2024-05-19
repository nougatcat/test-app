import { NavLink } from "react-router-dom"
import css from './Header.module.css'
import logo from '../../images/logo192.png'

const Header = (props) => {
    return (
        <header className={css.header}>
            <div className={css.header__title}>
                <a href="https://github.com/nougatcat" target="_blank" rel="nooperner noreferrer">Ссылка на мой Github</a>
            </div>
            <nav className={css.header__nav}>
                <div className={css.header__nav_link}>
                    <NavLink to='/employees'>Сотрудники</NavLink>
                </div>
                <div className={css.header__nav_link}>
                    <NavLink to='/about'>Документация</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header