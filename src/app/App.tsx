import React from 'react';
import { MainPage } from '../pages/MainPage';
import IPInfo from 'ip-info-react';

function App() {
  return (
    <IPInfo>
      <MainPage />
    </IPInfo>
  );
}

export default App;
