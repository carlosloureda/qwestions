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

  const addNewAnswerLine = () => dispatch({ type: "add_new_answer_input" });

  const onChangeQuestion = (id, question) =>
    dispatch({ type: "on_change_question", question });

  return (
    <div style={{ width: "50%" }}>
      {/* 1. Question editor respuestas: - tipos: - respuesta Multiple - code - */}
      <h1 style={{ border: "1px solid" }}>Question editor</h1>
      <CodeEditor
        placeholder="# Aquí va el Markdown"
        width={98}
        onChangeCode={onChangeQuestion}
      />
      <AnswerType />
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
