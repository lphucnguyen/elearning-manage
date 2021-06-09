import {courseServices} from '../../services/CourseServices';

export const layDanhSachKhoaHocAction = (data, group) => {
    return (dispatch) => {
        // Call loading open
        dispatch({
            type: 'openLoading'
        })

        setTimeout(() => {
            courseServices
            .layDanhSachKhoaHoc(data, group)
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