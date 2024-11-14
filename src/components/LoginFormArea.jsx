import { Link } from "react-router-dom";
import LoginForm from "./auth/LoginForm";

const LoginFormArea = () => {
    return (
        <div className='card max-h-[600px] max-w-[500px]'>
            <LoginForm />

            <div className='py-4 lg:py-6'>
                <p className='text-center text-xs text-gray-600/95 lg:text-sm'>
                    Don’t have account?
                    <Link
                        className='text-white transition-all hover:text-lwsGreen hover:underline'
                        to='/register'>
                        Create New
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginFormArea;
