import React from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs/react";

import he from 'he';

import CodeBlock from "./CodeBlock";

storiesOf("CodeBlock", module)
    .addDecorator(withKnobs({
            escapeHTML: false
        })
    )
    .add("Default", () => (    
        <CodeBlock 
            value={text("value", "")} 
            language={text("language", "")}
        />
    ))
    .add("Value", () => (
        <CodeBlock 
            value={text("value", "console.log(\"Hello World\");")} 
            language={text("language", "")}
        />
    ))
    .add("Language (javascript)", () => (
        <CodeBlock 
            value={text("value", "")} 
            language={text("language", "javascript")}
        />
    ))
    .add("Value & Language", () => (
        <CodeBlock 
            value={text("value", "console.log('Hello World');")} 
            language={text("language", "javascript")}
        />
    )/*, {
        knobs: {
            escapeHTML: false
        }
    }*/);