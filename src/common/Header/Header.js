import React from 'react'
import './Header.scss';

function Header() {
    return (
        // <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header-contain d-flex">
                            <a className="logo d-flex align-items-center">
                                <img src="./logo192.png" alt="" />
                                My Skills
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
            </div>
        // </div>
    )
}

export default Header;
