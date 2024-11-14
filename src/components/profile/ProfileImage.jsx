import { useProfile } from "../../hooks/useProfile";
import userAvater from "../../assets/images/avatars/avatar.svg";
import { api_base_url, get_profile_api_url } from "../../constant";
import PencilIcon from "../../assets/icons/edit.svg";
import useAxios from "../../hooks/useAxios";
import { actions } from "../../actions/actions";
const ProfileImage = () => {
    const { state, dispatch } = useProfile();
    const api = useAxios();

    const handleAvatarChange = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("avatar", file);
        //make api call to update avatar
        try {
            dispatch({ type: actions.profileActions.DATA_FATCHING });
            const response = await api.post(
                `${get_profile_api_url}/${state.user.id}/avatar`,
                formData
            );
            const result = response.data;
            dispatch({
                type: actions.profileActions.PROFILE_IMAGE_UPDATED,
                data: result.avatar,
            });
        } catch (error) {
            dispatch({
                type: actions.profileActions.DATA_FETCH_ERROR,
                error: error,
            });
        }
    };
    return (
        <div className='relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 ring-2 ring-[#3f3f3f] lg:max-h-[218px] lg:max-w-[218px]'>
            <img
                className='max-w-full object-cover rounded-full h-[180px] w-[180px] lg:h-[218px] lg:w-[218px]'
                src={
                    (state?.user?.avatar &&
                        `${api_base_url}/` + state?.user?.avatar) ||
                    userAvater
                }
                alt={state?.user?.firstName}
            />

            <label
                htmlFor='avatar'
                className='cursor-pointer flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80'>
                <img src={PencilIcon} alt='Edit' />
                <input
                    onChange={handleAvatarChange}
                    hidden
                    name='avatar'
                    id='avatar'
                    type='file'
                />
            </label>
        </div>
    );
};

export default ProfileImage;
