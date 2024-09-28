import Navigation from "../Navigation/Navigation"
import UserMenu from "../UserMenu/UserMenu"
import AuthNav from "../AppBar/AppBar"
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../../redux/auth/selectors"
import css from "./AppBar.module.css"

export default function AppBar() {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> :  <AuthNav/>}
        </header>
    )
};
