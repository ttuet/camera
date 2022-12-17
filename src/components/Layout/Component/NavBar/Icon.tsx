import React from 'react';

type Props = {
  name: string;
};
const Icon = ({ name }: Props) => {
  return <img src={`./images/${name}.svg`} width={24} height={24} alt={name} />;
};

export default Icon;
