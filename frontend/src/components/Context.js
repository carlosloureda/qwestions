// Context.js
// new
import React, { useReducer } from "react";
const POSIBLE_ANSWER_TYPES = ["mutiple_choice", "code", "input", "textarea"];

const reducer = (state, action) => {
  if (action.type === "update_answer_types") {
    if (action.theme === "twilight")
      return {
        ...state,
        [action.field]: "KAKA"
      };
    return {
      ...state,
      [action.field]: action.value
    };
  } else if (action.type === "add_new_answer_input") {
    return {
      ...state,
      answers_inputs: state.answers_inputs.concat([
        {
          answer: "",
          isValid: false,
          saved: true,
          id: state.answers_inputs.length + 1
        }
      ])
    };
  } else if (action.type === "show_answer_editor") {
    return {
      ...state,
      answers_inputs: state.answers_inputs.map((elm, i) => {
        if (i !== action.index) elm.isEditing = false;
        else elm.isEditing = true;
        return elm;
      })
    };
  } else if (action.type === "toggle_answer_validity_input") {
    let _arr = [...state.answers_inputs];
    _arr[action.index].isValid = !_arr[action.index].isValid;
    return {
      ...state,
      answers_inputs: _arr
    };
  } else if (action.type === "save_answer") {
    let _arr = [...state.answers_inputs];
    _arr[action.index].saved = true;
    _arr[action.index].isEditing = false;
    return {
      ...state,
      answers_inputs: _arr
    };
  } else if (action.type === "delete_answer") {
    // let _arr = [...state.answers_inputs];
    // _arr.splice(action.index, 1);
    state.answers_inputs.splice(action.index, 1);
    return {
      ...state,
      answers_inputs: state.answers_inputs
    };
  } else if (action.type === "on_change_answer") {
    let inputs = state.answers_inputs;
    inputs[action.index].answer = action.text;
    return {
      ...state,
      answers_inputs: inputs
    };
  } else if (action.type === "set_coding_language") {
    return {
      ...state,
      codeLanguage: action.lang
    };
  } else if (action.type === "set_theme") {
    console.log("on state change");
    return {
      ...state,
      theme: action.theme
    };
  } else if (action.type === "on_change_question") {
    return {
      ...state,
      question: action.question
    };
  } else {
    throw new Error("Action not implemented");
  }
};
const initialState = {
  question: "# Aquí va el Markdown",
  answerType: "", // POSIBLE_ANSWER_TYPES
  answers_inputs: [
    { answer: "", isValid: false, saved: true, id: 1 },
    { answer: "", isValid: false, saved: true, id: 2 }
  ],
  theme: "",
  codeLanguage: ""
};

const QuestionContext = React.createContext(initialState);

function QuestionProvider(props) {
  // new
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <QuestionContext.Provider value={{ state, dispatch }}>
      {props.children}
    </QuestionContext.Provider>
  );
}
export { QuestionContext, QuestionProvider };
