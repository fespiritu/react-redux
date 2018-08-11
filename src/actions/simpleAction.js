//import Redux from "redux";

export const simpleClickAction = () => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: 'result_of_simple_action. Hello World!'
    })
}