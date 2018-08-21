//import Redux from "redux";

export const simpleClickAction = () => dispatch => {
  dispatch({
    type: "SIMPLE_ACTION",
    payload: "result_of_simple_action. Hello World!"
  });
};

export const my_BUTTON_CLICK = () => dispatch => {
  dispatch({
    type: "MY_BUTTON_CLICK",
    payload: "I clicked the submit button!"
  });
};
