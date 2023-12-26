/*global Microsoft*/

import React, { useEffect } from 'react';

const BingMap = ({ apiKey , width , height , value }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://www.bing.com/api/maps/mapcontrol?key=${apiKey}&callback=initMap`;

    document.body.appendChild(script);

    script.onload = () => {
      // eslint-disable-next-line no-undef
      initMap();
    };

    return () => {
      // Clean up map resources if needed
    };
  }, [apiKey]);

  window.initMap = () => {
    // eslint-disable-next-line no-undef
    const map = new Microsoft.Maps.Map('#bingMap', {
      credentials: apiKey,
      // center: { latitude: 0, longitude: 0 }, // Set your initial center coordinates
      center: value, // Set your initial center coordinates
      zoom: 4,
    });

    // Add any additional functionality or markers as needed
  };

  return <div id="bingMap" />;
};

export default BingMap;
