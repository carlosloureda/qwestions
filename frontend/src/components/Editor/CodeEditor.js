import React from "react";
import AceEditor from "react-ace";

//TODO: lazy load ?
import "brace/mode/markdown";
import "brace/mode/javascript";
import "brace/mode/java";
import "brace/mode/python";
import "brace/mode/xml";
import "brace/mode/ruby";
import "brace/mode/sass";
import "brace/mode/mysql";
import "brace/mode/json";
import "brace/mode/html";
import "brace/mode/handlebars";
import "brace/mode/golang";
import "brace/mode/csharp";
import "brace/mode/elixir";
import "brace/mode/typescript";
import "brace/mode/css";

import "brace/theme/twilight";
import "brace/theme/monokai";
import "brace/theme/github";
import "brace/theme/tomorrow";
import "brace/theme/kuroir";
import "brace/theme/xcode";
import "brace/theme/textmate";
import "brace/theme/terminal";

const CodeEditor = ({
  placeholder,
  width,
  height,
  theme,
  language,
  onChangeCode,
  id
}) => {
  const [code, setCode] = React.useState(placeholder);
  const onChange = newValue => {
    setCode(newValue);
    if (onChangeCode) onChangeCode(id, newValue);
  };
  return (
    <div style={classes.container}>
      <div
        style={{
          width: width ? `${width}%` : "100%",
          paddingLeft: "2%",
          paddingBottom: "0.5em"
        }}
      >
        <AceEditor
          mode={language ? language : "markdown"}
          theme={theme ? theme : "twilight"}
          onChange={onChange}
          name="brace-editor"
          height={height ? `${height}%` : "300px"}
          width={width ? `${width}%` : "100%"}
          fontSize="20"
          editorProps={{ $blockScrolling: true }}
          value={code}
        />
      </div>
    </div>
  );
};

const classes = {
  container: {
    display: "flex",
    flexDirection: "row"
    // alignContent: "center"
  }
};

export default CodeEditor;
