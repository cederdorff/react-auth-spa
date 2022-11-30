import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import NavAdmin from "./components/NavAdmin";
import AboutPage from "./pages/AboutPage";
import Dashboard from "./pages/admin/Dashboard";
import ProductsAdminPage from "./pages/admin/ProductsAdminPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";

function App() {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth")); // default value comes from localStorage

    // variable to store all private routes including the nav bar
    const privateRoutes = (
        <>
            <NavAdmin setAuth={setIsAuth} />

            <Routes>
                <Route path="/admin" element={<Dashboard />} />
                <Route path="/admin/products" element={<ProductsAdminPage />} />
                <Route path="*" element={<Navigate to="/admin" />} />
            </Routes>
        </>
    );

    // variable to store all all public routes without nav bar
    const publicRoutes = (
        <>
            <Nav />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/sign-in" element={<SignInPage setAuth={setIsAuth} />} />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );

    // if user is authenticated, show privateRoutes, else show publicRoutes
    return <main>{isAuth ? privateRoutes : publicRoutes}</main>;
}

export default App;
