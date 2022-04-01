import * as React from 'react';
import './title.scss';

const Title: React.FC = () => {
  return (
    <div className="title-wrapper mt-16 flex justify-center">
      <p className="text-white text-center text-sm md:text-base	flex flex-col items-center ">
        <span className="bg-slate-800 py-1 px-3 mb-0.5 block w-min whitespace-nowrap justify-self-center">
          DE 17 BELANGRIJKSTE
        </span>
        {/* <br /> */}
        <span className="bg-slate-800  py-1 px-3 mb-0.5 block w-min whitespace-nowrap">
          NIEUWSMOMENTEN VAN 2017
        </span>
        {/* <br /> */}
        <span className="bg-slate-800  py-1 px-3 mb-0.5 block">
          VOLGENS NU.NL
        </span>
      </p>
    </div>
  );
};

export { Title };
