import logoutIcon from "../../assets/icons/logout.svg";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Logout = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    //handle logout
    function handleLogout() {
        setAuth({});
        navigate("/login", { replace: true });
    }
    return (
        <button onClick={handleLogout} className='icon-btn'>
            <img src={logoutIcon} alt='Logout' />
        </button>
    );
};

export default Logout;
