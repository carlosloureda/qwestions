import React from 'react';
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number } from "@storybook/addon-knobs/react";
import CodeEditor from "./CodeEditor";

export const actions = {
    onChangeCode: action("onChangeCode")
}


storiesOf("CodeEditor", module)
    .addDecorator(withKnobs)
    .add("Default", () => (
        <CodeEditor {...actions} />
    ))
    .add("Placeholder", () => (
        <CodeEditor
            placeholder={text("placeholder", "# Aquí va el Markdown")}
            {...actions}
        />
    ))
    .add("width of 50%", () => (
        <CodeEditor
            width={number("width", 50)}
            {...actions}
        />
    ))
    // TODO: height is breaking
    // .add("height of 300px", () => (
    //     <CodeEditor
    //         height={number("height", 300)}
    //         {...actions}
    //     />
    // ))
    .add("theme 'github'", () => (
        <CodeEditor
            theme={text("theme", "github")}
            {...actions}
        />
    ))
    .add("language 'python'", () => (
        <CodeEditor
            language={text("language", "python")}
            {...actions}
        />
    ))
    .add("All config passed: theme 'github, language 'python', ...", () => (
        <CodeEditor
            placeholder={text("placeholder", "# Aquí va el Markdown")}
            width={number("width", 50)}
            // height={50}
            language={text("language", "python")}
            theme={text("theme", "github")}
            {...actions}
        />
    ));
      