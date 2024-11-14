import { useProfile } from "../../hooks/useProfile";
import PencilIcon from "../../assets/icons/edit.svg";
import Checked from "../../assets/icons/check.svg";
import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { api_base_url, get_profile_api_url } from "../../constant";
import { actions } from "../../actions/actions";

const Bio = () => {
    const { state, dispatch } = useProfile();
    const [bio, setBio] = useState(state?.user?.bio);
    const [isEdit, setIsEdit] = useState(false);
    const api = useAxios();

    const handleBioChange = async () => {
        dispatch({ type: actions.profileActions.DATA_FATCHING });
        try {
            const response = await api.patch(
                `${get_profile_api_url}/${state?.user?.id}`,
                { bio: bio }
            );

            if (response.status === 200) {
                dispatch({
                    type: actions.profileActions.BIO_UPDATED,
                    data: response.data.bio,
                });
            }
        } catch (error) {
            dispatch({
                type: actions.profileActions.DATA_FETCH_ERROR,
                error: error,
            });
        }
    };

    return (
        <div className='mt-4 flex items-start gap-2 lg:mt-6'>
            {!isEdit ? (
                <div className='flex-1'>
                    <p className='leading-[188%] text-gray-400 lg:text-lg'>
                        {bio}
                    </p>
                </div>
            ) : (
                <textarea
                    onChange={(e) => setBio(e.target.value)}
                    className='bg-gray-800/50 rounded-md border border-[#3F3F3F] px-4 py-2 lg:text-lg focus:outline-none'
                    name='bio'
                    defaultValue={bio}
                    id=''
                    cols='65'
                    rows='05'></textarea>
            )}

            {/* Edit Bio button. The Above bio will be editable when clicking on the button */}
            {!isEdit ? (
                <button
                    onClick={() => setIsEdit(true)}
                    className='flex-center h-7 w-7 rounded-full'>
                    <img src={PencilIcon} alt='Edit' />
                </button>
            ) : (
                <button
                    onClick={handleBioChange}
                    className='flex-center h-7 w-7 rounded-full'>
                    <img src={Checked} alt='save' />
                </button>
            )}
        </div>
    );
};

export default Bio;
