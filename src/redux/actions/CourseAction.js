import {courseServices} from '../../services/CourseServices';

export const layDanhSachKhoaHocAction = (tenKH) => {
    return (dispatch) => {
        // Call loading open
        dispatch({
            type: 'openLoading'
        })

            courseServices
            .layDanhSachKhoaHoc(tenKH)
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
            });

            // Turn off loading
            dispatch({
                type: 'closeLoading'
            })
        },2000)
    }
}