import { useFormik, yupToFormErrors } from 'formik';
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import Loading from '../../../../common/Loading/Loading';
import { 
    capNhatThongTinNguoiDungAction, 
    layDanhSachNguoiDungAction, 
    layDanhSachNguoiDung_PhanTrangAction, 
    themNguoiDungAction, 
    thongTinNguoiDungAction,
    loadingAction, 
    clickGroupAction,
    xoaNguoiDungAction,
    timKiemDanhSachNguoiDungAction,
    layDanhSachKhoaHocChoXetDuyetAction,
    layDanhSachKhoaHocChuaGhiDanhAction,
    layDanhSachKhoaHocDaXetDuyetAction,
    xoaDanhSachNguoiDungAction
} from '../../../../redux/actions/UserAction';
import UserItem from '../UserItem/UserItem';
import'./MainUserManage.scss'

function MainUserManage() {
    let [dataControl, setDataControl] = useState({
        taiKhoan: "",
        maNhom: "GP01"
    });
    let [userListSearch, setUserListSearch] = useState([]);
    let [user, setUser] = useState({});
    let [notRegisterd, setNotRegistered] = useState([]);
    let [unRegisterd, setUnRegistered] = useState([]);
    let [registered, setRegistered] = useState([]);
    let [data, setData] = useState({
        title: "",
        values: {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maLoaiNguoiDung: "HV",
            maNhom: "GP01",
            email: ""
        }, 
        isClickSubmit: false,
        isClickEdit: false,
    });

    let [dataEdit, setDataEdit] = useState({})

    let arrInput = document.querySelectorAll(".modal-form form input, .modal-form form select");

    let {arrListUser} = useSelector(state => state.UserReducer);
    let userGroup = useSelector(state => state.UserReducer.group);
    const {addToast} = useToasts();
    let dispatch = useDispatch();

    useEffect(() => {
        searchUser();
        timKiemDanhSachNguoiDungAction(setUserListSearch, userGroup);

        if(document.querySelector("#modalForm.d-block")) 
            document.querySelector("#modalForm").classList.remove("d-block");
        if(document.querySelector("#modalFormDetails.d-block")) 
            document.querySelector("#modalFormDetails").classList.remove("d-block");
    },[userGroup, dataControl])

    useEffect(() => {
        arrInput.forEach((item, index) => {
            let {id} = item;

            if(id === "maLoaiNguoiDung"){
                (dataEdit.maLoaiNguoiDung === "HV") ? 
                document.querySelector(`#${id}`).selectedIndex = 0 : 
                document.querySelector(`#${id}`).selectedIndex = 1;
            }
            else if (id === "numGroup"){
                document.querySelector(`#${id}`).value = userGroup;
                for(let index = 1; index<=16; index++) {
                    if (document.querySelector(`#${id}`).value == `GP0${index}`)
                        document.querySelector(`#${id}`).getElementsByTagName("option")[index-1].selected = "selected";
                    else if (document.querySelector(`#${id}`).value == `GP${index}`)
                        document.querySelector(`#${id}`).getElementsByTagName("option")[index-1].selected = "selected";
                    else 
                        console.log('');
                }
            }
            else
                document.querySelector(`#${id}`).value = dataEdit[id];
        })
    },[data.isClickEdit])

    useEffect(() => {
        dispatch(layDanhSachNguoiDungAction(userGroup, dataControl.taiKhoan));
        dispatch(xoaDanhSachNguoiDungAction());
    },[data.isClickSubmit])

    const handleClickGroup = (evt) => {
        let {value} = evt.target;
        setDataControl({
            ...dataControl,
            maNhom: value
        })
        dispatch(clickGroupAction(value));
    }

    const handleKeySearch = (evt) => {
        let {value} = evt.target;
        setDataControl({
            ...dataControl,
            taiKhoan: value
        })
    }

    const searchUser = () => {
        dispatch(layDanhSachNguoiDungAction(userGroup, dataControl.taiKhoan));
        dispatch(xoaDanhSachNguoiDungAction());
    }

    const handleChange = (evt) => {
        const {value, id} = evt.target;
        let newValues = {...data.values};
        newValues[id] = value;

        setData({...data,values: newValues});
        setDataEdit({...dataEdit,[id]: value});
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
        document.querySelector("#taiKhoan").disabled = false;
        document.querySelector("#matKhau").disabled = false;

        setData({
            ...data,
            title: "Add User",
            values: {
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                soDt: "",
                maLoaiNguoiDung: "HV",
                maNhom: userGroup,
                email: ""
            }
        })

        resetFunc();
    };

    const addUser = () => {
        let isConfirm = true;
        arrInput.forEach((item, index) => {
            let {value, id} = item;
            if(value === "") {
                isConfirm = false;
                if(id === "taiKhoan") {
                    addToast('Tài khoản không được để trống', {
                        appearance: 'error',
                        autoDismiss: true
                    })
                }
                else if(id === "matKhau") {
                    addToast('Mật khẩu không được để trống', {
                        appearance: 'error',
                        autoDismiss: true
                    })
                }
                else if(id === "hoTen") {
                    addToast('Họ tên không được để trống', {
                        appearance: 'error',
                        autoDismiss: true
                    })
                }
                else if(id === "soDt") {
                    addToast('Số điện thoại không được để trống', {
                        appearance: 'error',
                        autoDismiss: true
                    })
                }
                else if(id === "email") {
                    addToast('Email không được để trống', {
                        appearance: 'error',
                        autoDismiss: true
                    })
                }
                else console.log('Hợp lệ');
            }
            else {
                if (id === "maNhom") 
                    isConfirm = true;
            }
        });
        // console.log(isConfirm);
        if(isConfirm === true){
            console.log(data.values);
            dispatch(themNguoiDungAction({...data.values, maNhom: userGroup}));
            (data.isClickSubmit === false) ? setData({isClickSubmit: true}) : setData({isClickSubmit: false})
        }
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
        document.querySelector("#taiKhoan").disabled = true;
        document.querySelector("#matKhau").disabled = true;
        setData({
            ...data,
            title: "Edit User"
        })

        const user = userListSearch.find((item) => item.taiKhoan === userInfo.taiKhoan);
        
        setDataEdit(user);
        
        (data.isClickEdit === false) ? setData({isClickEdit: true}) : setData({isClickEdit: false})
    };

    const updateUser = () => {
        let isConfirm = true;
        arrInput.forEach((item, index) => {
            let {value, id} = item;
            if(value === "") {
                isConfirm = false;
                if(id === "hoTen") {
                    addToast('Họ tên không được để trống', {
                        appearance: 'error',
                        autoDismiss: true
                    })
                }
                else if(id === "soDt") {
                    addToast('Số điện thoại không được để trống', {
                        appearance: 'error',
                        autoDismiss: true
                    })
                }
                else if(id === "email") {
                    addToast('Email không được để trống', {
                        appearance: 'error',
                        autoDismiss: true
                    })
                }
                else console.log('Hợp lệ');
            }
            else {
                if (id === "maNhom") 
                    isConfirm = true;
            }
        });
        // console.log(isConfirm);
        if(isConfirm === true){
            let editUser= {
                taiKhoan: dataEdit.taiKhoan,
                matKhau: dataEdit.matKhau,
                hoTen: dataEdit.hoTen,
                soDt: dataEdit.soDt,
                maLoaiNguoiDung: dataEdit.maLoaiNguoiDung,
                maNhom: userGroup,
                email: dataEdit.email
            };
            console.log('editUser: ', editUser)
    
            dispatch(capNhatThongTinNguoiDungAction(editUser));
            
            (data.isClickSubmit === false) ? setData({isClickSubmit: true}) : setData({isClickSubmit: false})
        }
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

        document.querySelector(".details.un-registered").classList.remove('show-list');
        document.querySelector(".details.registered").classList.remove('show-list');
        document.querySelector(".details.not-registered").classList.remove('show-list');
 
        dispatch(loadingAction());
    };

    const deleteUser = (taiKhoan) => {
        dispatch(xoaNguoiDungAction(taiKhoan));
    } 

    const courseUnregistered = (user) => {
        document.querySelector(".details.un-registered").classList.toggle('show-list');
        document.querySelector(".custom-arrow-content.un-registered").classList.toggle('arrow-action');
        
        layDanhSachKhoaHocChoXetDuyetAction(user, setUnRegistered);
    }

    const courseNotRegistered = (user) => {
        document.querySelector(".details.not-registered").classList.toggle('show-list');
        document.querySelector(".custom-arrow-content.not-registered").classList.toggle('arrow-action');
        
        layDanhSachKhoaHocChuaGhiDanhAction(user, setNotRegistered);
    }

    const courseRegistered = (user) => {
        document.querySelector(".details.registered").classList.toggle('show-list');
        document.querySelector(".custom-arrow-content.registered").classList.toggle('arrow-action');
        
        layDanhSachKhoaHocDaXetDuyetAction(user, setRegistered);
    }

    const resetFunc = () => {
        arrInput.forEach((item,index) => {
            const {id,value} = item;
            if(id === 'maLoaiNguoiDung'){
                document.getElementById(id).selectedIndex = 0;
            }
            else if (id === "numGroup"){
                document.querySelector(`#${id}`).value = userGroup;
                for(let index = 1; index<=16; index++) {
                    if (document.querySelector(`#${id}`).value == `GP0${index}`)
                        document.querySelector(`#${id}`).getElementsByTagName("option")[index-1].selected = "selected";
                    else if (document.querySelector(`#${id}`).value == `GP${index}`)
                        document.querySelector(`#${id}`).getElementsByTagName("option")[index-1].selected = "selected";
                    else 
                        console.log('');
                }
            }
            else{
                document.getElementById(id).value = '';
            }
        });
    }

    const renderListUser = () => {
        return arrListUser?.map((item, index) => {
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
                            <div className="group-select-info d-flex justify-content-between  align-items-center flex-wrap p-3">
                                <button className="btn-add shadow mb-2" onClick={showAdd}><i className="fa fa-plus" /></button>
                                <div className="count-user d-flex justify-content-center align-items-center mb-2">
                                    <span className="icon-avatar"><i className="fa fa-user-circle" /></span>
                                    <span className="content">{arrListUser.length} users was found!!</span>
                                    <span className="icon-check"><i className="fa fa-check" /></span>
                                </div>
                                <div className="select-group mb-2" onChange={(e) => handleClickGroup(e)}>
                                    <select>
                                        {renderPages()}
                                    </select>
                                    <div className="custom-arrow" />
                                </div>
                            </div>
                            <div className="search-user">
                                <div className="search-user--input d-flex p-3">
                                    <input onKeyUp={handleKeySearch} type="text" placeholder="Search User..."/>
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
                                            <div className="content d-flex justify-content-between align-items-center"
                                            onClick={() => {courseUnregistered(user)}}>
                                                <p className="content-title">Pending Courses</p>
                                                <p className="note">Need approved to allow the user accessing</p>
                                                <div className="custom-arrow-content un-registered">
                                                    <span className="arrow-down"><i className="fa fa-angle-down" /></span>
                                                </div>
                                            </div>
                                            <div className="details un-registered">
                                                <div className="list-details">
                                                    <ul>
                                                        {unRegisterd?.map((item, index) => {
                                                            return <Fragment key={index}>
                                                                <li className="list-details--item">
                                                            <div className="d-flex justify-content-center align-items-center">
                                                                <span className="icon-user"><i className="fa fa-id-card-alt" /></span>
                                                                <span className="content">{item.tenKhoaHoc}</span>
                                                                <div className="d-flex">
                                                                    <span title="Ban" className="icon-delete"><i class="fa fa-ban"></i></span>
                                                                    <span title="Approve" className="icon-like"><i class="fa fa-thumbs-up"></i></span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                            </Fragment>
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-user--course__approved d-flex justify-content-center align-items-center flex-column">
                                            <div className="content d-flex justify-content-between align-items-center"
                                            onClick={() => {courseRegistered(user)}}>
                                                <p className="content-title">Approved Courses</p>
                                                <p className="note">The courses have already accessed by user</p>
                                                <div className="custom-arrow-content registered">
                                                    <span className="arrow-down"><i className="fa fa-angle-down" /></span>
                                                </div>
                                            </div>
                                            <div className="details registered">
                                                <div className="list-details">
                                                    <ul>
                                                        {registered?.map((item, index) => {
                                                            return <Fragment key={index}>
                                                            <li className="list-details--item">
                                                                <div className="d-flex justify-content-center align-items-center">
                                                                    <span className="icon-user"><i className="fa fa-id-card-alt" /></span>
                                                                    <span className="content">{item.tenKhoaHoc}</span>
                                                                    <span title="Ban" className="icon-delete"><i class="fa fa-ban"></i></span>
                                                                </div>
                                                            </li>
                                                            </Fragment>
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-user--course__available d-flex justify-content-center align-items-center flex-column">
                                            <div className="content d-flex justify-content-between align-items-center"
                                            onClick={() => {courseNotRegistered(user)}}>
                                                <p className="content-title">Available Courses</p>
                                                <p className="note">Registing a course quickly for user</p>
                                                <div className="custom-arrow-content not-registered">
                                                    <span className="arrow-down"><i className="fa fa-angle-down" /></span>
                                                </div>
                                            </div>
                                            <div className="details not-registered">
                                                <div className="list-details">
                                                    <ul>
                                                        {notRegisterd?.map((item, index) => {
                                                            return <Fragment key={index}>
                                                            <li className="list-details--item">
                                                                <div className="d-flex justify-content-center align-items-center">
                                                                    <span className="icon-user"><i className="fa fa-id-card-alt" /></span>
                                                                    <span className="content">{item.tenKhoaHoc}</span>
                                                                    <span title="Approve" className="icon-like"><i class="fa fa-thumbs-up"></i></span>
                                                                </div>
                                                            </li>
                                                            </Fragment>
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <Loading/>
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
                                                <select disabled id="maLoaiNguoiDungDetail">
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
                                                <input disabled className="form-control" type="text" id="phone" value={user.soDT}/>
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
                                        <label htmlFor="numGroup">Choose a group</label>
                                        <select disabled id="numGroup" onChange={(e) => handleChange(e)}>
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