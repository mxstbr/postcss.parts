import React from 'react';

import Item from './Item';
import tags from '../../tags';

const TagList = ({ selectTag }) => {
  return (
    <div>
      {tags.map((tag) => <Item key={"tag-" + tag} name={tag} />)}
    </div>
  );
}

export default TagList;
