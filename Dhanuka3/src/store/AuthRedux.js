export const signInUser = (user) => {
    return {
        type: 'SIGN_IN_USER',
        user:user,
    }
  }
export const signOutUser = () => {
    return {
        type: 'SIGN_OUT_USER',
    }
  }

  const initialState = {
    signInId:null,
    isSigned:false,
    profile_name:null,
    profile_pic:null,

  }

  function Auth (state = initialState ,action){
  
    switch(action.type){
        case 'SIGN_IN_USER': 
          const newState = { signInId:action.user.id ,
                             isSigned:true,
                             profile_name:action.user.username,
                             profile_pic:action.user.avatar_url }     
          return newState;
            
        case 'SIGN_OUT_USER': 
          const newState2 = { signInId:null ,
                             isSigned:false,
                             profile_name:null,
                             profile_pic:null}     
          return newState2;
    }
    return state;
    }

export default Auth;