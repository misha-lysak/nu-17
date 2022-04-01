import * as React from 'react';

const ScrollButton: React.FC = () => {
  return (
    <div className={''}>
      <a
        href="#articles"
        className="flex justify-center items-center flex-col mt-24"
      >
        <p className="mb-2 text-xs md:text-base">Scroll om te lezen</p>
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>4EC0D466-8F05-46BB-8A48-9F973C4CBCD3</title>
          <desc>Created with sketchtool.</desc>
          <defs></defs>
          <g
            id="04-overview-desktop"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            transform="translate(-628.000000, -627.000000)"
          >
            <g
              id="00b-scroll-button"
              transform="translate(590.000000, 602.000000)"
            >
              <g id="Arrow-scroll" transform="translate(38.000000, 25.000000)">
                <circle
                  id="Oval"
                  stroke="#1F2544"
                  cx="12"
                  cy="12"
                  r="11.5"
                ></circle>
                <path
                  d="M12.1609,12.8235912 L16.8230056,10.1319233 C17.2941181,9.8599264 17.9103167,10.021141 18.186459,10.4994337 C18.4645266,10.9810608 18.2998778,11.5886519 17.8230056,11.8639741 L12.9112106,14.6998003 C12.7122798,14.901943 12.437142,15.0074428 12.1609,14.9983218 C11.884658,15.0074428 11.6095203,14.901943 11.4105894,14.6998003 L6.49879442,11.8639741 C6.02192226,11.5886519 5.85727341,10.9810608 6.135341,10.4994337 C6.41148337,10.021141 7.02768195,9.8599264 7.49879442,10.1319233 L12.1609,12.8235912 Z"
                  id="down-button"
                  fill="#1F2544"
                  transform="translate(12.160900, 12.499434) scale(1, -1) rotate(-180.000000) translate(-12.160900, -12.499434) "
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </a>
    </div>
  );
};

export { ScrollButton };
