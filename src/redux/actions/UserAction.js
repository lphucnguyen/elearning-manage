import { userServices } from "../../services/UserServices";
import { message, Modal, Button, Space } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { courseServices } from "../../services/CourseServices";

export const loadingAction = () => {
    return (dispatch) => {
        // Call loading open
        dispatch({
            type: 'openLoading'
        })

        setTimeout(() => {
            // Turn off loading
            dispatch({
                type: 'closeLoading'
            })
        },2000)
    }
}

export const layDanhSachNguoiDungAction = (group, username) => {
    return (dispatch) => {
        // Call loading open
        dispatch({
            type: 'openLoading'
        })

        setTimeout(() => {
            userServices
            .layDanhSachNguoiDung(group, username)
            .then((res) => {
                dispatch({
                    type: "LAY_DANH_SACH_NGUOI_DUNG",
                    data: res.data
                })
            })
            .catch((err) => {
                message.error(err.response.data);
            });

            // Turn off loading
            dispatch({
                type: 'closeLoading'
            })
        },2000)
    }
}

export const clickGroupAction = (group) => {
    return (dispatch) => {
        dispatch({
            type: "CHON_NHOM",
            data: group
        })
    }
}

// export const thongTinNguoiDungAction = (setUserInfo, user) => {
//     userServices
//     .thongTinTaiKhoan(user)
//     .then((res) => {
//         setUserInfo(res.data);
//     })
//     .catch((err) => {
//         message.error(err.response.data);
//     })
//     return setUserInfo; 
// }

export const timKiemDanhSachNguoiDungAction = (setUserListSearch, group) => {
    userServices
    .timKiemDanhSachNguoiDung(group)
    .then((res) => {
        setUserListSearch(res.data);
    })
    .catch((err) => {
        message.error(err.response.data);
    })
    return setUserListSearch; 
}

export const layDanhSachNguoiDung_PhanTrangAction = (group, page, setUserListPage) => {
    userServices
    .layDanhSachNguoiDung_PhanTrang(group, page)
    .then((res) => {
        setUserListPage(res.data);
    })
    .catch((err) => {
        message.error(err.response.data);
    })
    return setUserListPage; 
}

export const xoaDanhSachNguoiDungAction = () => {
    return (dispatch) => {
        dispatch({
            type: "XOA_DANH_SACH_NGUOI_DUNG"
        })
    }
}

export const themNguoiDungAction = (user) => {
    
    return (dispatch) => {
        userServices
        .themNguoiDung(user)
        .then((res) => { 
            console.log(user.maNhom);
            dispatch({
                type: "THEM_NGUOI_DUNG",
                data: user
            })
            message.success("Thêm người dùng thành công");
        })
        .catch((err) => {
            message.error(err.response.data);
        });

    }
}

export const capNhatThongTinNguoiDungAction = (value) => {
    return (dispatch) => {
        userServices
        .capNhatThongTinNguoiDung(value)
        .then((res) => {
            dispatch({
                type: "CAP_NHAT_NGUOI_DUNG",
                data: value
            })
            message.success("Cập nhật người dùng thành công");
        })
        .catch((err) => {
            // console.log(err.response);
            message.error(err.response);
        });
        } 
}

export const xoaNguoiDungAction = (id) => {
    const { confirm } = Modal;

    return (dispatch) => {
        userServices
        .xoaNguoiDung(id)
        .then((res) => {
            const isDelete = window.confirm(`Bạn có muốn xóa tài khoản ${id} không?`);
            console.log(isDelete);
            if(isDelete) {
                message.success("Đã xóa thành công");
                dispatch({
                    type: "XOA_NGUOI_DUNG",
                    data: id
                })
            }
        })
        .catch((err) => {
            message.error(err.response.data);
        });
        
    } 
}

export const layDanhSachKhoaHocChuaGhiDanhAction = (user, setNotRegistered) => {
    userServices
    .layDanhSachKhoaHocChuaGhiDanh(user)
    .then((res) => {
        setNotRegistered(res.data);
    })
    .catch((err) => {
        message.error(err.response.data);
    });
    return setNotRegistered;
}

export const layDanhSachKhoaHocChoXetDuyetAction = (user, setUnRegistered) => {
    userServices
    .layDanhSachKhoaHocChoXetDuyet(user)
    .then((res) => {
        setUnRegistered(res.data);
    })
    .catch((err) => {
        message.error(err.response.data);
    });
    return setUnRegistered;
}

export const layDanhSachKhoaHocDaXetDuyetAction = (user, setRegistered) => {
    userServices
    .layDanhSachKhoaHocDaXetDuyet(user)
    .then((res) => {
        setRegistered(res.data);
    })
    .catch((err) => {
        message.error(err.response.data);
    });
    return setRegistered;
}

export const thongTinTaiKhoanAction = (taiKhoan, matKhau) => {
    return (dispatch) => {
        let object = {taiKhoan, matKhau}

        userServices
        .thongTinTaiKhoan(object)
        .then((res) => { 
            console.log(res.data)
            dispatch({
                type: "THONG_TIN_TAI_KHOAN",
                data: res.data
            })
            message.success("Lấy thông tin thành công");
        })
        .catch((err) => {
            message.error(err.response.data);
        });

    }
}

export const huyGhiDanhKhoaHocAction = (maKH, taiKhoan) => {
    return (dispatch) => {

        courseServices
        .huyGhiDanh(maKH, taiKhoan)
        .then((res) => { 
            dispatch({
                type: "HUY_GHI_DANH_KHOA_HOC",
                data: maKH
            })
            message.success(maKH);
        })
        .catch((err) => {
            message.error(err.response.data);
        });

    }
}


export const layDanhSachNguoiDungChuaGhiDanhAction = (maKH) => {
    return userServices.layDanhSachNguoiDungChuaGhiDanh(maKH)
}

export const layDanhSachHocVienChoXetDuyetAction = (maKH) => {
    return userServices.layDanhSachHocVienChoXetDuyet(maKH)
}

export const layDanhSachHocVienKhoaHocAction = (maKH) => {
    return userServices.LayDanhSachHocVienKhoaHoc(maKH)
}