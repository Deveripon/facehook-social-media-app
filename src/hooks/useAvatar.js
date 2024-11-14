import { useProfile } from "./useProfile";
import userDefaultAvatar from "../assets/images/avatars/avatar.svg";
import { api_base_url } from "../constant";

const useAvatar = (post, comment) => {
    const { state } = useProfile();

    if (post) {
        const isMe = state?.user?.id === post?.author?.id; //check is the loggedin user profile
        const myAvatar = state?.user?.avatar; //if logged in user post than use avatar from profile image
        let avatar;
        if (isMe) {
            if (myAvatar) {
                avatar = api_base_url + "/" + myAvatar;
            } else {
                avatar = userDefaultAvatar;
            }
            // if logged in user has no avatar yet, than show default avatar
        } else if (!isMe) {
            const userAvatar = post?.author?.avatar;
            if (userAvatar) {
                avatar = api_base_url + "/" + userAvatar;
            } else {
                avatar = userDefaultAvatar;
            }

            // if posts user hase no profile image than use default image
        }

        return avatar;
    } else if (comment) {
        const isMe = state?.user?.id === comment?.author?.id;
        const myAvatar = state?.user?.avatar;

        let avatar;
        if (isMe) {
            if (myAvatar) {
                avatar = api_base_url + "/" + myAvatar;
            } else {
                avatar = userDefaultAvatar;
            }
        } else {
            const userAvatar = comment?.author?.avatar;
            if (userAvatar) {
                avatar = api_base_url + "/" + userAvatar;
            } else {
                avatar = userDefaultAvatar;
            }
        }

        return avatar;
    }
};

export default useAvatar;
