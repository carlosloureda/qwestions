import React from "react";
import AceEditor from "react-ace";
import "brace/mode/markdown";
import "brace/theme/twilight";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

const CodeEditor = () => {
  const [code, setCode] = React.useState("# Aquí va el Markdown");
  const onChange = newValue => {
    setCode(newValue);
  };

  return (
    <div style={classes.container}>
      <div style={{ width: "50%" }}>
        <h1>ACE in Action</h1>
        <div>
          <AceEditor
            mode="markdown"
            theme="twilight"
            onChange={onChange}
            name="brace-editor"
            height="300px"
            width="100%"
            fontSize="20"
            editorProps={{ $blockScrolling: true }}
            value={code}
          />
        </div>
      </div>
      <div style={{ width: "50%" }}>
        <div>
          <h1>Resultado</h1>
          {/* TODO: Hacer que el codigo se vea bien ya en el formulario que montaré */}
          <ReactMarkdown
            source={code}
            renderers={{ code: CodeBlock }}
            escapeHtml={false}
          />
        </div>
      </div>
    </div>
  );
};

const classes = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
};

export default CodeEditor;
