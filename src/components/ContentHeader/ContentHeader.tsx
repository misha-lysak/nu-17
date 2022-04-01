import * as React from 'react';
import { Title, ScrollButton } from './components';

const ContentHeader: React.FC = () => {
  return (
    <div>
      <Title />
      <ScrollButton />
    </div>
  );
};

export { ContentHeader };
