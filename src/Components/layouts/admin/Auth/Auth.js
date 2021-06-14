class Auth {
    isAuth = () => {
        if(localStorage.getItem("accessToken")){
            return true;
        }
        else{
            return false;
        }
    }

    getAccessToken = () => {
        if(this.isAuth()) return localStorage.getItem("accessToken");
        else return "";
    }
}

export default new Auth();
