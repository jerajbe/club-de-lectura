import React, { useEffect, useState } from "react";

export const Marker = (options) => {
  const [marker, setMarker] = useState();
  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }
    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);
  useEffect(() => {
    if (!marker) return;
    marker.setOptions(options);
    // add listener to google maps marker
    // so that it runs dragHandler on drag end
    const _listener = marker.addListener("dragend", options.dragHandler);
    return () => {
      // unmounts listener in order to avoid RAM collapse
      if (!_listener) return;
      google.maps.event.removeListener(_listener);
    };
  }, [marker, options]);
  return null;
};
