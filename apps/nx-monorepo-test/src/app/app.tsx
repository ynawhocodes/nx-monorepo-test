import styled from '@emotion/styled';

import NxWelcome from './nx-welcome';
const StyledApp = styled.div`
  // Your style here
`;
import { SharedUi } from '@react-monorepo/shared-ui';

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="nx-monorepo-test" />
      <SharedUi />
    </StyledApp>
  );
}

export default App;
