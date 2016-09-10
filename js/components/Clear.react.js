import React from "react";
import Link from "react-router/lib/Link";
import styled from "styled-components";

import constants from "../constants";

const ClearLink = styled(Link)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 1em;
  color: ${constants.textColor};
  text-decoration: none;
  padding: 1em;
  border-left: 1px solid ${constants.lightGrey};

  &:hover {
    background-color: ${constants.lightGrey};
  }
`;

const Clear = ({ location, onClear }) => {
  return (
    <ClearLink to={location} onClick={onClear}>X</ClearLink>
  )
}

export default Clear;
