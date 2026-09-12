import { NavLink } from "react-router-dom"
import { Nav } from "./Navigation.styled"

function Navigation() {
    return (
        <Nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
        </Nav>
    )
}

export default Navigation