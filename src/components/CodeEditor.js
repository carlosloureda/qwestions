import React from "react";
import AceEditor from "react-ace";
import "brace/mode/markdown";
import "brace/theme/twilight";
import ReactMarkdown from "react-markdown";

import CodeBlock from "./CodeBlock";

const CodeEditor = () => {
  const [code, setCode] = React.useState("#Aqui va el Markdown");
  const onChange = newValue => {
    setCode(newValue);
  };

  return (
    <React.Fragment>
      <h1>ACE in Action</h1>
      <div>
        <AceEditor
          mode="markdown"
          theme="twilight"
          onChange={onChange}
          name="brace-editor"
          height="200px"
          width="700px"
          fontSize="20"
          editorProps={{ $blockScrolling: true }}
          value={code}
        />
      </div>
      <div>
        {/* {text} */}
        <div>
          {/* TODO: Hacer que el codigo se vea bien ya en el formulario que montaré */}
          <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CodeEditor;
