import { useNavigate } from "react-router-dom";
import LoginFormArea from "../components/LoginFormArea";
import LoginPageIllastration from "../components/LoginPageIllastration";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const LoginPage = () => {
    const navigate = useNavigate();
    const { auth } = useAuth();
    useEffect(() => {
        if (auth?.user) {
            navigate("/");
        }
    }, [auth?.user, navigate]);
    return (
        !auth?.user && (
            <main className='flex min-h-screen items-center justify-center bg-deepDark py-8'>
                <div className='max-w-[1368px] flex-1'>
                    <div className='container grid items-center gap-12 lg:grid-cols-2'>
                        <div>
                            <LoginPageIllastration />
                            <div>
                                <h1 className='mb-3 text-4xl font-bold lg:text-[40px]'>
                                    Facehook
                                </h1>
                                <p className='max-w-[452px] text-gray-600/95 lg:text-lg'>
                                    Create a social media app with features
                                    like, showing the post, post details,
                                    reactions, comments and profile.
                                </p>
                            </div>
                        </div>

                        <LoginFormArea />
                    </div>
                </div>
            </main>
        )
    );
};

export default LoginPage;
