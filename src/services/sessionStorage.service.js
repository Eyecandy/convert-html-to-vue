import RequestService from './request.service.js'

class SessionStorageService {

    getOrFetch(key, url) {
        var value = JSON.parse(sessionStorage.getItem(key))
        if (!value) {
            const response = RequestService.sendAuthorizedGetRequest(url).then(
                (response) => { sessionStorage.setItem(key, JSON.stringify(response)); return response }

            ).catch(() => alert("getOrFetch in sessionStorageService Failed"))

            return response;


        }
        else { return JSON.parse(sessionStorage.getItem(key)); }

    }

    get(key) {
        return JSON.parse(sessionStorage.getItem(key));

    }

    permanentUpdate(key, value, url) {
        if (JSON.stringify(sessionStorage.getItem(key)) !== value) {
            RequestService.sendAuthorizedPostRequest(url, value)
                .then(() => sessionStorage.setItem(key, JSON.stringify(value)))
                .catch(() => alert("update in sessionStorageService Failed"))
        }
    }

    tempUpdate(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value))

    }

}

export default new SessionStorageService();