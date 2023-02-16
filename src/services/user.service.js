import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8080/api/';
class UserService {

    authorizedGet(urlSuffix) {
        axios
            .get(API_URL + urlSuffix, {
                headers: { authHeader }
            })
            .then((Response) => console.log(Response))
            .catch((Response) => console.log(Response));
    }


}
export default new UserService();
