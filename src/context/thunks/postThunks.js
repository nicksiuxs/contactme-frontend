import { api } from "../../api/api";
import { addPosts } from "../slices/postsSlice";

const getPosts = (token) => {
    return async (dispatch) => {
        try {
            const response = await api.get("/post/", {
                headers: {
                    "x-token": token
                }
            });
            console.log(response)
        } catch (error) {
            console.log("error.response >>> ", error.response.data);
        }
    }
}

const getPostByUser = (token, userId) => {
    return async (dispatch) => {
        try {
            const response = await api.get("/post/", {
                headers: {
                    "x-token": token
                },
                params: {
                    id: userId
                }
            });
            if (response) {
                dispatch(addPosts(response.data.posts))
            }
        } catch (error) {
            console.log("error.response >>> ", error.response.data);
        }
    }
}

export { getPosts, getPostByUser };