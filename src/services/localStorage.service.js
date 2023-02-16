import RequestService from './request.service.js'

class LocalStorageService {

    getOrFetch(key, url) {
        var value = JSON.parse(localStorage.getItem(key))
        if (!value) {
            const response = RequestService.sendAuthorizedGetRequest(url).then(
                (response) => { localStorage.setItem(key, JSON.stringify(response)); return response }

            ).catch(() => alert("getOrFetch in localStorageService Failed"))

            return response;


        }
        else { return JSON.parse(localStorage.getItem(key)); }

    }

    permanentUpdate(key, value, url) {
        if (JSON.stringify(localStorage.getItem(key)) !== value) {
            RequestService.sendAuthorizedPostRequest(url, value)
                .then(() => localStorage.setItem(key, JSON.stringify(value)))
                .catch(() => alert("update in localStorageService Failed"))
        }
    }

    tempUpdate(key, value) {
        localStorage.setItem(key, JSON.stringify(value))

    }

}

export default new LocalStorageService();