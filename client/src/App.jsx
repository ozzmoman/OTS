import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PhoneVerify from "./pages/PhoneVerify.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Signup />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='phone/verify' element={<PhoneVerify />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;