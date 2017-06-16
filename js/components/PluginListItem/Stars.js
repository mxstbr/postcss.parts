import styled from 'styled-components';
import { colors } from '../../constants';

export default styled.span`
  float: right;
  color: ${colors.textColor};
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 1em;
  font-weight: 300;
  font-size: 1.1em;
  
  &::before {
    content: '★ '
  }
`;
