import React, {useRef, useLayoutEffect, useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Auth from '../../Components/layouts/admin/Auth/Auth';
import './Header.scss';
import { history } from '../../App'
import { typeStorage } from '../../configs/settings'

function Header() {
    const headerElement = useRef(null);

    const dispatch = useDispatch()

    useLayoutEffect(() => {
        window.addEventListener("scroll", (e) => {
            if(headerElement.current === null) return;

            if(window.scrollY > 0) headerElement.current.classList.add("active")
            else headerElement.current.classList.remove("active")
        })

    }, [])

    useEffect(() => {
        if(localStorage.getItem("type")) {
            (document.querySelector("#loginAdmin.d-none"))
            ?
            document.querySelector("#loginAdmin").classList.remove("d-none")
            :
            document.querySelector("#loginMyCourses").classList.remove("d-none");
        }
    },[])

    const logout = () => {
        
        dispatch({
            type: 'DANG_XUAT'
        })

        history.replace("/home");
        if(localStorage.getItem("type") == undefined) {
            (document.querySelector("#loginAdmin"))
            ?
            document.querySelector("#loginAdmin").classList.add("d-none")
            :
            document.querySelector("#loginMyCourses").classList.add("d-none");
        }
    }

    return (
        <div className="header" ref={headerElement}>
            <div className="container">
                <div className="header-contain d-flex align-items-center">
                    <NavLink className="logo d-flex align-items-center" to="/home">
                        <img src="/images/logo_education.png" alt="logo" />Cyber Education
                    </NavLink>
                    <div className="menu">
                        <ul className="menu-list d-flex">
                            <li>
                                <NavLink activeClassname="active" to="/home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassname="active" to="/courses">Courses</NavLink>
                            </li>
                        </ul>
                    </div>
                    {(typeStorage === "GV") ? 
                        <NavLink id="loginAdmin" to="/admin" className="btn--common btn--go d-none">Go to dashboard</NavLink>
                    :   
                        <NavLink id="loginMyCourses" to="/mycourses" className="btn--common btn--go d-none">My courses</NavLink>
                    }
                    {Auth.isAuth() ? 
                        <NavLink to="/home" onClick={logout} className="btn--common btn--login"><i class="fa fa-sign-out-alt pr-2"></i>Log Out</NavLink>
                    :   
                        <NavLink to="/login" className="btn--common btn--login"><i class="fa fa-sign-in-alt pr-2"></i>Login</NavLink>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Header;
