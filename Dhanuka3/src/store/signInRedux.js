export const addUserId = (id) => {
    return {
        type: 'ADD_USER_ID',
        signInID:id,
    }
  }

  const initialState = {
    signInID:0
  }

  function signIn (state = initialState ,action){
    
    switch(action.type){
        case 'ADD_USER_ID':
              signInID:action.signInID

    return state;
    }
}      
export default signIn;