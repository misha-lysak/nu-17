import React from 'react';
import './App.scss';
import { Logo, Numbers, Title } from './components';

const App: React.FC<unknown> = () => {
  return (
    <div className="">
      <Logo />
      <Numbers />
      <Title />
    </div>
  );
};

export default App;
