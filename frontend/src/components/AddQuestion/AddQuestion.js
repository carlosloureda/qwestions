import React, { Suspense } from "react";
import CodeEditor from "../Editor/CodeEditor";

import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";

import { QuestionContext } from "../Context";

// https://medium.com/@seantheurgel/react-hooks-as-state-management-usecontext-useeffect-usereducer-a75472a862fe

// const QuestionPreview = React.lazy(() => import("./QuestionPreview"));
// const CodeAnswers = React.lazy(() => import("./CodeAnswers"));

import QuestionPreview from "./QuestionPreview";
import CodeAnswers from "./CodeAnswers";

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

  /**
   * Events for CodeAnswers ...
   */

  const onLanguageChange = lang => {
    console.log("onLanguageChange called: ", lang);
    dispatch({ type: "set_coding_language", lang });
  };
  const onThemeChange = theme => {
    console.log("onThemeChange called: ", theme);
    dispatch({ type: "set_theme", theme });
  };

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
                      <Button
                        onClick={() => saveAnswer(index)}
                        variant="contained"
                        className={classes.button}
                        color="primary"
                      >
                        Save Answer
                      </Button>
                      <Button
                        onClick={() => deleteAnswer(index)}
                        variant="contained"
                        className={classes.button}
                        color="secondary"
                      >
                        Delete Answer
                      </Button>
                    </div>
                  </>
                )}

                {/* TODO: the <div /> */}
              </div>
            ))}

            {/* TODO: the <div /> */}
            <div />
            <Button
              onClick={addNewAnswerLine}
              variant="contained"
              className={classes.button}
            >
              Add Answer
            </Button>
          </div>
        )}
        {answered_types === "code" && (
          <Suspense fallback={<div>Loading Question preview ...</div>}>
            <CodeAnswers
              theme={state.theme}
              language={state.codeLanguage}
              onLanguageChange={onLanguageChange}
              onThemeChange={onThemeChange}
            />
          </Suspense>
        )}
      </div>
      <Suspense fallback={<div>Loading Question preview ...</div>}>
        <QuestionPreview values={state} />
      </Suspense>
      {/*
        - Extras:
            - Explicacion de la pregunta
        */}
      <div>
        <Button
          onClick={addNewAnswerLine}
          variant="contained"
          className={classes.button}
          // color="green"
          style={{
            backgroundColor: "green"
          }}
        >
          Save Question
        </Button>
        <Button
          onClick={addNewAnswerLine}
          variant="contained"
          className={classes.button}
          style={{
            backgroundColor: "orange"
          }}
        >
          Cancel Changes
        </Button>
        <Button
          onClick={addNewAnswerLine}
          variant="contained"
          className={classes.button}
          color="secondary"
        >
          Delete Question
        </Button>
      </div>
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
