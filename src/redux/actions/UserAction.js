import { userServices } from "../../services/UserServices";

export const layDanhSachNguoiDung = (group) => {
    return (dispatch) => {
        // Call loading open
        dispatch({
            type: 'openLoading'
        })

        setTimeout(() => {
            userServices
            .layDanhSachNguoiDung(group)
            .then((res) => {
                dispatch({
                        type: 'LAY_DANH_SACH_NGUOI_DUNG',
                        data: res.data
                    })
            })
            .catch((err) => {
                console.log("errors:", err);
            });

            // Turn off loading
            dispatch({
                type: 'closeLoading'
            })
        },2000)
    }
}

export const themNguoiDung = (user) => {
    return (dispatch) => {
        dispatch({
            type: "THEM_NGUOI_DUNG",
            data: user
        })
    }
}

export const capNhatThongTinNguoiDung = (value) => {
    return (dispatch) => {
        dispatch({
            type: "CAP_NHAT_NGUOI_DUNG",
            data: value
        })
    }
}

export const xoaNguoiDung = (id) => {
    return (dispatch) => {
        dispatch({
            type: "XOA_NGUOI_DUNG",
            data: id
        })
    }
}