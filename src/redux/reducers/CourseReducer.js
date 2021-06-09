const stateDefault = {
    arrCourse: []
}

export const CourseReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'LAY_DANH_SACH_KHOA_HOC': {
            
            console.log("run");
            return {...state};
        }
        default: return {...state};
    }
}