const initialState = {
    newPass: ''
}

type initialStateType = typeof initialState

export const createPassReducer = (state: initialStateType = initialState, action: any): initialStateType => {
    return state
}
