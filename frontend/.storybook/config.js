// automatically import all files ending in *.stories.js

import { configure } from "@storybook/react";
import requireContext from "require-context.macro";

// // import "../src/index.css";

const req = requireContext("../src/components", true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => {
    return req(filename);
  });
}
configure(loadStories, module);
