import React, {useRef, useLayoutEffect} from 'react'
import './Header.scss';

function Header() {
    const headerElement = useRef(null);

    useLayoutEffect(() => {
        window.addEventListener("scroll", (e) => {
            if(headerElement.current === null) return;

            if(window.scrollY > 0) headerElement.current.classList.add("active")
            else headerElement.current.classList.remove("active")
        })
    }, [])

    return (
        <div className="header" ref={headerElement}>
            <div className="container">
                <div className="header-contain d-flex align-items-center">
                    <a className="logo d-flex align-items-center" href="">
                        <img src="./logo192.png" alt="" />My Skills
                    </a>
                    <div className="menu">
                        <ul className="menu-list d-flex">
                            <li>
                                <a className="active" href="">Home</a>
                            </li>
                            <li>
                                <a href="">Courses</a>
                            </li>
                            <li>
                                <a href="">How it Works</a>
                            </li>
                            <li>
                                <a href="">Demos</a>
                            </li>
                            <li>
                                <a href="">Services</a>
                            </li>
                            <li>
                                <a href="">Placement</a>
                            </li>
                            <li>
                                <a href="">Offers</a>
                            </li>
                        </ul>
                    </div>
                    <a className="a-teacher" href="">Are you a Teacher</a>
                    <a className="btn--common btn--login" href="">Login</a>
                </div>
            </div>
        </div>
    )
}

export default Header;
