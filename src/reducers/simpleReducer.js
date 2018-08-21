//import Redux from "redux";

export default (state = {}, action) =>{
    switch (action.type){
        case 'SIMPLE_ACTION':
            return {
                result: action.payload
            }
        case 'MY_BUTTON_CLICK':
            return {
                result: action.payload
            }
        default:
            return state
    }
}