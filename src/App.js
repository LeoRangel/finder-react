import React from 'react';
import Routes from './routes';
import { hotjar } from 'react-hotjar';
import TagMananger from 'react-gtm-module';

import GlobalStyle from './globalStyle';

 //Hotjar configs
 hotjar.initialize('3053486');
 hotjar.identify('3053486', {
  userProperty:'value'
 });
 hotjar.event('button-click');
 hotjar.stateChange('/');

//Google TAG Manager
const tagManagerArgs = {
  gtmId: 'GTM-563W3XZ'
}
TagMananger.initialize(tagManagerArgs);

const App = () => {
  return(
    <>
      <GlobalStyle/>
      <Routes />
    </>
  )
}

export default App;
