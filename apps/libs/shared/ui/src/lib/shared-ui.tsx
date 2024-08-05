import styled from '@emotion/styled';

const StyledSharedUi = styled.div`
  color: pink;
  position: fixed;
  top: 0;
`;

export function SharedUi() {
  return (
    <StyledSharedUi>
      <h1>This is SharedUi!</h1>
    </StyledSharedUi>
  );
}

export default SharedUi;
