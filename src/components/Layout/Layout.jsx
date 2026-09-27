import { Outlet } from "react-router-dom"
import Navigation from "../Navigation/Navigation"
import css from "./Layout.module.css"

function Layout() {
    return (
        <div className={css.layout}>
            <Navigation />
            <main className={css.main}>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout