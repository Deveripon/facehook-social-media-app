import { useForm } from "react-hook-form";
import Fields from "../common/Fields";
import { cn } from "../../utils/cn";
import axios from "axios";
import { api_base_url } from "../../constant";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        setError,
        handleSubmit,
        watch,
    } = useForm();

    async function handleFormSubmission(formData) {
        console.log(formData);
        const formInputs = {
            firstName: formData?.firstName,
            lastName: formData?.lastName,
            email: formData?.email,
            password: formData?.password,
        };
        console.log(formInputs);

        try {
            const response = await axios.post(
                `${api_base_url}/auth/register`,
                formInputs
            );
            if (response.status === 201) {
                navigate("/login");
            }
            console.log(response);
        } catch (error) {
            if (error?.response) {
                setError("root", {
                    type: "registrationError",
                    message: error?.response?.data?.error,
                });
            } else {
                setError("root", {
                    type: "registrationError",
                    message: "Something went wrong, Please try again",
                });
            }
        }
    }

    return (
        <form
            onSubmit={handleSubmit(handleFormSubmission)}
            className='border-b border-[#3F3F3F] pb-10 lg:pb-[30px]'>
            {/* name */}
            <Fields
                label='First Name'
                htmlFor='firstName'
                error={errors.firstName}>
                <input
                    {...register("firstName", {
                        required: "First Name is required",
                    })}
                    className={cn(`auth-input`, {
                        "border-red-500": errors.firstName,
                    })}
                    name='firstName'
                    type='text'
                    id='firstName'
                    placeholder='Enter your First Name'
                />
            </Fields>
            <Fields
                label='Last Name'
                htmlFor='lastName'
                error={errors.lastName}>
                <input
                    {...register("lastName", {
                        required: "Last Name is required",
                    })}
                    className={cn(`auth-input`, {
                        "border-red-500": errors.lastName,
                    })}
                    name='lastName'
                    type='text'
                    id='lastName'
                    placeholder='Enter your Last Name'
                />
            </Fields>

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
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                            message:
                                "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
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

            <Fields
                label='Confirm Password'
                htmlFor='retypePassword'
                error={errors.retypePassword}>
                <input
                    {...register("retypePassword", {
                        required: "Confirm Password is required",
                        validate: (value) =>
                            watch("password") === value ||
                            "Passwords do not match",
                    })}
                    className={cn(
                        "auth-input",
                        errors.retypePassword && "border-red-500"
                    )}
                    name='retypePassword'
                    type='password'
                    id='retypePassword'
                    placeholder='Re Enter your password'
                />
            </Fields>
            {errors.root?.message && (
                <div className='bg-red-600/50 p-3 rounded-md mb-1 mt-3 text-white'>
                    <p>{errors.root?.message}</p>
                </div>
            )}
            <button
                className='auth-input mt-3 bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90'
                type='submit'>
                Register
            </button>
        </form>
    );
};

export default RegistrationForm;
