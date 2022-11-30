import { Link, NavLink } from "react-router-dom";

export default function NavAdmin({ setAuth }) {
    function handleSignOut() {
        setAuth(false);
        localStorage.removeItem("isAuth"); // reset localStorage
    }

    return (
        <nav>
            <NavLink to="/admin" end>
                Dashboard
            </NavLink>
            <NavLink exact to="/admin/products">
                Products
            </NavLink>
            <Link onClick={handleSignOut}>Sign Out</Link>
        </nav>
    );
}
