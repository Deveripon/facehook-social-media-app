import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegistrationPage from "../pages/RegistrationPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import NotFoundPage from "../pages/NotFoundPage";
import PrivateRoutes from "./PrivateRoutes";

const Router = () => {
    return (
        <Routes>
            <Route element={<PrivateRoutes />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/me' element={<ProfilePage />} />
            </Route>
            <Route path='/register' element={<RegistrationPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    );
};

export default Router;
