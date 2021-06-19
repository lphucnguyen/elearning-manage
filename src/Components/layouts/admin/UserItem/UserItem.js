import React from 'react'
import './UserItem.scss'

function UserItem(props) {

    const {user} = props;

    return (
        <div className="user d-flex justify-content-between align-items-center px-3 py-2 flex-wrap" data-toggle="modal" data-target="#exampleModal">
            <div className="avatar-user">
                <img className="w-100 h-100" src="/images/user.png" alt="user" />
            </div>
            <div onClick={() => {props.showDetail(user)}} className="info-user d-flex justify-content-center flex-column">
                <span className="id">{user.taiKhoan}</span>
                <span className="email">{user.email}</span>
            </div>
            {(user.maLoaiNguoiDung === "GV") ? <div className="type-user">{user.maLoaiNguoiDung}</div> : <div className="type-user bg-primary">{user.maLoaiNguoiDung}</div>}
            <div className="options d-flex justify-content-between align-items-center">
                <button onClick={() => {props.editUser(user)}}><i className="fa fa-edit" /></button>
                <button onClick={() => {props.deleteUser(`${user.taiKhoan}`)}}><i className="fa fa-trash" /></button>
            </div>
        </div>
    )
}

export default UserItem;