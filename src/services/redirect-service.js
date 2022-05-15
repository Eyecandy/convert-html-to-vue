class RedirectService {

    getRedirectUrl() {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user && user.roles) {
            if (user.roles[0] == 'buyer') {
                return '/buyer/configure-carbrand'
            }
            else if (user.roles[0] == 'seller') {
                return '/seller/home'
            }
        }
        return '/login'
    }

}


export default new RedirectService();