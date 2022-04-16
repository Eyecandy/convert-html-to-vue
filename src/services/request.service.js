import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/';
class RequestService {
    sendAuthorizedRequest(urlSuffix) {
        const sendGetRequest =
            axios
                .get("/api/buyer/carbrands", {
                    headers: {
                        Authorization: authHeader().Authorization,
                    },
                }).then(
                    response => {
                        return Promise.resolve(response.data);
                    },
                    error => {
                        commit('loginFailure');
                        return Promise.reject(error);
                    }
                );


        return sendGetRequest;
    }


}

export default new RequestService();



