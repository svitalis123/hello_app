const url = "http://localhost:3000/messages"

export const fetchGreeting=()=>async (dispatch)=> {
  try{
    const response = await fetch(url)
    const json = await response.json()
    dispatch({type: "FETCH_GREETING", payload: json})
  }catch(error){
    console.error(error)
  }
}

const initialState={greetings: ''}

export default (state=initialState, action)=>{
  switch(action.type){
    case 'FETCH_GREETING':
      return {greetings: action.payload.greetings};
    default:
      return state;
  }
}