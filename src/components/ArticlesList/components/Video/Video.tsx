import * as React from 'react';
import './video.scss';

type VideoProps = {
  videoId: string;
};

const Video: React.FC<VideoProps> = ({ videoId }) => {
  const [isShowedVideo, setIsShowedVideo] = React.useState(false);

  const handleShowVideo = React.useCallback(() => {
    setIsShowedVideo(true);
  }, []);

  return (
    <div className="h-full w-full relative mb-10 md:mb-32">
      <div className="w-full h-full">
        {isShowedVideo ? (
          <iframe
            width="560"
            height="315"
            src={`
            https://www.youtube.com/embed/${videoId}?rel=1&showinfo=1&autoplay=1
            `}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div
            onClick={handleShowVideo}
            className="h-full w-full top-0 cursor-pointer"
          >
            <span className="player hover:bg-red-600 absolute w-16 h-11  rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-[#8e8e8e79]">
              <span className="absolute triangle top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2   "></span>
            </span>
            <img
              className="rounded w-full h-full object-cover object-center"
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export { Video };
