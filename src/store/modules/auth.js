import axios from "axios";

const actions = {
    async verifyUsername(store, params) {
        const url = 'http://localhost:3000/api/auth/verify-username';
        const result = await axios.post(url, {
            username: params.username
        });

        return result.data;
    }
};

export default {
    namespaced: true,
    actions
}
