import { userServices } from "../../services/UserServices";

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
    .xoaNguoiDungAction(id)
    .then((res) => {
        alert("Xóa người dùng thành công");
    })
    .catch((err) => {
        console.log("errors:", err.response.data);
    });
}

export const chonNhomNguoiDungAction = (group) => {
    return userServices
    .xoaNguoiDungAction(group)
    .then((res) => {
        alert("Xóa người dùng thành công");
    })
    .catch((err) => {
        console.log("errors:", err.response.data);
    });
}