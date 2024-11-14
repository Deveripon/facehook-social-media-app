import { NavLink } from "react-router-dom";
import LogoIcon from "../../assets/images/logo.svg";

const Logo = () => {
    return (
        <NavLink to='/'>
            <img
                className='max-w-[100px] rounded-full lg:max-w-[130px]'
                src={LogoIcon}
                alt='logo'
            />
        </NavLink>
    );
};

export default Logo;
