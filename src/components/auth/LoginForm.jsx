import { useForm } from "react-hook-form";
import Fields from "../common/Fields";
import { cn } from "../../utils/cn";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { login } from "../../api";
import Spinner from "../../svg/Spinner";

const LoginForm = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const {
        handleSubmit,
        register,
        formState: { errors, isLoading },
        setError,
    } = useForm();

    //handle from submission
    const handleFormSubmission = async (formData) => {
        try {
            //make an api call to login
            const data = await login(formData);
            if (data?.user) {
                //set auth information to auth
                const { user, token } = data;
                setAuth({
                    user,
                    accessToken: token.token,
                    refreshToken: token.refreshToken,
                });
                setValue({
                    user,
                    accessToken: token.token,
                    refreshToken: token.refreshToken,
                });

                navigate("/", { replace: true });
            } else {
                setError("root", {
                    type: "LoginError",
                    message: "Invalid email or password",
                });
            }
        } catch (error) {
            setError("root", {
                type: "LoginError",
                message: "Invalid email or password",
            });
            console.log(error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(handleFormSubmission)}
            className='border-b border-[#3F3F3F] pb-10 lg:pb-[60px]'>
            <Fields label='Email' htmlFor='email' error={errors.email}>
                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                        },
                    })}
                    className={cn(`auth-input`, {
                        "border-red-500": errors.email,
                    })}
                    name='email'
                    type='text'
                    id='email'
                    placeholder='Enter your email'
                />
            </Fields>

            <Fields label='Password' htmlFor='password' error={errors.password}>
                <input
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters",
                        },
                    })}
                    className={cn(
                        "auth-input",
                        errors.password && "border-red-500"
                    )}
                    name='password'
                    type='password'
                    id='password'
                    placeholder='Enter your password'
                />
            </Fields>

            {errors.root?.message && (
                <div className='bg-red-600/50 p-3 rounded-md mb-4 text-white'>
                    <p>{errors.root?.message}</p>
                </div>
            )}

            <button
                disabled={isLoading}
                className='auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90'
                type='submit'>
                {isLoading ? (
                    <>
                        <Spinner /> Logging in
                    </>
                ) : (
                    <span>Login</span>
                )}
            </button>
        </form>
    );
};

export default LoginForm;
