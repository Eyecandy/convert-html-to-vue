import axios from 'axios';
const API_URL = 'http://localhost:8080/api/auth/';
class AuthService {
    login(user) {
        const response = axios
            .post(API_URL + 'signin', {
                email: user.email,
                password: user.password
            })
            .then(response => {
                if (response.data.token) {
                    console.log(response)
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            });
        return response;
    }
    logout() {
        localStorage.removeItem('user');
    }
    register(user) {
        return axios.post(API_URL + 'signup', {
            email: user.email,
            password: user.password
        });
    }
}
export default new AuthService();
