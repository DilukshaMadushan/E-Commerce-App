

export const addUserId = (id) => {
    return {
        type: 'ADD_USER_ID',
        signInID:id,
    }
  }

  const initialState = {
    signInId:0
  }

  function signInid (state = initialState ,action){
    
    switch(action.type){
        case 'ADD_USER_ID': 
          const newState = { signInId: action.signInID }     
          return newState;
    }
    return state;
    }

export default signInid;