import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/';
class RequestService {
    sendAuthorizedGetRequest(urlSuffix) {
        const sendGetRequest =
            axios
                .get(urlSuffix, {
                    headers: {
                        Authorization: authHeader().Authorization,
                    },
                }).then(
                    response => {
                        return Promise.resolve(response.data);
                    },
                    error => {
                        return Promise.reject(error);
                    }
                );


        return sendGetRequest;
    }

    sendAuthorizedGetRequestForFileDownload(urlSuffix) {
        const sendGetRequest =
            axios
                .get(urlSuffix, {
                    headers: {
                        Authorization: authHeader().Authorization,
                    }, responseType: 'blob'
                }).then(
                    response => {
                        window.open(URL.createObjectURL(response.data));
                    },
                    error => {
                        return Promise.reject(error);
                    }
                );


        return sendGetRequest;
    }

    sendAuthorizedPostRequest(urlSuffix, data) {

        const sendPostRequest =
            axios
                .post(urlSuffix, data, {
                    headers: {
                        Authorization: authHeader().Authorization
                    }
                }).then(
                    response => {
                        return Promise.resolve(response.data);
                    },
                    error => {
                        return Promise.reject(error);
                    }
                );


        return sendPostRequest;

    }


}

export default new RequestService();



