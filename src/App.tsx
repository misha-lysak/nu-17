import React, { useState } from 'react';
import './App.scss';
import { ArticlesList, ContentHeader, Footer, Header } from './components';

const App: React.FC<unknown> = () => {
  const [isShownContent, setIsShownContent] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsShownContent(true);
    }, 10000);
    return () => {
      setIsShownContent(false);
    };
  }, []);

  return (
    <div className="mx-auto container">
      <Header />
      {isShownContent && (
        <div className="container mx-auto content-wrapper">
          <ContentHeader />
          <ArticlesList />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
