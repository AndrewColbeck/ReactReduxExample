export default (state,action) => {
    
    switch (action.type) {     //Reducer receives Message, and sets the Payload to match state
        case "rotate":
            return{
                rotating: action.payload
            };
            
        default:
            return state;
    }
}