const type = {
    SIGN_UP : 'SIGN_UP',
}

export const actions = {
    signuphandle : () => {
        return {type:type.SIGN_UP,};
    }
}




const initialState = {


};

export const reducer = (state = initialState, action) => {
    switch(action.type){

        default:
            return state;
    }
};
