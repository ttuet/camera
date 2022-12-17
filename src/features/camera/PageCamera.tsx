import React from 'react';

const PageCamera = () => {
  return (
    <iframe
      src="http://192.168.2.108"
      title="Camera"
      allow="geolocation microphone camera midi encrypted-media vr"
    />
  );
};

export default PageCamera;
