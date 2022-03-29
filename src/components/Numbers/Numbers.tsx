import * as React from 'react';
import './numbers.scss';

const Numbers: React.FC = () => {
  const [number, setNumber] = React.useState(1);

  React.useEffect(() => {
    const count = setTimeout(
      () => {
        if (number !== 17) {
          setNumber((value) => {
            return value + 1;
          });
        }
      },
      number === 1 ? 4000 : 1500 / number
    );

    return () => {
      clearInterval(count);
    };
  }, [number]);

  return (
    <div className="numbers flex justify-center  align-bottom items-end pt-16">
      <img
        className="w-[300px] h-[170px"
        src={require(`../../assets/img/${number}.png`)}
        alt={String(number)}
      />
    </div>
  );
};

export { Numbers };
