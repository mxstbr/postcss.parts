import React from 'react';

import Item from './Item';
import { tags } from '../../constants';

const TagList = ({ selectTag }) => {
  return (
    <div>
      {tags.map((tag) => <Item key={"tag-" + tag} name={tag} />)}
    </div>
  );
}

export default TagList;
