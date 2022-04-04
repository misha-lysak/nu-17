import React, { useState } from 'react';
import './App.scss';
import { ArticlesList, ContentHeader, Footer, Header } from './components';

const imagesPreload = [
  require('./assets/img/1.png'),
  require('./assets/img/2.png'),
  require('./assets/img/3.png'),
  require('./assets/img/4.png'),
  require('./assets/img/5.png'),
  require('./assets/img/6.png'),
  require('./assets/img/7.png'),
  require('./assets/img/8.png'),
  require('./assets/img/9.png'),
  require('./assets/img/10.png'),
  require('./assets/img/11.png'),
  require('./assets/img/12.png'),
  require('./assets/img/13.png'),
  require('./assets/img/14.png'),
  require('./assets/img/15.png'),
  require('./assets/img/16.png'),
  require('./assets/img/17.png'),
];
const App: React.FC<unknown> = () => {
  const [isShownContent, setIsShownContent] = useState(false);
  const [isLoadedImages, setIsLoadedImages] = React.useState(false);
  const [images, setImages] = React.useState<HTMLImageElement[]>([]);

  React.useEffect(() => {
    imagesPreload.forEach((image, id, array) => {
      const newImage = new Image();
      newImage.src = image;

      newImage.onload = () => {
        setImages((prev) => [...prev, newImage]);
      };

      if (id === array.length - 1) {
        newImage.onload = () => {
          setIsLoadedImages(true);
        };
      }
    });
  }, []);

  React.useEffect(() => {
    if (isLoadedImages) {
      setTimeout(() => {
        setIsShownContent(true);
      }, 10000);
    }
    return () => {
      setIsShownContent(false);
    };
  }, [isLoadedImages]);

  return (
    <div className="mx-auto container">
      <Header isLoadedImages={isLoadedImages} images={images} />
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
