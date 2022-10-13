import React from 'react';
import FlyOut from './DropDownContext';
import './index.scss';

interface Props {
  url: string;
}
const IconContainer = (props: Props) => {
  const { url } = props;
  return (
    <FlyOut>
      <FlyOut.Toggle url={url} />
      <FlyOut.List>
        <FlyOut.Item>Edit profile</FlyOut.Item>
        <FlyOut.Item>Set status</FlyOut.Item>
      </FlyOut.List>
    </FlyOut>
  );
};

export default IconContainer;
