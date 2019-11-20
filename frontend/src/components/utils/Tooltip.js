import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import "./Tooltip.css";

const S = {};

S.ToolTip = styled.span`
  position: relative;
  --tooltip-color: rgba(0, 0, 0, 0.7);
  --tooltip-text-color: #fff;
`;

S.ToolTipTriger = styled.span`
  display: inline-block;
  text-decoration: underline;
`;

S.ToolTipMessage = styled.div`
  background: var(--tooltip-color);
  border-radius: 3px;
  color: var(--tooltip-text-color);
  font-size: 0.75rem;
  line-height: 1.4;
  padding: 0.75em;
  text-align: center;
`;

S.ToolTipBubble = styled.span`
  min-width: 120px;
  max-width: 210px;
  position: absolute;
  z-index: 10;

  &::after {
    content: "";
    position: absolute;

    /* border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-top: 9px solid var(--tooltip-color);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%); */
  }

  /* bottom: ${props => (props.position === "top" ? "100%" : undefined)};
  top: ${props => (props.position in ["top", "bottom"] ? "100%" : "50%")};
  left: ${props => (props.position in ["top", "bottom"] ? "50%" : undefined)};
  padding-bottom: ${props => (props.position === "top" ? "9px" : undefined)};
  transform: ${props =>
    props.position in ["top", "bottom"] ? "translateX(-50%)" : undefined};
  padding-top: ${props => (props.position === "bottom" ? "9px" : undefined)}; */
`;

const Tooltip = ({ message, position = "top", children }) => {
  const [displayTooltip, toggleDisplayTooltip] = React.useState(true);

  return (
    <S.ToolTip onMouseLeave={() => toggleDisplayTooltip(false)}>
      {displayTooltip && (
        // <S.ToolTipBubble position={position}>
        // TODO: move the tooltip-${position} into sytled component
        <S.ToolTipBubble className={`tooltip-${position}`}>
          <S.ToolTipMessage>{message}</S.ToolTipMessage>
        </S.ToolTipBubble>
      )}

      <S.ToolTipTriger onMouseOver={() => toggleDisplayTooltip(true)}>
        {children}
      </S.ToolTipTriger>
    </S.ToolTip>
  );
};

Tooltip.propTypes = {
  message: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"])
};

Tooltip.defaultProps = {
  position: "top"
};
export default Tooltip;
