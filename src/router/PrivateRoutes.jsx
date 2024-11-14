import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../components/common/Header";
import ProfileProvider from "../providers/ProfileProvider";
import PostProvider from "../providers/PostProvider";

const PrivateRoutes = () => {
    const { auth } = useAuth();
    return auth?.accessToken ? (
        <>
            <PostProvider>
                <ProfileProvider>
                    <Header />
                    <main className='mx-auto max-w-[1020px] py-8'>
                        <div className='container'>
                            <Outlet />
                        </div>
                    </main>
                </ProfileProvider>
            </PostProvider>
        </>
    ) : (
        <Navigate to='/login' />
    );
};

export default PrivateRoutes;
