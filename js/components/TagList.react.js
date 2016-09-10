import React from "react";

import TagListItem from "./TagListItem.react";
import Tags from "../tags";

const TagList = ({ selectTag }) => {
  return(
    <div>
      {Tags.map((tag) => <TagListItem key={"tag-" + tag} name={tag} />)}
    </div>
  );
}

export default TagList;
