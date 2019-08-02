import React from "react";
import AceEditor from "react-ace";
import "brace/mode/markdown";
import "brace/theme/twilight";

const CodeEditor = ({ width, height }) => {
  const [code, setCode] = React.useState("# Aquí va el Markdown");
  const onChange = newValue => {
    setCode(newValue);
  };
  console.log("width: ", width);
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
          mode="markdown"
          theme="twilight"
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
