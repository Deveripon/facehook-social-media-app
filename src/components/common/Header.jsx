import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import homeIcon from "../../assets/icons/home.svg";
import notificationIcon from "../../assets/icons/notification.svg";
import userAvater from "../../assets/images/avatars/avatar.svg";
import Logout from "../auth/Logout";
import useAuth from "../../hooks/useAuth";
import { useProfile } from "../../hooks/useProfile";
import { api_base_url } from "../../constant";

const Header = () => {
    const { auth } = useAuth();
    const { state } = useProfile();
    const user = state?.user ?? auth?.user;
    const navigate = useNavigate();
    return (
        <nav className='sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4'>
            <div className='container flex flex-col items-center justify-between gap-6 sm:flex-row'>
                {/* Logo */}
                <Logo />
                {/* nav links  */}
                <div className='flex items-center space-x-4'>
                    <NavLink to='/' className='btn-primary'>
                        <img src={homeIcon} alt='Home' />
                        Home
                    </NavLink>
                    <button className='icon-btn'>
                        <img src={notificationIcon} alt='Notification' />
                    </button>

                    <button
                        onClick={() => navigate("/me")}
                        className='flex-center !ml-8 gap-3'>
                        <span className='text-lg font-medium lg:text-xl'>
                            {user?.firstName} {user?.lastName}
                        </span>
                        {user?.avatar ? (
                            <img
                                className='h-[32px] rounded-full w-[32px] lg:h-[44px] lg:w-[44px] object-cover'
                                src={`${api_base_url}/${user.avatar}`}
                                alt='userName'
                            />
                        ) : (
                            <img
                                className='h-[32px] rounded-full w-[32px] lg:h-[44px] lg:w-[44px] object-cover'
                                src={userAvater}
                                alt='userName'
                            />
                        )}
                    </button>
                    <Logout />
                </div>
                {/* nav links ends */}
            </div>
        </nav>
    );
};

export default Header;
