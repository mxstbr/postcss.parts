import styled from 'styled-components';
import { colors } from '../../constants';

export default styled.a`
  display: block;
  padding: 0.75em 1.5em;
  border-bottom: 1px solid ${colors.lightGrey};
  text-decoration: none;
  &:hover {
    background-color: ${colors.lightGrey};
  }
  &:focus {
    background-color: ${colors.lightGrey};
  }
  &:last-child {
    border-radius: 0 0 5px 5px;
  }
`;
