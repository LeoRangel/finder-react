import React from 'react';
import Routes from './routes';
// import { hotjar } from 'react-hotjar';
// import TagMananger from 'react-gtm-module';

import GlobalStyle from './globalStyle';

// Hotjar configs
// hotjar.initialize(process.env.HOTJAR_INITIALIZE);
// hotjar.identify(process.env.HOTJAR_IDENTIFY, {
//   userProperty: 'value'
// });
// hotjar.event('button-click');
// hotjar.stateChange('/');

// Google TAG Manager
// const tagManagerArgs = {
//   gtmId: process.env.TAG_MANAGER_GTM_ID
// }
// TagMananger.initialize(tagManagerArgs);

const App = () => {
  return(
    <>
      <GlobalStyle/>
      <Routes />
    </>
  )
}

export default App;
