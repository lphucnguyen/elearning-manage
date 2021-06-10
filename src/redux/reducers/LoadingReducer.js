const stateDefault = {
    loading:false
}

export const LoadingReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'openLoading': {
            state.loading = true;

            return {...state};
        }
        case 'closeLoading': {
            state.loading = false;

            return {...state};
        }
        default: return {...state};
    }
}