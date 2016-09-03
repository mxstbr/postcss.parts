import React from "react";
import Link from "react-router/lib/Link";

const Close = ({ location, onClear }) => {
  return (
      <Link to={location} onClick={onClear} className="plugin__search__clear-link">X</Link>
  )
}

export default Close;