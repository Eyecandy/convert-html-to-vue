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

    downloadFile(url, configMethod, configUrl) {


        if (configMethod === "PDF") {
            axios
                .get(url, {
                    headers: {
                        Authorization: authHeader().Authorization,
                    },
                    responseType: "blob", // had to add this one here
                })
                .then((response) => {
                    const blob = new Blob([response.data], { type: "application/pdf" });
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);

                    link.click();
                    window.open(link.href);
                    URL.revokeObjectURL(link.href);
                })
                .catch(console.error);
        } else {
            console.log(this.configUrl);

            window.location.href = configUrl;

        }

    }


}

export default new RequestService();



