export const incrementCount = count => {
    const num = count+1
    return {
    type: 'INCREASE_COUNTER',
    count: num
    }
  }
  
  export const decrementCount = count => {
    const num = count - 1
    return {
      type: 'DECREASE_COUNTER',
      count: num
    }
  }


const initialState = {
    count:1,
}

function counterChange (state = initialState ,action){
    
    switch(action.type){
        case 'INCREASE_COUNTER':
            return{ 
                ...state,
                ...action,
            }
        case 'DECREASE_COUNTER':
            return{
                ...state,
                ...action,
            }
    }
    return state;
}


export default counterChange;