import React, { Suspense } from "react";
import CodeEditor from "../Editor/CodeEditor";

import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

import { QuestionContext } from "../Context";
import AnswerType from "./AnswerType";
// https://medium.com/@seantheurgel/react-hooks-as-state-management-usecontext-useeffect-usereducer-a75472a862fe

const QuestionPreview = React.lazy(() => import("./QuestionPreview"));

const AddQuestion = () => {
  const classes = useStyles();
  const { state, dispatch } = React.useContext(QuestionContext);

  const onChangeQuestion = (id, question) => {
    console.log("Estamos escribiendo la question en el state");
    dispatch({ type: "on_change_question", question });
    console.log("state: ", state);
  };

  // const { state, dispatch } = React.useContext(QuestionContext);
  const { answerType, answers_inputs, theme, codeLanguage } = state;

  function handleAnswerTypeChange(event) {
    dispatch({
      type: "update_answer_types",
      field: event.target.name,
      value: event.target.value
    });
  }
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

  const addNewAnswerLine = () => dispatch({ type: "add_new_answer_input" });

  const onLanguageChange = lang => {
    dispatch({ type: "set_coding_language", lang });
  };
  const onThemeChange = theme => {
    dispatch({ type: "set_theme", theme });
  };

  return (
    <div style={{ width: "50%" }}>
      {/* 1. Question editor respuestas: - tipos: - respuesta Multiple - code - */}
      <h1 style={{ border: "1px solid" }}>Question editor</h1>
      <CodeEditor
        placeholder="# Aquí va el Markdown"
        width={98}
        onChangeCode={onChangeQuestion}
      />
      <AnswerType
        answerType={answerType}
        handleAnswerTypeChange={handleAnswerTypeChange}
        answers_inputs={answers_inputs}
        onChangeCode={onChangeCode}
        showAnswerInputEditor={showAnswerInputEditor}
        toggleAnswerInputValidity={toggleAnswerInputValidity}
        saveAnswer={saveAnswer}
        deleteAnswer={deleteAnswer}
        addNewAnswerLine={addNewAnswerLine}
        onLanguageChange={onLanguageChange}
        onThemeChange={onThemeChange}
        theme={theme}
        language={codeLanguage}
      />
      <Suspense fallback={<div>Loading Question preview ...</div>}>
        <QuestionPreview {...state} />
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
