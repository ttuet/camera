import React from 'react';
import '../styles/index.scss';

interface Props {
  children: React.ReactNode;
}

export const PublicLayout = ({ children }: Props) => (
  <div className="public-layout">{children}</div>
);
