import {courseServices} from '../../services/CourseServices';

export const layDanhSachKhoaHocAction = () => {
    return (dispatch) => {
        // Call loading open
        dispatch({
            type: 'openLoading'
        })

        setTimeout(() => {
            courseServices
            .layDanhSachKhoaHoc()
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
        },2000)
    }
}

export const layKhoaHocTheoDanhMucAction = () => {
    return (dispatch) => {
        // Call loading open
        dispatch({
            type: 'openLoading'
        })

        setTimeout(() => {
            courseServices
            .layKhoaHocTheoDanhMuc()
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