import CourseServices from '../../services/CourseServices';

export const layDanhSachKhoaHocAction = (data, group) => {
    return (dispatch) => {
        // Call loading open
        dispatch({
            type: 'openLoading'
        })

        setTimeout(() => {
            const result = CourseServices.layDanhSachKhoaHoc(data, group);
            console.log(result);
            dispatch({
                type: 'LAY_DANH_SACH_KHOA_HOC',
                data: result.data
            })

            // Turn off loading
            dispatch({
                type: 'closeLoading'
            })
        },2000)
    }
}