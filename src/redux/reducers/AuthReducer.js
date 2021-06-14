const stateDefault = {
    login: false,
    error: false
}

export const AuthReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'DANG_NHAP': {
            state.login = action.isLogin;
            state.error = action.error;
            
            if(action.isLogin) {
                let accessToken = action.data.accessToken;

                localStorage.setItem("accessToken", accessToken)
            }

            return {...state};
        }
        case 'DANG_KY': {
            state.login = action.isLogin;
            state.error = action.error;
            
            if(action.isLogin) {
                let accessToken = action.data.accessToken;

                localStorage.setItem("accessToken", accessToken)
            }

            return {...state};
        }
        case 'DANG_XUAT': {
            state.login = action.data;

            return {...state};
        }
        default: return {...state};
    }
}