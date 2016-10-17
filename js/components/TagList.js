import React from "react";

import TagListItem from "./TagListItem.react";
import tags from "../tags";

const TagList = ({ selectTag }) => {
  return(
    <div>
      {tags.map((tag) => <TagListItem key={"tag-" + tag} name={tag} />)}
    </div>
  );
}

export default TagList;
