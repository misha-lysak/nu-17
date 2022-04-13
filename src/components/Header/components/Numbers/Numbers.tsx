import * as React from 'react';
import './numbers.scss';

const Numbers: React.FC<{ images: HTMLImageElement[] }> = ({ images }) => {
  const [number, setNumber] = React.useState(1);
  const [isCancelCount, setIsCancelCount] = React.useState(false);

  React.useEffect(() => {
    const count = setTimeout(
      () => {
        if (number !== 17) {
          setNumber((value) => {
            return value + 1;
          });
        }
        if (number === 17) {
          setIsCancelCount(true);
        }
      },
      number === 1 ? 4000 : 1500 / number
    );

    return () => {
      clearInterval(count);
    };
  }, [number]);

  return (
    <div
      className={`numbers mx-auto flex justify-center  align-bottom items-end pt-16 ${
        isCancelCount ? 'fade-up' : ''
      }`}
    >
      <img
        className="w-[300px] h-[170px]"
        src={require(`../../../../assets/img/${number}.png`)}
        alt={String(number)}
      />
    </div>
  );
};

export { Numbers };
