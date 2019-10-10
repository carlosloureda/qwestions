import React from "react";
import ReactMarkdown from "react-markdown";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import CodeBlock from "../Editor/CodeBlock";
import CodeEditor from "../Editor/CodeEditor";

const QuestionPreview = props => {
  const {
    answerType,
    question,
    theme,
    codeLanguage,
    answers_inputs
  } = props.values;
  const classes = useStyles();

  console.log("answerType: ", answerType);
  return (
    <div>
      <h2>Preview</h2>
      <div style={{ width: "100%" }}>
        <div>
          <ReactMarkdown
            source={question}
            renderers={{ code: CodeBlock }}
            escapeHtml={false}
          />
        </div>
      </div>
      {answerType === "textarea" && (
        // <div>Mostrar textarea</div>
        <TextField
          label="Answer"
          type="text"
          value={""}
          multiline={true}
          disabled={true}
        />
      )}
      {answerType === "input" && (
        <TextField label="Answer" type="text" value={""} disabled={true} />
      )}
      {answerType === "code" && (
        <CodeEditor width={98} theme={theme} language={codeLanguage} />
      )}
      {answerType === "mutiple_choice" &&
        answers_inputs.map((answer, index) => (
          <Button key={index} variant="contained" className={classes.button}>
            <span className={classes.buttonContent}>
              <ReactMarkdown
                source={answer.answer ? answer.answer : "Black Answer"}
                renderers={{ code: CodeBlock }}
                escapeHtml={false}
              />
            </span>
          </Button>
        ))}
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: "90%",
    display: "block",
    textTransform: "none"
  },
  buttonContent: {
    display: "flex",
    alignSelf: "flex-start"
  }
}));

export default QuestionPreview;
