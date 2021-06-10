const stateDefault = {
    arrCourse: []
}

export const CourseReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'LAY_DANH_SACH_KHOA_HOC': {
            state.arrCourse = [...action.data];
            console.log(action.data);
            return {...state};
        }
        case 'LAY_KHOA_HOC_THEO_DANH_MUC': {
            // state.arrCourse = [...action.data];
            console.log('run reducer',action.data);
            return {...state};
        }
        default: return {...state};
    }
}