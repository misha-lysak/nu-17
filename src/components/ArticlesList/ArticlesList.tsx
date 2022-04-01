import * as React from 'react';
import categories from '../../data/categories.json';
import { ArticleItem } from '../../types';
import { Article } from './components';

const ArticlesList: React.FC = () => {
  return (
    <ul id="articles" className={'articles-list-wrapper pb-[288px]'}>
      {categories.map((category: ArticleItem) => (
        <Article key={category.img} item={category} />
      ))}
    </ul>
  );
};

export { ArticlesList };
