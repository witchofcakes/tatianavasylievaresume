import { Route, Routes, Link } from "react-router-dom"
import Landing from "../components/landing"

export default function App() {
    return (
        <>
            {/*<nav>*/}
            {/*    <ul>*/}
            {/*        <li><Link to="/">Home</Link></li>*/}
            {/*        <li><Link to="/books">Books</Link></li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}

            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
        </>
    )
}