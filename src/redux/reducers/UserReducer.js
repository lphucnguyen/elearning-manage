const stateDefault = {
    arrUser: []
}

export const UserReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'LAY_DANH_SACH_NGUOI_DUNG': {
            state.arrUser = [...action.data];
            return {...state};
        }
        case 'THEM_NGUOI_DUNG': {
            
            console.log("run them");
            return {...state};
        }
        case 'CAP_NHAT_NGUOI_DUNG': {
            
            console.log("run cap nhat");
            return {...state};
        }
        case 'XOA_NGUOI_DUNG': {
            
            console.log("run xoa");
            return {...state};
        }
        default: return {...state};
    }
}