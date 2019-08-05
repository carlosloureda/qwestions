import React from "react";
import CodeEditor from "./CodeEditor";

import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";

const POSIBLE_ANSWER_TYPES = ["mutiple_choice", "code", "input", "textarea"];

const reducer = (state, action) => {
  if (action.type === "update_answer_types") {
    return {
      ...state,
      [action.field]: action.value
    };
  } else if (action.type === "add_new_answer_input") {
    return {
      ...state,
      answers_inputs: state.answers_inputs.concat([{}])
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
    let st = {
      ...state,
      theme: action.theme
    };
    console.log("state: ", st);
    return st;
  } else {
    throw new Error("Action not implemented");
  }
};

const initialState = {
  answered_types: "", // POSIBLE_ANSWER_TYPES
  answers_inputs: [
    { answer: "", isValid: false, saved: true },
    { answer: "", isValid: false, saved: true }
  ],
  theme: null,
  codeLanguage: null
};

const AddQuestion = () => {
  const classes = useStyles();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function handleAnswerTypeChange(event) {
    dispatch({
      type: "update_answer_types",
      field: event.target.name,
      value: event.target.value
    });
  }

  const addNewAnswerLine = () => {
    dispatch({ type: "add_new_answer_input" });
  };

  const showAnswerInputEditor = index => {
    dispatch({ type: "show_answer_editor", index });
  };

  const toggleAnswerInputValidity = index => {
    dispatch({ type: "toggle_answer_validity_input", index });
  };

  const saveAnswer = index => {
    // TODO: call API
    dispatch({ type: "save_answer", index });
  };

  const deleteAnswer = index => {
    // TODO: call API
    dispatch({ type: "delete_answer", index });
  };

  const onChangeCode = (index, text) => {
    dispatch({ type: "on_change_answer", index, text });
  };

  const { answered_types, answers_inputs } = state;
  console.log("state: ", state);
  return (
    <div style={{ width: "50%" }}>
      {/* 1. Question editor respuestas: - tipos: - respuesta Multiple - code - */}
      <h1 style={{ border: "1px solid" }}>Question editor</h1>
      <CodeEditor placeholder="# Aquí va el Markdown" width={98} />
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="answered_types">
          Answer type
        </InputLabel>
        <Select
          value={answered_types}
          onChange={handleAnswerTypeChange}
          input={
            <OutlinedInput labelWidth={labelWidth} name="answered_types" />
          }
        >
          <MenuItem value={"mutiple_choice"}>Mutiple Choice</MenuItem>
          <MenuItem value={"code"}>Code</MenuItem>
          <MenuItem value={"input"}>Input</MenuItem>
          <MenuItem value={"textarea"}>Textarea</MenuItem>
        </Select>
      </FormControl>
      <div>
        {answered_types === "mutiple_choice" && (
          <div>
            <p>Answers: </p>
            {answers_inputs.map((answer_input, index) => (
              <div key={index}>
                {/* TODO: Set the current answer bold os strong ...  */}
                {/* {!answer_input.isEditing && ( */}
                <TextField
                  label="Name"
                  disabled={answer_input.isEditing}
                  className={classes.textField}
                  value={answer_input.answer}
                  // onChange={e => handleAnswersInputs(e, index)}
                  onClick={() => showAnswerInputEditor(index)}
                  margin="normal"
                />
                {/* )} */}
                {answer_input.isEditing && (
                  <>
                    <CodeEditor
                      width={98}
                      onChangeCode={onChangeCode}
                      id={index}
                    />
                    <div>
                      <Switch
                        checked={answer_input.isValid}
                        onChange={() => toggleAnswerInputValidity(index)}
                        value={answer_input.isValid}
                        color="primary"
                        inputProps={{ "aria-label": "primary checkbox" }}
                      />
                      <button onClick={() => saveAnswer(index)}>
                        Save Answer
                      </button>
                      <button onClick={() => deleteAnswer(index)}>
                        Delete Answer
                      </button>
                    </div>
                  </>
                )}

                {/* TODO: the <div /> */}
              </div>
            ))}

            {/* TODO: the <div /> */}
            <div />
            <button onClick={addNewAnswerLine}>Add Answer</button>
          </div>
        )}
        {answered_types === "code" && <CodeAnswers initialState={state} />}
      </div>

      <h2>Preview</h2>
      {answered_types === "textarea" && <div>Mostrtar textarea</div>}
      {answered_types === "input" && <div>Mostrar input</div>}
      {answered_types === "code" && <div>Mostrar code</div>}
      {/* input - TextArea */}
      {/*
        -  Titulo de la pregunta, va en el Markdown:
            - Label o titulo
            - Debajo editor
            - Todo rodeado de un borde
        - Respuestas (configuracion), Label con border sobre todo lo de abajo
            - Tipo de pregunta:
                - Multiple Choice (MC)
                - Open Ended (OE)
            - Respuestas:
                - SI MC: answer ... que abre un markdown y encima se escribe
                - SI OE:
                    - Placeholder text
                    - Answer type:  Code, Input or TextArea
        - Extras:
            - Explicacion de la pregunta
            - Preview
            - Botones para guardar, cancelar o borrar
        */}
    </div>
  );
};

const CodeAnswers = ({ initialState }) => {
  const classes = useStyles();
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { theme, codeLanguage } = state;
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const onCodingLanguageChange = lang => {
    dispatch({ type: "set_coding_language", lang });
  };
  const onThemeChange = theme => {
    dispatch({ type: "set_theme", theme });
  };

  const codingLanguageOptions = [
    "javascript",
    "java",
    "python",
    "xml",
    "ruby",
    "sass",
    "markdown",
    "mysql",
    "json",
    "html",
    "handlebars",
    "golang",
    "csharp",
    "elixir",
    "typescript",
    "css"
  ];
  const themes = [
    "monokai",
    "github",
    "tomorrow",
    "kuroir",
    "twilight",
    "xcode",
    "textmate",
    "solarized-dark",
    "terminal"
  ];
  console.log("holas");
  return (
    <React.Fragment>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="coding_languages">
          Coding language
        </InputLabel>
        <Select
          value={codeLanguage}
          onChange={e => onCodingLanguageChange(e.target.value)}
          input={
            <OutlinedInput labelWidth={labelWidth} name="coding_languages" />
          }
        >
          {codingLanguageOptions.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="themes">
          Themes
        </InputLabel>
        <Select
          value={theme}
          onChange={e => onThemeChange(e.target.value)}
          input={<OutlinedInput labelWidth={labelWidth} name="themes" />}
        >
          {themes.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </React.Fragment>
  );
};
export default AddQuestion;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));
