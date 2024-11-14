import { useContext } from "react";
import { PostContext } from "../context";

const usePost = () => {
    return useContext(PostContext);
};

export default usePost;
