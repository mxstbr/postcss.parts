import React from "react";
import { Link } from "react-router";

const ListHeading = ({text}) => {
    return(
      <div className="search__heading">
        <Link to="/" className="search__heading-back">
            <svg width="24" height="24" viewBox="0 0 24 24"><g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><path d="M.5.5h10v10h-10zM13.5.5h10v10h-10zM.5 13.5h10v10h-10zM13.5 13.5h10v10h-10z"/></g></svg>
        </Link>
        <h2>{text}</h2>
      </div>
    );
}

export default ListHeading;
