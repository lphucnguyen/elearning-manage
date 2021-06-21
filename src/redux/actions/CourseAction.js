import { message } from 'antd';
import {courseServices} from '../../services/CourseServices';

export const layDanhSachKhoaHocAction = (tenKH, maNhom) => {
    return (dispatch) => {
        // Call loading open
        dispatch({
            type: 'openLoading'
        })

            courseServices
            .layDanhSachKhoaHoc(tenKH, maNhom)
            .then((res) => {
                dispatch({
                        type: 'LAY_DANH_SACH_KHOA_HOC',
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
    }
}


export const xoaDanhSachKhoaHocAction = () => {
    return (dispatch) => {
        dispatch({
            type: "XOA_DANH_SACH_KHOA_HOC"
        })
    }
}

export const layKhoaHocTheoDanhMucAction = (data, group) => {
    return (dispatch) => {
        // Call loading open
        dispatch({
            type: 'openLoading'
        })

        setTimeout(() => {
            courseServices
            .layKhoaHocTheoDanhMuc(data, group)
            .then((res) => {
                dispatch({
                        type: 'LAY_KHOA_HOC_THEO_DANH_MUC',
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

export const layChiTietKhoaHoc = (maKH) => {
    return (dispatch) => {
        // Call loading open
        dispatch({
            type: 'openLoading'
        })

        setTimeout(() => {
            courseServices
            .layChiTietKhoaHoc(maKH)
            .then((res) => {
                dispatch({
                    type: 'LAY_CHI_TIET_KHOA_HOC',
                    data: res.data
                })
            })
            .catch((err) => {
                console.log("errors:", err);
                message.error("Lỗi load dữ liệu")
            });

            // Turn off loading
            dispatch({
                type: 'closeLoading'
            })
        },2000)
    }
}

export const dangKyKhoaHoc = (maKH, taiKhoan) => {
    return courseServices
            .dangKyKhoaHoc(maKH, taiKhoan)
}

export const layChiTietKhoaHocManage = (maKH) => {

    return courseServices
    .layChiTietKhoaHoc(maKH)
}

export const xoaKhoaHoc = (maKH) => {
    return courseServices
    .xoaKhoaHoc(maKH)
}

export const uploadHinhAnhKhoaHoc = (image) => {
    return courseServices
    .uploadHinhAnhKhoaHoc(image)
}

export const themKhoaHoc = (form) => {
    return courseServices
    .themKhoaHoc(form)
}

export const capNhatKhoaHoc = (form) => {
    return courseServices
    .capNhatKhoaHoc(form)
}