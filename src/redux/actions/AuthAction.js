import {authServices} from '../../services/AuthServices';
import { useToasts } from 'react-toast-notifications';
import { history } from '../../App';

export const login = (username, password) => {

    return (dispatch) => {
        // Call loading open
        dispatch({
            type: 'openLoading'
        })

            authServices
            .login(username, password)
            .then((res) => {
                dispatch({
                        type: 'DANG_NHAP',
                        data: res.data,
                        error: false,
                        isLogin: true
                    })
                    window.location = "/home"
            })
            .catch((err) => {
                console.log("errors:", err.message);
                dispatch({
                    type: 'DANG_NHAP',
                    data: false,
                    error: true,
                    isLogin: false
                })
                dispatch({
                    type: 'DANG_NHAP',
                    data: false,
                    error: false,
                    isLogin: false
                })
            });

            // Turn off loading
            dispatch({
                type: 'closeLoading'
            })
    }
}


export const register = (username, password, hoTen, sdt, maNhom, email) => {

    return (dispatch) => {
        // Call loading open
        dispatch({
            type: 'openLoading'
        })

            authServices
            .register(username, password, hoTen, sdt, maNhom, email)
            .then((res) => {
                dispatch({
                        type: 'DANG_KY',
                        data: res.data,
                        error: false,
                        isLogin: true
                    })

                window.location = "/admin"
            })
            .catch((err) => {
                console.log("errors:", err.message);
                dispatch({
                    type: 'DANG_KY',
                    data: false,
                    error: true,
                    isLogin: false
                })
                dispatch({
                    type: 'DANG_KY',
                    data: false,
                    error: false,
                    isLogin: false
                })
            });

            // Turn off loading
            dispatch({
                type: 'closeLoading'
            })
    }
}

