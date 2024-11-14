import { useReducer, useState } from "react";
import { PostContext } from "../context";
import { initialState, postReducer } from "../reducers/PostReducer";

const PostProvider = ({ children }) => {
    const [showPostForm, setShowPostForm] = useState({
        status: false,
        mode: "create",
        data: null,
    });
    const [state, dispatch] = useReducer(postReducer, initialState);
    return (
        <PostContext.Provider
            value={{ state, dispatch, showPostForm, setShowPostForm }}>
            {children}
        </PostContext.Provider>
    );
};

export default PostProvider;
