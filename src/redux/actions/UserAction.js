import { userServices } from "../../services/UserServices";

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

export const layDanhSachNguoiDungAction = (group, setUserList) => {
    return (dispatch) => {
        // Call loading open
        dispatch({
            type: 'openLoading'
        })

        setTimeout(() => {
            userServices
            .layDanhSachNguoiDung(group)
            .then((res) => {
                setUserList(res.data);
            })
            .catch((err) => {
                console.log("errors:", err);
            });

            // Turn off loading
            dispatch({
                type: 'closeLoading'
            })
        },2000)

        return setUserList;
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

export const thongTinNguoiDungAction = (setUserInfo, user) => {
    userServices
    .thongTinTaiKhoan(user)
    .then((res) => {
        setUserInfo(res.data);
    })
    .catch((err) => {
        console.log("errors:", err.response.data);
    })
    return setUserInfo; 
}

export const timKiemDanhSachNguoiDungAction = (setUserListSearch, group) => {
    userServices
    .timKiemDanhSachNguoiDung(group)
    .then((res) => {
        setUserListSearch(res.data);
    })
    .catch((err) => {
        console.log("errors:", err.response.data);
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
        console.log("errors:", err.response.data);
    })
    return setUserListPage; 
}

export const xoaDanhSachNguoiDungAction = (setListUser) => {
    return setListUser([]);
}

export const themNguoiDungAction = (user) => {
    return userServices
    .themNguoiDung(user)
    .then((res) => {
        alert("Thêm người dùng thành công");
    })
    .catch((err) => {
        console.log("errors:", err.response.data);
    });
}

export const capNhatThongTinNguoiDungAction = (value) => {
    return (dispatch) => {
        userServices
        .capNhatThongTinNguoiDung(value)
        .then((res) => {
            dispatch({
                type: "CAP_NHAT_NGUOI_DUNG",
                data: res.data
            })
            alert("Cập nhật người dùng thành công");
        })
        .catch((err) => {
            console.log("errors:", err.response.data);
        });
        } 
}

export const xoaNguoiDungAction = (id) => {
    return userServices
    .xoaNguoiDung(id)
    .then((res) => {
        const isDelete = window.confirm(`Bạn có muốn xóa tài khoản ${id} không??`);
        if(isDelete){
            alert(`Đã xóa thành công xóa`);
        }
    })
    .catch((err) => {
        console.log("errors:", err.response.data);
    });
}

export const layDanhSachKhoaHocChuaGhiDanhAction = (user, setNotRegistered) => {
    userServices
    .layDanhSachKhoaHocChuaGhiDanh(user)
    .then((res) => {
        console.log(res.data)
        setNotRegistered(res.data);
    })
    .catch((err) => {
        console.log("errors:", err.response.data);
    });
    return setNotRegistered;
}

export const layDanhSachKhoaHocChoXetDuyetAction = (user, setUnRegistered) => {
    userServices
    .layDanhSachKhoaHocChoXetDuyet(user)
    .then((res) => {
        console.log(res.data)
        setUnRegistered(res.data);
    })
    .catch((err) => {
        console.log("errors:", err.response.data);
    });
    return setUnRegistered;
}

export const layDanhSachKhoaHocDaXetDuyetAction = (user, setRegistered) => {
    userServices
    .layDanhSachKhoaHocDaXetDuyet(user)
    .then((res) => {
        console.log(res.data)
        setRegistered(res.data);
    })
    .catch((err) => {
        console.log("errors:", err.response.data);
    });
    return setRegistered;
}