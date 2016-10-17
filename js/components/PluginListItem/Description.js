import styled from 'styled-components';
import { colors } from '../../constants';

export default styled.h3`
  display: inline-block;
  color: ${colors.midGrey};
  font-size: 1.1em;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 0;
  @media (max-width: ${colors.maxWidth}) {
    display: block;
  }
`;
