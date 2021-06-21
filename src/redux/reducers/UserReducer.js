let group = "GP01";

const stateDefault = {
    arrListUpdate: [],
    arrListUser: [],
    group:group
}

export const UserReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'LAY_DANH_SACH_NGUOI_DUNG': {
            
            return {...state, arrListUser: action.data};
        }
        case 'XOA_DANH_SACH_NGUOI_DUNG': {
            let newList = [...state.arrListUser];
            state.arrListUpdate = [...newList];
            return {...state, arrListUser: []};
        }
        case 'THEM_NGUOI_DUNG': {
            let arrListUserUpdate = [...state.arrListUser];
            console.log(action.data);
            arrListUserUpdate.push(action.data);
            return {...state, arrListUser: arrListUserUpdate};
        }
        case 'XOA_NGUOI_DUNG': {
            let arrListUserUpdate = state.arrListUser.filter(item => item.taiKhoan !== action.data);

            return {...state, arrListUser: arrListUserUpdate};
        }
        case 'CAP_NHAT_NGUOI_DUNG': {
            let arrListUserUpdate = [...state.arrListUpdate];
            let index = arrListUserUpdate.findIndex(item => item.taiKhoan === action.data.taiKhoan);
            let {hoTen, soDt, maLoaiNguoiDung, email} = action.data;
            
            const userUpdate = {
                taiKhoan: arrListUserUpdate[index].taiKhoan,
                matKhau: arrListUserUpdate[index].matKhau,
                hoTen: hoTen,
                soDt: soDt,
                maLoaiNguoiDung: maLoaiNguoiDung,
                email: email
            }
            console.log(soDt);
            arrListUserUpdate[index] = userUpdate;
            return {...state, arrListUser: arrListUserUpdate};
        }
        case 'CHON_NHOM': {
            return {...state, group: action.data};
        }
        default: return {...state};
    }
}