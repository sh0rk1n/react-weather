import React from 'react';
import { MainPage } from '../pages/MainPage';
import IPInfo from 'ip-info-react';
import { Provider } from 'react-redux';
import { store } from './providers/StoreProvider';

function App() {
  document.body.classList.add('page');

  return (
    <Provider store={store}>
      <IPInfo>
        <MainPage />
      </IPInfo>
    </Provider>
  );
}

export default App;
