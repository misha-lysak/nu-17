import * as React from 'react';
import './logo.scss';

const Logo: React.FC = () => {
  return (
    <div className={'logo flex justify-center'}>
      <img
        src="https://2017.nu.nl/nu-hartje.svg"
        alt="logo"
        className="logo-img h-20 w-16"
      />
    </div>
  );
};

export { Logo };
