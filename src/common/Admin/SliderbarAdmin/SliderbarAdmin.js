import React from 'react'
import { NavLink } from 'react-router-dom';
import './SliderbarAdmin.scss'

function SliderbarAdmin() {
    return (
        <div className="slidebar">
            <div className="slidebar-menu">
                <li className="item">
                    <NavLink to="/admin/course-manage" className="menu-btn">
                        <i className="fa fa-book"></i><span>Quản lý khóa học</span>
                    </NavLink>
                </li>
                <li className="item">
                    <NavLink to="/admin/user-manage" className="menu-btn">
                        <i className="fa fa-users"></i><span>Quản lý người dùng</span>
                    </NavLink>
                </li>
            </div>
            <div className="slidebar-profile">
                <div className="profile-info">
                    <div className="img" title="profile">
                        <img src="/images/user.png" alt="" />
                    </div>
                    <p className="username">dangtdn</p>
                    <p className="code-group">GP01</p>
                    <p className="email">nguyendang@gmail.com</p>
                </div>
                <div className="profile-contact">
                    <p>Contact me</p>
                    <p>
                        <a href="https://www.facebook.com/nhatdang.nguyen.319"><i class="fab fa-facebook-square"></i></a>
                        <a href="https://github.com/dangtdn"><i class="fab fa-github"></i></a>
                    </p>
                    <p>
                        <span className="icon-copy"><i class="fa fa-copyright"></i></span>
                        <span>Copyright 2020 CourseHub.</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SliderbarAdmin;