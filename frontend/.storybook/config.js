// automatically import all files ending in *.stories.js

import { configure, addDecorator } from "@storybook/react";
import requireContext from "require-context.macro";
import StoryRouter from "storybook-react-router";

// // import "../src/index.css";
addDecorator(StoryRouter());

const req = requireContext("../src/components", true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => {
    return req(filename);
  });
}
configure(loadStories, module);
