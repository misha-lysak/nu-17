import * as React from 'react';
import { ArticleItem } from '../../../../types';
import { Video } from '../Video';
import './article.scss';

type ArticleProps = {
  item: ArticleItem;
};

const Article: React.FC<ArticleProps> = ({ item }) => {
  return (
    <li className="article-wrapper">
      <div className="md:max-w-[960px] md:mx-auto">
        <img
          className="img object-cover	object-top rounded-md	md:max-h-[450px] w-screen md:w-full"
          src={require(`../../../../assets/img/${item.img}`)}
          alt={item.img}
        />
      </div>
      <article className="mx-7 md:mx-0 article before:content[''] py-6 pl-5 md:pl-10 before:w-1 before:h-full before:absolute before:bg-slate-500 before:-left-0 flex flex-col items-center max-w-[570px] relative justify-center">
        <p className="date absolute -left-4 py-3 bg-white top-8 text-red-700 font-bold text-lg whitespace-pre-wrap w-min flex flex-col items-center justify-center">
          {item.date.split(' ').map((dateItem: string, id: number) => (
            <span key={id} className="leading-5">
              {dateItem}
            </span>
          ))}
        </p>
        <h4 className="text-2xl text-left	 md:pl-0  pl-4 md:text-4xl font-black pb-4 md:pb-8">
          {item.title}
        </h4>
        <p className="pb-10 md:pb-20 text-xs md:text-base leading-5">
          {item.description}
        </p>
        {item.videoId && <Video videoId={item.videoId} />}
      </article>
    </li>
  );
};

export { Article };
