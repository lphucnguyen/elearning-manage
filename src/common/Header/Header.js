import React, {useRef, useLayoutEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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

    const logout = () => {
        dispatch({
            type: 'DANG_XUAT'
        })

        history.replace("/home")
    }

    return (
        <div className="header" ref={headerElement}>
            <div className="container">
                <div className="header-contain d-flex align-items-center">
                    <a className="logo d-flex align-items-center" href="#">
                        <img src="/images/logo_education.png" alt="logo" />Cyber Education
                    </a>
                    <div className="menu">
                        <ul className="menu-list d-flex">
                            <li>
                                <NavLink activeClassname="active" to="/home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassname="active" to="/courses">Courses</NavLink>
                            </li>
                            <li>
                                <a href="/home#carousel">How it Works</a>
                            </li>
                            <li>
                                <a href="/home#courseDemo">Demos</a>
                            </li>
                            <li>
                                <a href="/home#services">Services</a>
                            </li>
                            <li>
                                <a href="#footer">Placement</a>
                            </li>
                        </ul>
                    </div>
                    {(typeStorage === "GV") ? 
                        <NavLink to="/admin" className="btn--common btn--go">Go to dashboard</NavLink>
                    :   
                        <NavLink to="/mycourses" className="btn--common btn--go">My courses</NavLink>
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
