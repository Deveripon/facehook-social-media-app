import RagistraTionPageIllustrationImage from "../assets/icons/registration.svg";
const RegistrationPageIllastration = () => {
    return (
        <div>
            <img
                className='mb-12 h-60'
                src={RagistraTionPageIllustrationImage}
                alt='auth_illustration'
            />
            <div>
                <h1 className='mb-3 text-4xl font-bold lg:text-[40px]'>
                    Facehook
                </h1>
                <p className='max-w-[452px] text-gray-400/95 lg:text-lg'>
                    Create a social media app with features like, showing the
                    post, post details, reactions, comments and profile.
                </p>
            </div>
        </div>
    );
};

export default RegistrationPageIllastration;
