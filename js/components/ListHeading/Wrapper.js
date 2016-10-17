import styled from 'styled-components';
import constants from '../../constants';

export default styled.div`
  padding: 1em;
  margin: 0;
  border-bottom: 1px solid ${constants.lightGrey};
  text-align: center;
  width: 100%;
  position: relative;
  > h2 {
    padding: 0;
  	margin: 0;
  }
`;
