import React from 'react'
import './LoginContent.scss'

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


    return (
        <div className="wrapper">
            <div className="form shadow">
                <form>
                    <div className="tab-header">
                        <div id="signIn" onClick={changeSignIn} className="active">Log In</div>
                        <div id="signUp" onClick={changeSignUp}>Register</div>
                    </div>
                    <div className="tab-content">
                        <div id="signIn-body" className="tab-body active">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="email" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter your username..." />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter your password..." />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="check" />
                                <label className="form-check-label" htmlFor="check">Remember me</label>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-primary">Login</button>
                            </div>
                        </div>
                        <div id="signUp-body" className="tab-body">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="email" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter your username..." />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter your password..." />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Re-enter your password..." />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email..." />
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginContent;
