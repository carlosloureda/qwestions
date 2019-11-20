import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs/react";

import Tooltip from "./Tooltip";

storiesOf("Tooltip", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <div style={{ marginTop: "120px", textAlign: "center" }}>
      Here is
      <Tooltip message={text("message", "Hey! this is a tooltip")}>
        tooltip
      </Tooltip>{" "}
      on top
    </div>
  ))
  .add("Top", () => (
    <div style={{ marginTop: "120px", textAlign: "center" }}>
      Here is
      <Tooltip
        message={text("message", "Hey! this is a tooltip on top")}
        position={text("position", "top")}
      >
        tooltip
      </Tooltip>{" "}
      on top
    </div>
  ))
  .add("Bottom", () => (
    <div style={{ marginTop: "120px", textAlign: "center" }}>
      Here is
      <Tooltip
        message={text("message", "Hey! this is a tooltip on bottom")}
        position={text("position", "bottom")}
      >
        tooltip
      </Tooltip>{" "}
      on top
    </div>
  ))
  .add("Left", () => (
    <div style={{ marginTop: "120px", textAlign: "center" }}>
      Here is
      <Tooltip
        message={text("message", "Hey! this is a tooltip on left")}
        position={text("position", "left")}
      >
        tooltip
      </Tooltip>{" "}
      on top
    </div>
  ))
  .add("Right", () => (
    <div style={{ marginTop: "120px", textAlign: "center" }}>
      Here is
      <Tooltip
        message={text("message", "Hey! this is a tooltip on right")}
        position={text("position", "right")}
      >
        tooltip
      </Tooltip>{" "}
      on top
    </div>
  ));
