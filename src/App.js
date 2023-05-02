import React from 'react';
import Form from './Form';
import GothicThemeProvider from './GothicThemeProvider';
import { Global, css } from '@emotion/react';

const globalStyles = css`
  body {
    margin: 0;
    font-family: 'Creepster', cursive;
    background-color: #000;
    color: #fff;
  }
`;

const App = () => {
  return (
    <GothicThemeProvider>
      <Global styles={globalStyles} />
      <div>
        <h1>Divine Darling's Twinflame Reading</h1>
        <Form />
      </div>
    </GothicThemeProvider>
  );
};

export default App;
