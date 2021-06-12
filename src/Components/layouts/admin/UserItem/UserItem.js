import React from 'react'
import './UserItem.scss'

function UserItem(props) {

    // const {taiKhoan, hoTen, email, soDt, maLoaiNguoiDung} = props.item;

    return (
        <div className="user d-flex justify-content-between align-items-center px-3 py-2" data-toggle="modal" data-target="#exampleModal">
            <div className="avatar-user">
                <img className="w-100 h-100" src="./images/user.jpg" alt="user" />
            </div>
            <div onClick={props.showDetail} className="info-user d-flex justify-content-center flex-column">
                <span className="id">12312</span>
                <span className="email">123213@gmail.com</span>
            </div>
            <div className="type-user">GV</div>
            <div className="options d-flex justify-content-between align-items-center">
                <button onClick={props.editUser}><i className="fa fa-edit" /></button>
                <button><i className="fa fa-trash" /></button>
            </div>
        </div>
    )
}

export default UserItem;