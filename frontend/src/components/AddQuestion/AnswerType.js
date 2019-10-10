import React, { Suspense } from "react";

import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";

import CodeEditor from "../Editor/CodeEditor";

import { makeStyles } from "@material-ui/core/styles";
import { QuestionContext } from "../Context";

const CodeAnswerType = React.lazy(() => import("./CodeAnswerType"));

const AnswerType = () => {
  const { state, dispatch } = React.useContext(QuestionContext);
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
    //   TODO: Think on better splitting for the items
    <PureAnswerType
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
  );
};

export const PureAnswerType = ({
  answerType,
  handleAnswerTypeChange,
  answers_inputs,
  onChangeCode,
  showAnswerInputEditor,
  toggleAnswerInputValidity,
  saveAnswer,
  deleteAnswer,
  addNewAnswerLine,
  onLanguageChange,
  onThemeChange,
  theme,
  language
}) => {
  const classes = useStyles();

  // Esto tiene que venir del padre
  //   const [answerType, setAnswerType] = React.useState("");

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="answerType">
          Answer type
        </InputLabel>
        <Select
          value={answerType}
          onChange={handleAnswerTypeChange}
          input={<OutlinedInput labelWidth={labelWidth} name="answerType" />}
        >
          <MenuItem value={"mutiple_choice"}>Mutiple Choice</MenuItem>
          <MenuItem value={"code"}>Code</MenuItem>
          <MenuItem value={"input"}>Input</MenuItem>
          <MenuItem value={"textarea"}>Textarea</MenuItem>
        </Select>
      </FormControl>
      <div>
        {answerType === "mutiple_choice" && (
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
        {answerType === "code" && (
          <Suspense fallback={<div>Loading Question preview ...</div>}>
            <CodeAnswerType
              theme={theme}
              language={language}
              onLanguageChange={onLanguageChange}
              onThemeChange={onThemeChange}
            />
          </Suspense>
        )}
      </div>
    </>
  );
};

export default AnswerType;

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));
