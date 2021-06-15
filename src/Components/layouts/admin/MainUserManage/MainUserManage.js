import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../../common/Loading/Loading';
import { 
    capNhatThongTinNguoiDungAction, 
    layDanhSachNguoiDungAction, 
    layDanhSachNguoiDung_PhanTrangAction, 
    themNguoiDungAction, 
    thongTinNguoiDungAction, 
    xoaDanhSachNguoiDungAction, 
    clickGroupAction,
    xoaNguoiDungAction
} from '../../../../redux/actions/UserAction';
import UserItem from '../UserItem/UserItem';
import'./MainUserManage.scss'

function MainUserManage() {

    let [userList, setUserList] = useState([]);
    let [user, setUser] = useState({});
    let [notRegisterd, setNotRegistered] = useState([]);
    let [unRegisterd, setUnRegistered] = useState([]);
    let [Registerd, setRegistered] = useState([]);
    let [data, setData] = useState({
        title: "",
        values: {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDt: "",
            maLoaiNguoiDung: "HV",
            maNhom: "GP01",
            email: ""
        },
        arrUserUpdate: []
    });

    let [dataEdit, setDataEdit] = useState({
            taiKhoan: "",
            email: "",
            soDt: "",
            maLoaiNguoiDung: "",
            hoTen: ""
    })

    let arrInput = document.querySelectorAll(".modal-form form input, .modal-form form select");


    let userGroup = useSelector(state => state.UserReducer.group);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(layDanhSachNguoiDungAction(userGroup, setUserList));
    },[userGroup])

    useEffect(() => {
        // console.log(dataEdit);
        
        arrInput.forEach((item, index) => {
            let {id} = item;

            if(id === "maLoaiNguoiDung"){
                (dataEdit.maLoaiNguoiDung === "HV") ? 
                document.querySelector(`#${id}`).selectedIndex = 0 : 
                document.querySelector(`#${id}`).selectedIndex = 1;
            }
            else if (id === "matKhau")
                document.querySelector(`#${id}`).value = "";
            else if (id === "numGroup"){
                document.querySelector(`#${id}`).value = userGroup;
                for(let index = 1; index<=16; index++) {
                    if (document.querySelector(`#${id}`).value === `GP0${index}`)
                        document.querySelector(`#${id}`).selectedIndex = index-1;
                    else if (document.querySelector(`#${id}`).value === `GP${index}`)
                        document.querySelector(`#${id}`).selectedIndex = index-1;
                    else 
                        console.log('Mã nhóm không xác định');
                }
            }
            else
                document.querySelector(`#${id}`).value = dataEdit[id];
        })
    },[dataEdit,userGroup])

    useEffect(() => {
        setData({
            ...data,
            values: {
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                soDt: "",
                maLoaiNguoiDung: "HV",
                maNhom: "GP01",
                email: ""
            }
        })
    },[user])

    const handleClickGroup = (evt) => {
        let {value} = evt.target;
        setUserList([]);
        dispatch(clickGroupAction(value));
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
        let btnAdd = document.querySelector("#btnAdd");
        let btnUpdate = document.querySelector("#btnUpdate");

        formAdd.classList.add("d-block");
        if(document.querySelector("#modalFormDetails.d-block")) 
            formDetail.classList.remove("d-block");

        btnAdd.classList.add("d-block");
        if(document.querySelector("#btnUpdate.d-block"))
            btnUpdate.classList.remove("d-block");

        document.querySelector(".eye-hidden").classList.add("d-block");    
        
        setData({
            ...data,
            title: "Add User"
        })

        resetFunc();
    };

    const addUser = () => {
        setUser(data.values)
        // console.log(user);
        dispatch(themNguoiDungAction(user));
    };

    const editUser = (userInfo) => {
        let formAdd = document.querySelector("#modalForm");
        let formDetail = document.querySelector("#modalFormDetails");
        let btnAdd = document.querySelector("#btnAdd");
        let btnUpdate = document.querySelector("#btnUpdate");

        formAdd.classList.add("d-block");
        if(document.querySelector("#modalFormDetails.d-block")) 
            formDetail.classList.remove("d-block");
 
        btnUpdate.classList.add("d-block");
        if(document.querySelector("#btnUpdate.d-block"))
            btnAdd.classList.remove("d-block");

        document.querySelector(".eye-hidden").classList.add("d-block");    

        setData({
            ...data,
            title: "Edit User"
        })
        
        thongTinNguoiDungAction(setUser, userInfo);
        setDataEdit(userInfo);
    };

    const updateUser = () => {
        let editUser= {...user};
        console.log('editUser: ', editUser)
        arrInput.forEach(input => {
            const {id,value} = input;
            editUser = {...editUser,[id]:value};
        })

        dispatch(capNhatThongTinNguoiDungAction(editUser));
    }

    const showDetail = (userDetail) => {
        let formAdd = document.querySelector("#modalForm");
        let formDetail = document.querySelector("#modalFormDetails");

        formDetail.classList.add("d-block");
        if(document.querySelector("#modalForm.d-block")) 
            formAdd.classList.remove("d-block");
        
        setUser(userDetail);
        (userDetail.maLoaiNguoiDung === "HV") 
        ? 
        document.querySelector("#maLoaiNguoiDungDetail").selectedIndex = 0
        :
        document.querySelector("#maLoaiNguoiDungDetail").selectedIndex = 1
    };

    const deleteUser = (taiKhoan) => {
        xoaNguoiDungAction(taiKhoan);
    } 

    const resetFunc = () => {
        arrInput.forEach((item,index) => {
            const {id,value} = item;
            if(id === 'maLoaiNguoiDung'){
                document.getElementById(id).selectedIndex = 0;
            }else{
                document.getElementById(id).value = '';
            }
        });
    }

    const renderListUser = () => {
        return userList?.map((item, index) => {
            return <Fragment key={index}>
                <UserItem user={item} deleteUser={deleteUser} editUser={editUser} showDetail={showDetail}/>
            </Fragment>
        })
    };

    const renderPages = () => {
        let content = [];
        for(let idx = 1; idx <= 16; idx++) {
            (idx<10) 
            ? 
            content.push(<option key={idx} value={`GP0${idx}`}>{`Group 0${idx}`}</option>)
            :
            content.push(<option key={idx} value={`GP${idx}`}>{`Group ${idx}`}</option>)
        }
        return content;
    }

    return (
        <main className="main-container">
                <div className="row">
                    <div className="col-md-5 pl-0">
                        <div className="list-users">
                            <div className="group-select-info d-flex justify-content-between  align-items-center p-3">
                                <button className="btn-add shadow" onClick={showAdd}><i className="fa fa-plus" /></button>
                                <div className="count-user d-flex justify-content-center align-items-center">
                                    <span className="icon-avatar"><i className="fa fa-user-circle" /></span>
                                    <span className="content">{userList.length} users was found!!</span>
                                    <span className="icon-check"><i className="fa fa-check" /></span>
                                </div>
                                <div className="select-group" onChange={(e) => handleClickGroup(e)}>
                                    <select>
                                        {renderPages()}
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
                                <Loading/>
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
                                                <img className="w-100 h-100" src="/images/user.png" alt />
                                            </div>
                                            <p className="avatar-id m-0">{user.taiKhoan}</p>
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
                                                <input disabled className="form-control" type="text" id="username" value={user.taiKhoan}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="emailDetail">Email</label>
                                                <input disabled className="form-control" type="email" id="emailDetail"  value={user.email}/>
                                            </div>
                                            <div className="form-group d-flex flex-column">
                                                <label>Accout type</label>
                                                <select id="maLoaiNguoiDungDetail">
                                                    <option value="HV">Sinh viên</option>
                                                    <option value="GV">Giảng viên</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input disabled className="form-control" type="text" id="name" value={user.hoTen}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone</label>
                                                <input disabled className="form-control" type="text" id="phone" value={user.soDt}/>
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
                                        <label htmlFor="taiKhoan">Username</label>
                                        <input onChange={handleChange} className="form-control" type="text" id="taiKhoan" placeholder="Enter username"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input onChange={handleChange} className="form-control" type="text" id="email" placeholder="Enter email"/>
                                    </div>
                                    <div className="form-group">
                                        <span onClick={() => {
                                             document.querySelector(".eye-appear").classList.toggle("opt-1");
                                             document.querySelector(".eye-hidden").classList.toggle("opt-0");
                                             document.querySelector(".matKhau").type = "password";
                                        }} className="eye-appear opt-0"><i class="fa fa-eye"></i></span>
                                        <span onClick={() => {
                                             document.querySelector(".eye-appear").classList.toggle("opt-1");
                                             document.querySelector(".eye-hidden").classList.toggle("opt-0");
                                             document.querySelector(".matKhau").type = "text";
                                        }} className="eye-hidden"><i class="fa fa-eye-slash"></i></span>
                                        <label htmlFor="matKhau">Password</label>
                                        <input onChange={handleChange} className="form-control matKhau " type="password" id="matKhau" placeholder="Enter password"/>
                                    </div>
                                    <div className="form-group d-flex flex-column">
                                        <label>Accout type</label>
                                        <select id="maLoaiNguoiDung" onChange={(e) => handleChange(e)}>
                                            <option value="HV">Học viên</option>
                                            <option value="GV">Giảng viên</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="hoTen">Name</label>
                                        <input onChange={handleChange} className="form-control" type="text" id="hoTen" placeholder="Enter name"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="soDt">Phone</label>
                                        <input onChange={handleChange} className="form-control" type="text" id="soDt" placeholder="Enter phone"/>
                                    </div>
                                    <div className="form-group d-flex flex-column" id="numGroup">
                                        <label>Choose a group</label>
                                        <select id="numGroup" onChange={(e) => handleChange(e)}>
                                            {renderPages()}
                                        </select>
                                    </div>
                                    <button id="btnAdd" type="button" onClick={addUser} className="btn btn--green">Submit</button>
                                    <button id="btnUpdate" type="button" onClick={updateUser} className="btn btn--green">Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    )
}

export default MainUserManage;