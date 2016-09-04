import styled from 'styled-components';
import constants from '../constants';

export default styled.a`
  display: block;
  padding: 0.75em 1.5em;
  border-bottom: 1px solid ${ constants.lightGrey };
  text-decoration: none;
  &:hover {
    background-color: ${ constants.lightGrey };
  }
  &:focus {
    background-color: ${ constants.lightGrey };
  }
  &:last-child {
    border-radius: 0 0 5px 5px;
  }
`;
