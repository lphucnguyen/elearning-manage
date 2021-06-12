import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachNguoiDung, themNguoiDung } from '../../../../redux/actions/UserAction';
import UserItem from '../UserItem/UserItem';
import'./MainUserManage.scss'

function MainUserManage() {

    let [data, setData] = useState({
        title: "",
        group: "GP01",
        values: {
            username: "",
            email: "",
            password: "",
            type: "Sinh Viên",
            name: "",
            numGroup: "GP01"
        }
    });

    let [dataEdit, setDataEdit] = useState({
        values: {
            username: "",
            email: "",
            password: "",
            type: "",
            name: "",
            numGroup: ""
        }
    })

    let arrInput = document.querySelectorAll(".modal-form form input, .modal-form form select");
    
    const {arrUser} = useSelector(state => state.UserReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(layDanhSachNguoiDung("GP01"));
    },[])

    const handleGroup = (evt) => {
        let {value} = evt.target;
        setData({
            ...data,
            group: value
        })
    }

    const handleChange = (evt) => {
        const {value, id} = evt.target;
        
        let newValues = {...data.values};
        newValues[id] = value;

        setData({
            ...data,
            values: newValues
        })
    }

    const showAdd = () => {
        let formAdd = document.querySelector("#modalForm");
        let formDetail = document.querySelector("#modalFormDetails");

        formAdd.classList.add("d-block");
        if(document.querySelector("#modalFormDetails.d-block")) 
            formDetail.classList.remove("d-block");

        setData({
            ...data,
            title: "Add User"
        })
    };

    const addUser = () => {
        const user = {...data.values};
        dispatch(themNguoiDung(user));
        console.log(user);
    };

    const editUser = () => {
        let formAdd = document.querySelector("#modalForm");
        let formDetail = document.querySelector("#modalFormDetails");

        formAdd.classList.add("d-block");
        if(document.querySelector("#modalFormDetails.d-block")) 
            formDetail.classList.remove("d-block");
 
        setData({
            ...data,
            title: "Edit User"
        })

        // let editUser = arrUser.find(item => item.maKhoaHoc === maMaKhoa);
        // setDataEdit({
        //     values: editUser
        // })
        console.log(dataEdit.values)
    };

    const showDetail = () => {
        let formAdd = document.querySelector("#modalForm");
        let formDetail = document.querySelector("#modalFormDetails");

        formDetail.classList.add("d-block");
        if(document.querySelector("#modalForm.d-block")) 
            formAdd.classList.remove("d-block");

        
    };

    const renderListUser = () => {
        return arrUser.map((item, index) => {
            return <Fragment key={index}>
                <UserItem user={item} editUser={editUser} showDetail={showDetail}/>
            </Fragment>
        })
    };

    return (
        <main className="main-container">
                <div className="row">
                    <div className="col-md-5 pl-0">
                        <div className="list-users">
                            <div className="group-select-info d-flex justify-content-between  align-items-center p-3">
                                <button className="btn-add shadow" onClick={showAdd}><i className="fa fa-plus" /></button>
                                <div className="count-user d-flex justify-content-center align-items-center">
                                    <span className="icon-avatar"><i className="fa fa-user-circle" /></span>
                                    <span className="content">179 users was found!!</span>
                                    <span className="icon-check"><i className="fa fa-check" /></span>
                                </div>
                                <div className="select-group" onChange={(e) => handleGroup(e)}>
                                    <select>
                                        <option value="GP01">Group 01</option>
                                        <option value="GP02">Group 02</option>
                                        <option value="GP03">Group 03</option>
                                        <option value="GP04">Group 04</option>
                                        <option value="GP05">Group 05</option>
                                        <option value="GP06">Group 06</option>
                                        <option value="GP07">Group 07</option>
                                        <option value="GP08">Group 08</option>
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
                                {renderListUser()}
                            </div>
                        </div>
                    </div>
                    {/* modal box */}
                    <div className="col-md-7 pt-3 pt-lg-0">
                        <div className="modal-user pb-3" id="modalFormDetails">
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
                        <div className="modal-form" id="modalForm">
                            <div className="form-user">
                                <form>
                                    <h1>{data.title}</h1>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input onChange={handleChange} className="form-control" type="text" id="username" placeholder="Enter username"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input onChange={handleChange} className="form-control" type="email" id="email" placeholder="Enter email"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input onChange={handleChange} className="form-control" type="password" id="password" placeholder="Enter password"/>
                                    </div>
                                    <div className="form-group d-flex flex-column">
                                        <label>Accout type</label>
                                        <select onChange={(e) => handleChange(e)} id="type">
                                            <option>Sinh viên</option>
                                            <option>Giảng viên</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input onChange={handleChange} className="form-control" type="text" id="name" placeholder="Enter name"/>
                                    </div>
                                    <div className="form-group d-flex flex-column" id="numGroup">
                                        <label>Choose a group</label>
                                        <select onChange={(e) => handleChange(e)}>
                                            <option value="GP01">Group 01</option>
                                            <option value="GP02">Group 02</option>
                                            <option value="GP03">Group 03</option>
                                            <option value="GP04">Group 04</option>
                                            <option value="GP05">Group 05</option>
                                            <option value="GP06">Group 06</option>
                                            <option value="GP07">Group 07</option>
                                            <option value="GP08">Group 08</option>
                                        </select>
                                    </div>
                                    <button type="button" onClick={addUser} className="btn btn--green">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    )
}

export default MainUserManage;