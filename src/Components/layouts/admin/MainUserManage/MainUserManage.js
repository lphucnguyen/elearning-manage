import React from 'react'
import'./MainUserManage.scss'

function MainUserManage() {
    return (
        <main className="main-container">
                <div className="row">
                    <div className="col-md-5 pl-0">
                        <div className="list-users">
                            <div className="group-select-info d-flex justify-content-between  align-items-center p-3">
                                <button className="btn-add shadow"><i className="fa fa-plus" /></button>
                                <div className="count-user d-flex justify-content-center align-items-center">
                                    <span className="icon-avatar"><i className="fa fa-user-circle" /></span>
                                    <span className="content">179 users was found!!</span>
                                    <span className="icon-check"><i className="fa fa-check" /></span>
                                </div>
                                <div className="select-group">
                                    <select>
                                        <option value={0}>Group 01</option>
                                        <option value={1}>Group 02</option>
                                        <option value={2}>Group 03</option>
                                        <option value={3}>Group 04</option>
                                        <option value={4}>Group 05</option>
                                        <option value={5}>Group 06</option>
                                        <option value={6}>Group 07</option>
                                        <option value={7}>Group 08</option>
                                    </select>
                                    <div className="custom-arrow" />
                                </div>
                            </div>
                            <div className="search-user">
                                <div className="search-user--input d-flex p-3">
                                    <input type="text" placeholder="Search User..."/>
                                </div>
                            </div>
                            <div className="list-user--item">
                                <div className="user d-flex justify-content-between align-items-center px-3 py-2" data-toggle="modal" data-target="#exampleModal">
                                    <div className="avatar-user">
                                        <img className="w-100 h-100" src="./images/user.jpg" alt />
                                    </div>
                                    <div className="info-user d-flex justify-content-center flex-column">
                                        <span className="id">12312</span>
                                        <span className="email">123213@gmail.com</span>
                                    </div>
                                    <div className="options d-flex justify-content-between align-items-center">
                                        <span><i className="fa fa-trash" /></span>
                                        <span><i className="fa fa-edit" /></span>
                                    </div>
                                </div>
                                <div className="user d-flex justify-content-between align-items-center px-3 py-2">
                                    <div className="avatar-user">
                                        <img className="w-100 h-100" src="./images/user.jpg" alt />
                                    </div>
                                    <div className="info-user d-flex justify-content-center flex-column">
                                        <span className="id">12312</span>
                                        <span className="email">123213@gmail.com</span>
                                    </div>
                                    <div className="options d-flex justify-content-between align-items-center">
                                        <span><i className="fa fa-trash" /></span>
                                        <span><i className="fa fa-edit" /></span>
                                    </div>
                                </div>
                                <div className="user d-flex justify-content-between align-items-center px-3 py-2">
                                    <div className="avatar-user">
                                        <img className="w-100 h-100" src="./images/user.jpg" alt />
                                    </div>
                                    <div className="info-user d-flex justify-content-center flex-column">
                                        <span className="id">12312</span>
                                        <span className="email">123213@gmail.com</span>
                                    </div>
                                    <div className="type-user">GV</div>
                                    <div className="options d-flex justify-content-between align-items-center">
                                        <span><i className="fa fa-trash" /></span>
                                        <span><i className="fa fa-edit" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* modal box */}
                    <div className="col-md-7 pt-3 pt-lg-0">
                        <div className="modal-user pb-3" id="#modalFormDetails">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="modal-user--course">
                                        <div className="modal-user--course__avatar d-flex flex-column justify-content-center align-items-center">
                                            <div className="avatar-img">
                                                <img className="w-100 h-100" src="./images/user.jpg" alt />
                                            </div>
                                            <p className="avatar-id m-0">12311</p>
                                        </div>
                                        <div className="modal-user--course__pending d-flex justify-content-center align-items-center flex-column">
                                            <div className="content d-flex justify-content-between align-items-center">
                                                <p className="content-title">Pending Courses</p>
                                                <p className="note">Need approved to allow the user accessing</p>
                                                <div className="custom-arrow-content">
                                                    <span className="arrow-down"><i className="fa fa-angle-down" /></span>
                                                </div>
                                            </div>
                                            <div className="details">
                                                <div className="list-details">
                                                    <ul>
                                                        <li className="list-details--item">
                                                            <div className="d-flex justify-content-center align-items-center">
                                                                <span className="icon-user"><i className="fa fa-id-card-alt" /></span>
                                                                <span className="content">Best Java Practice Project From Basic to Advance</span>
                                                                <span className="icon-delete"><i className="fa fa-circle-notch" /></span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-user--course__approved d-flex justify-content-center align-items-center flex-column">
                                            <div className="content d-flex justify-content-between align-items-center">
                                                <p className="content-title">Approved Courses</p>
                                                <p className="note">The courses have already accessed by user</p>
                                                <div className="custom-arrow-content">
                                                    <span className="arrow-down"><i className="fa fa-angle-down" /></span>
                                                </div>
                                            </div>
                                            <div className="details" />
                                        </div>
                                        <div className="modal-user--course__available d-flex justify-content-center align-items-center flex-column">
                                            <div className="content d-flex justify-content-between align-items-center">
                                                <p className="content-title">Available Courses</p>
                                                <p className="note">Registing a course quickly for user</p>
                                                <div className="custom-arrow-content">
                                                    <span className="arrow-down"><i className="fa fa-angle-down" /></span>
                                                </div>
                                            </div>
                                            <div className="details" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="modal-user--form">
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="username">Username</label>
                                                <input className="form-control" type="text" id="username" defaultValue={123123} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input className="form-control" type="email" id="email" defaultValue="12312@gmail.com" />
                                            </div>
                                            <div className="form-group d-flex flex-column">
                                                <label>Accout type</label>
                                                <select>
                                                    <option>Sinh viên</option>
                                                    <option>Giảng viên</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input className="form-control" type="text" id="name" defaultValue={123} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-form">
                            <div className="form-user">
                                <form>
                                    <h1>Add User</h1>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input className="form-control" type="text" id="username" placeholder="Enter username"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input className="form-control" type="email" id="email" placeholder="Enter email"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input className="form-control" type="password" id="password" placeholder="Enter password"/>
                                    </div>
                                    <div className="form-group d-flex flex-column">
                                        <label>Accout type</label>
                                        <select>
                                            <option>Sinh viên</option>
                                            <option>Giảng viên</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input className="form-control" type="text" id="name" placeholder="Enter name"/>
                                    </div>
                                    <div className="form-group d-flex flex-column">
                                        <label>Choose a group</label>
                                        <select>
                                            <option value={0}>Group 01</option>
                                            <option value={1}>Group 02</option>
                                            <option value={2}>Group 03</option>
                                            <option value={3}>Group 04</option>
                                            <option value={4}>Group 05</option>
                                            <option value={5}>Group 06</option>
                                            <option value={6}>Group 07</option>
                                            <option value={7}>Group 08</option>
                                        </select>
                                    </div>
                                    <button className="btn btn--green">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    )
}

export default MainUserManage;