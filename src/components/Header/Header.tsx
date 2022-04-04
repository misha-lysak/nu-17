import * as React from 'react';
import { Logo, Numbers } from './components';

const Header: React.FC<{
  isLoadedImages: boolean;
  images: HTMLImageElement[];
}> = ({ isLoadedImages, images }) => {
  return (
    <div>
      <Logo isLoadedImages={isLoadedImages} />
      {isLoadedImages && <Numbers images={images} />}
    </div>
  );
};

export { Header };
