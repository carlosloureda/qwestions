import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import PropTypes from "prop-types";

const CodeAnswers = ({ theme, language, onLanguageChange, onThemeChange }) => {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

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
    "terminal"
  ];
  return (
    <React.Fragment>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="coding_languages">
          Coding language
        </InputLabel>
        <Select
          value={language}
          onChange={e => onLanguageChange(e.target.value)}
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

CodeAnswers.propTypes = {
  theme: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func,
  onThemeChange: PropTypes.func
};

export default CodeAnswers;

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
