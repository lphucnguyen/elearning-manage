const stateDefault = {
    arrCourse: [],
    courseDetail: {}
}

export const CourseReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'LAY_DANH_SACH_KHOA_HOC': {
            state.arrCourse = [...action.data];
            console.log("reducer " + state.arrCourse)

            return {...state};
        }
        case 'LAY_KHOA_HOC_THEO_DANH_MUC': {
            state.arrCourse = [...action.data];

            return {...state};
        }
        case 'LAY_CHI_TIET_KHOA_HOC': {
            state.courseDetail = action.data;
            // if(action.data) console.log(action.data)

            console.log("reducer " + action.data)
            return {...state};
        }
        case 'XOA_DANH_SACH_KHOA_HOC': {
            state.arrCourse = [];

            return {...state};
        }
        case 'TIM_KIEM_KHOA_HOC': {
            let arrCourseUpdate = [...state.arrCourse];
    
            let arrSearch = arrCourseUpdate.filter((item) => {
                return item.tenKhoaHoc.includes(action.data);
            });

            return {...state, arrCourse: arrSearch};
        }
        default: return {...state};
    }
}