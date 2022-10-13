import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';

interface ContextInterface {
  open: boolean;
  toggle: any;
}
const FlyOutContext = createContext<ContextInterface>({ open: false, toggle: null });

interface Props {
  children: React.ReactNode;
}
const FlyOut = (props: Props) => {
  const { children } = props;
  const [open, setOpen] = useState(false);

  const toggle = (_open: boolean) => {
    setOpen(_open);
  };

  const providerValue = useMemo(() => ({ open, toggle }), [open]);

  return <FlyOutContext.Provider value={providerValue}>{children}</FlyOutContext.Provider>;
};

const Toggle = (props: { url: string }) => {
  const { url } = props;
  const { open, toggle } = useContext(FlyOutContext);

  return (
    <div className={`icon-container${open ? '-open' : ''}`}>
      <div
        onClick={() => {
          console.log('CLICK', open);
          toggle(!open);
        }}
        aria-hidden="true"
      >
        <img id="avatar" src={url} alt="avatar" />
        <DownOutlined className="down-arrow" />
      </div>
    </div>
  );
};

function List({ children }: { children: React.ReactNode }) {
  const { open } = React.useContext(FlyOutContext);
  useEffect(() => {
    console.log('Open', open);
  }, [open]);

  return open ? <ul>{children}</ul> : null;
}

function Item({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}

FlyOut.Toggle = Toggle;
FlyOut.Item = Item;
FlyOut.List = List;

export default FlyOut;
