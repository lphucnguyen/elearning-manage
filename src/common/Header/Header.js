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
    const [isLogin, setIsLogin] = useState(false)

    useLayoutEffect(() => {
        window.addEventListener("scroll", (e) => {
            if(headerElement.current === null) return;

            if(window.scrollY > 0) headerElement.current.classList.add("active")
            else headerElement.current.classList.remove("active")
        })

        if(localStorage.getItem("accessToken")){
            setIsLogin(true)
        }
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
        setIsLogin(false)
        history.replace("/home")
    }

    const renderHeader = () => {

        if(isLogin){
            if(typeStorage === "GV") {
                return <NavLink to="/admin" className="btn--common btn--go">Go to dashboard</NavLink>
            }else if(typeStorage === "HV"){
                return <NavLink to="/mycourses" className="btn--common btn--go">My courses</NavLink>
            }
        }else {
            return;
        }
    }
    
    useEffect(() => {
        console.log("Render")
    }, [])

    return (
        <div className="header" ref={headerElement}>
            <div className="container">
                <div className="header-contain d-flex align-items-center flex-wrap">
                    <NavLink to="/home" className="logo d-flex align-items-center" href="#">
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
                    <div className="btn-group">
                    {renderHeader()}
                    {Auth.isAuth() ? 
                        <NavLink to="/home" onClick={logout} className="btn--common btn--login"><i class="fa fa-sign-out-alt pr-2"></i>Log Out</NavLink>
                    :   
                        <NavLink to="/login" className="btn--common btn--login"><i class="fa fa-sign-in-alt pr-2"></i>Login</NavLink>
                    }                        
                    </div>       
                </div>
            </div>
        </div>
    )
}

export default Header;
