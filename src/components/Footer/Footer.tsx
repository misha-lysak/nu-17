import * as React from 'react';
import {
  RiFacebookFill,
  RiLinksFill,
  RiTwitterFill,
  RiWhatsappLine,
} from 'react-icons/ri';

const size = 32;
const socialIcons = [
  {
    icon: <RiFacebookFill size={size} color="white" />,
    link: 'https://www.facebook.com/mishaaalysak',
  },
  {
    icon: <RiTwitterFill size={size} color="white" />,
    link: 'https://www.instagram.com/misha_lysak/',
  },
  {
    icon: <RiWhatsappLine size={size} color="white" />,
    link: 'https://www.whatsapp.com/?lang=ua',
  },
  {
    icon: <RiLinksFill size={size} color="white" />,
    link: 'https://www.linkedin.com/mynetwork/',
  },
];

const Footer: React.FC = () => {
  return (
    <div
      className={
        'absolute bottom-0 left-0 right-0 z-10 bg-[#202643] py-10 flex justify-center items-center flex-col'
      }
    >
      <h3 className="uppercase font-semibold mb-5 py-2 px-8 bg-white">
        Deel op social media
      </h3>
      <div className="mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="44"
          viewBox="0 0 80 72"
        >
          <g fill="none" fillRule="evenodd">
            <ellipse
              cx="35.871"
              cy="36"
              fill="#020051"
              rx="34.839"
              ry="34.964"
            />
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M35.871 72C16.06 72 0 55.882 0 36S16.06 0 35.871 0c19.811 0 35.87 16.118 35.87 36s-16.059 36-35.87 36zm0-2.072c18.67 0 33.806-15.19 33.806-33.928S54.542 2.072 35.871 2.072C17.201 2.072 2.065 17.262 2.065 36S17.2 69.928 35.87 69.928z"
            />
            <path
              fill="#FFF"
              d="M13.264 20.201h20.158c.502 0 .876.563.876.874v28.814c0 .427-.307.874-.876.874h-7.888c-.285 0-.554-.392-.877-.874V28.933c.323-1.81-2.952-1.774-2.629 0V49.89c-.323.462-.785.874-.876.874h-7.888c-.257 0-.877-.725-.877-.874V21.075c0-.292.542-.874.877-.874zm24.54 30.562h20.158c.644 0 .877-.376.877-.874V21.075c0-.24-.165-.874-.877-.874h-7.888c-.401 0-.829.58-.876.874v21.829c.047 1.125-2.416 1.088-2.63 0v-21.83c.214-.273-.11-.873-.876-.873h-7.888c-.82 0-.876.573-.876.874v28.814c0 .479.092.874.876.874z"
            />
            <path
              fill="#B70509"
              fillRule="nonzero"
              d="M67.607 40.194l3.103 3.317 3.103-3.317 3.955-4.228c1.646-1.76 1.591-4.556-.122-6.246a4.224 4.224 0 0 0-6.083.127l-.853.96-.853-.96a4.224 4.224 0 0 0-6.083-.127c-1.714 1.69-1.769 4.486-.123 6.246l3.956 4.228z"
            />
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M70.81 29.137a5.253 5.253 0 0 1 7.56-.155c2.113 2.084 2.18 5.523.151 7.693l-7.811 8.35-7.812-8.35c-2.03-2.17-1.962-5.61.152-7.693 2.127-2.098 5.517-2.028 7.577.175l.083.093.1-.113zm6.206 6.12c1.262-1.35 1.22-3.503-.094-4.798a3.19 3.19 0 0 0-4.589.077l-1.623 1.827-.77-.867-.836-.94a3.194 3.194 0 0 0-4.607-.097c-1.313 1.295-1.356 3.448-.093 4.797l6.306 6.741 6.306-6.74z"
            />
          </g>
        </svg>
      </div>
      <div className="flex mb-5">
        {socialIcons.map(({ icon, link }, id) => (
          <a
            target="_blank"
            href={link}
            className="bg-[#363c57] cursor-pointer rounded-full p-3 mr-3 flex justify-center items-center"
            key={Date.now() + id}
          >
            {icon}
          </a>
        ))}
      </div>
      <p className="text-xs text-white">
        ?? 2017 Sanoma Digital The Netherlands B.V. NU - onderdeel van Sanoma
        Media Netherlands Group
      </p>
    </div>
  );
};

export { Footer };
