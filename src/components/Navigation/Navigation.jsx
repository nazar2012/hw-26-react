import { NavLink } from "react-router-dom"
import css from "./Navigation.module.css"

function Navigation() {
    return (
        <nav className={css.nav}>
            <NavLink
                className={({ isActive }) => isActive ? css.active : css.link}
                to="/"
            >
                Home
            </NavLink>

            <NavLink
                className={({ isActive }) => isActive ? css.active : css.link}
                to="/movies"
            >
                Movies
            </NavLink>
        </nav>
    )
}

export default Navigation