import * as React from 'react';
import { Logo, Numbers } from './components';

const Header: React.FC = () => {
  return (
    <div>
      <Logo />
      <Numbers />
    </div>
  );
};

export { Header };
