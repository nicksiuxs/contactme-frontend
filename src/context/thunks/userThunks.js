import { api } from "../../api/api"
import { login } from "../slices/userSlice";

const loginUser = (email, password) => {

    return async (dispatch) => {
        try {
            const response = await api.post("/auth/", {
                email, password
            });

            if (response) {
                const user = response.data.user;
                const token = response.data.token;
                dispatch(login({ user, token }))
            }
        } catch (error) {
            console.log("error.response >>> ", error.response.data);
        }
    }
}
export { loginUser }