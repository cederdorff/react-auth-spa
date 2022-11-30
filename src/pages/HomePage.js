import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <section className="page">
            <h1>Home Page</h1>
            <Link to="/sign-in">Sign in to admin</Link>
        </section>
    );
}
