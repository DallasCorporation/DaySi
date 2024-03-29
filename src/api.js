import axios from "axios";
import { Platform } from "react-native";

const API_URL = Platform.select({
    ios: () => "http://localhost:3000/api",
    android: () => "http://192.168.1.228:3000/api"
})();

console.log(API_URL)
export default {
    user: {
        login: (credentials) =>
            axios
                .post(`${API_URL}/user/login`, { ...credentials })
                .then((res) => res.data),
        signUp: (user) =>
            axios
                .post(`${API_URL}/user/register`, { ...user })
                .then((res) => res.data),
        confirm: (token) => axios.post(`${API_URL}/user/confirmation`, { token })
            .then((res) => res),
        resetPasswordRequest: (email) =>
            axios.post(`${API_URL}/user/auth/reset_password_request`, {
                email,
            }),
        validateToken: (token) =>
            axios.post(`${API_URL}/user/auth/validate_token`, { token }),
        resetPassword: (data) =>
            axios.post(`${API_URL}/user/auth/reset_password`, data),
        get: (id) =>
            axios.get(`${API_URL}/user/${id}`)
                .then((res) => res.data),
        update: (id, data) =>
            axios.put(`${API_URL}/user/${id}`, data),
        updateAvatar: (id, data) =>
            axios.put(`${API_URL}/userAvatar/${id}`, data),
        updateTheme: (id, data) =>
            axios.put(`${API_URL}/userTheme/${id}`, data),
        updatePassword: (id, data) =>
            axios.put(`${API_URL}/user/password/${id}`, data),
        delete: (id) => {
            axios.delete(`${API_URL}/user/${id}`).then(res => res.data)
        },
        fetchAll: () =>
            axios.get(`${API_URL}/user/all`)
                .then((res) => res.data),
    },
    category: {
        getAll: () => axios.get(`${API_URL}/allCategory`).then(res => res.data)
    }
};
