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
        </div>
    )
}

export default SliderbarAdmin;