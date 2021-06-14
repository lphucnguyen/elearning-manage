import React, {useEffect} from 'react'
import './LoginContent.scss'
import { useDispatch, useSelector } from 'react-redux'
import { login, register } from '../../../redux/actions/AuthAction';
import { useToasts } from 'react-toast-notifications'
import auth from '../../layouts/admin/Auth/Auth';
import { history } from '../../../App';

function LoginContent() {

    const changeSignUp = () => {
        document.querySelector('.form .tab-header #signIn').classList.remove('active');
        document.querySelector('.form .tab-header #signUp').classList.add('active');

        document.querySelector('.form .tab-content #signIn-body').classList.remove('active');
        document.querySelector('.form .tab-content #signUp-body').classList.add('active');
    }
    const changeSignIn = () => {
        document.querySelector('.form .tab-header #signUp').classList.remove('active');
        document.querySelector('.form .tab-header #signIn').classList.add('active');

        document.querySelector('.form .tab-content #signUp-body').classList.remove('active');
        document.querySelector('.form .tab-content #signIn-body').classList.add('active');
    }

    const dispatch = useDispatch()
    const { addToast } = useToasts()
    const isError = useSelector(state => state.AuthReducer.error);
    const isLogin = useSelector(state => state.AuthReducer.login);

    const submitLogin = (e) => {
        e.preventDefault()
        let username = "";
        let password = "";

        username = e.target.querySelector("#username").value;
        password = e.target.querySelector("#password").value;

        if(username == "" || password == ""){
            addToast("Chua nhap tai khoan hoac mat khau", {
                appearance: 'error',
                autoDismiss: true,
            })    
            return;
        }

        dispatch(login(username, password))
    }

    useEffect(() => {
        if(isError){
            addToast("Dang nhap that bai", {
                appearance: 'error',
                autoDismiss: true,
            })            
        }
    }, [isError])

    const submitRegister = (e) => {
        e.preventDefault()

        let username = e.target.querySelector("#username").value;
        let password = e.target.querySelector("#password").value;
        let fullname = e.target.querySelector("#name").value;
        let phone = e.target.querySelector("#phone").value;
        let email = e.target.querySelector("#email").value;

        if(username == "" || password == "" || fullname == "" || phone == "" || email == ""){
            addToast("Thong tin chua day du", {
                appearance: 'error',
                autoDismiss: true,
            })    
            return;
        }

        dispatch(register(username, password, fullname, phone, "GP01", email))

    }


    return (
        <div className="wrapper-login">
            <div className="form shadow">
                <div className="tab-header">
                    <div id="signIn" onClick={changeSignIn} className="active">Log In</div>
                    <div id="signUp" onClick={changeSignUp}>Register</div>
                </div>
                <div className="tab-content">
                    <form onSubmit={submitLogin} method="POST">
                        <div id="signIn-body" className="tab-body active">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter your username..." />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter your password..." />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="check" />
                                <label className="form-check-label ml-2" htmlFor="check">Remember me</label>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn--green">Login</button>
                            </div>
                        </div>
                    </form>


                    <form onSubmit={submitRegister} method="POST">
                        <div id="signUp-body" className="tab-body">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter your username..." />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter your password..." />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name..." />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" className="form-control" id="phone" placeholder="Enter your phone..." />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email..." />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn--green">Register</button>
                            </div>
                        </div>    
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default LoginContent;
