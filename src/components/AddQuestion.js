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

const AddQuestion = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    answered_types: "",
    answers_inputs: [
      { answer: "", isValid: false, saved: true },
      { answer: "", isValid: false, saved: true }
    ]
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }
  // const handleAnswersInputs = (e, index) => {
  //   let inputValue = e.target.value;
  //   setValues(oldValues => {
  //     let _arr = [...oldValues.answers_inputs];
  //     _arr[index] = { answer: inputValue, isValid: false, isEditing: false };
  //     return {
  //       ...oldValues,
  //       answers_inputs: _arr
  //     };
  //   });
  // };

  const addNewAnswerLine = () => {
    setValues(oldValues => {
      return {
        ...oldValues,
        answers_inputs: oldValues.answers_inputs.concat([{}])
      };
    });
  };

  const showAnswerInputEditor = index => {
    setValues(oldValues => {
      return {
        ...oldValues,
        answers_inputs: oldValues.answers_inputs.map((elm, i) => {
          if (i !== index) elm.isEditing = false;
          else elm.isEditing = true;
          return elm;
        })
      };
    });
  };

  const toggleAnswerInputValidity = index => {
    setValues(oldValues => {
      let _arr = [...oldValues.answers_inputs];
      _arr[index].isValid = !_arr[index].isValid;
      return {
        ...oldValues,
        answers_inputs: _arr
      };
    });
  };

  const saveAnswer = index => {
    // TODO: call API
    setValues(oldValues => {
      let _arr = [...oldValues.answers_inputs];
      _arr[index].saved = true;
      _arr[index].isEditing = false;
      return {
        ...oldValues,
        answers_inputs: _arr
      };
    });
  };

  const deleteAnswer = index => {
    // TODO: call API
    setValues(oldValues => {
      let _arr = [...oldValues.answers_inputs];
      _arr.splice(index, 1);
      return {
        ...oldValues,
        answers_inputs: _arr
      };
    });
  };

  const onChangeCode = (index, text) => {
    setValues(oldValues => {
      let _arr = [...oldValues.answers_inputs];
      _arr[index].answer = text;
      return {
        ...oldValues,
        answers_inputs: _arr
      };
    });
  };
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
          value={values.answered_types}
          onChange={handleChange}
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
        {values.answered_types === "mutiple_choice" && (
          <div>
            <p>Answers: </p>
            {values.answers_inputs.map((answer_input, index) => (
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

        {values.answered_types === "code" && <div>Mostrar code</div>}
      </div>

      <h2>Preview</h2>
      {values.answered_types === "textarea" && <div>Mostrtar textarea</div>}
      {values.answered_types === "input" && <div>Mostrar input</div>}
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
