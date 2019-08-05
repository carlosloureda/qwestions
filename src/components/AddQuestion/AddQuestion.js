import React from "react";
import CodeEditor from "../Editor/CodeEditor";

import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";

import { QuestionContext } from "../Context";
import QuestionPreview from "./QuestionPreview";
import CodeAnswers from "./CodeAnswers";
// https://medium.com/@seantheurgel/react-hooks-as-state-management-usecontext-useeffect-usereducer-a75472a862fe

const AddQuestion = () => {
  const classes = useStyles();
  const { state, dispatch } = React.useContext(QuestionContext);
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

  const addNewAnswerLine = () => dispatch({ type: "add_new_answer_input" });

  const showAnswerInputEditor = index =>
    dispatch({ type: "show_answer_editor", index });

  const toggleAnswerInputValidity = index =>
    dispatch({ type: "toggle_answer_validity_input", index });

  // TODO: call API
  const saveAnswer = index => dispatch({ type: "save_answer", index });

  // TODO: call API
  const deleteAnswer = index => dispatch({ type: "delete_answer", index });

  const onChangeCode = (index, text) =>
    dispatch({ type: "on_change_answer", index, text });

  const onChangeQuestion = (id, question) =>
    dispatch({ type: "on_change_question", question });

  const { answered_types, answers_inputs } = state;
  return (
    <div style={{ width: "50%" }}>
      {/* 1. Question editor respuestas: - tipos: - respuesta Multiple - code - */}
      <h1 style={{ border: "1px solid" }}>Question editor</h1>
      <CodeEditor
        placeholder="# Aquí va el Markdown"
        width={98}
        onChangeCode={onChangeQuestion}
      />
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
                      placeholder={answer_input.answer}
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

      <QuestionPreview values={state} />
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
