import sprite from '../images/icons.svg';

export const Icon = ({ name, width = 24, height = 24 }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#${name}`}></use>
    </svg>
  );
};
