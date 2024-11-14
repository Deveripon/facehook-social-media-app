import RegistrationPageIllastration from "../components/RegistrationPageIllastration";
import { Link } from "react-router-dom";
import RegistrationForm from "../components/auth/RegistrationForm";

const RegistrationPage = () => {
    return (
        <main className='flex min-h-screen items-center justify-center bg-deepDark py-8'>
            <div className='max-w-[1368px] flex-1'>
                <div className='container grid items-center gap-8 lg:grid-cols-2'>
                    <RegistrationPageIllastration />

                    {/* login form */}
                    <div className='card max-h-[800px] max-w-[500px]'>
                        <RegistrationForm />
                        <div className='py-4 lg:py-4'>
                            <p className='text-center text-xs text-gray-600/95 lg:text-sm'>
                                Already have an account?
                                <Link
                                    className='hover:text-lwsGreen text-white transition-all hover:underline'
                                    to='/login'>
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                    {/* login form ends */}
                </div>
            </div>
        </main>
    );
};

export default RegistrationPage;
