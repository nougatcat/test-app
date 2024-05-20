import { NavLink } from "react-router-dom"
import css from './Header.module.css'

const Header = (props) => {
    return (
        <header className={css.header}>
            <div>
                <a href="https://github.com/nougatcat" target="_blank" rel="nooperner noreferrer" className={css.item}>Ссылка на мой Github</a>
            </div>
            <nav className={css.header__nav}>
                <div className={css.header__nav_link}>
                    <NavLink to='/about' className={navData => navData.isActive ? css.active : css.item}>Приветствие</NavLink>
                </div>
                <div className={css.header__nav_link}>
                    <NavLink to='/employees' className={navData => navData.isActive ? css.active : css.item}>Сотрудники</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header