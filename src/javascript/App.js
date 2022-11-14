import { Route, Routes} from "react-router-dom"
import Landing from "../components/landing"
import Login from "../components/login"

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
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Landing />} />
            </Routes>
        </>
    )
}