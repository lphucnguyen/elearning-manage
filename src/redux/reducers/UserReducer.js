const stateDefault = {
    arr: []
}

export const UserReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'DANG_KY': {
            
            console.log("run user");
            return {...state};
        }
        default: return {...state};
    }
}