---
title: Surface Detail 2
date: '2020-3-21 00:00:00'
description: ""
thumbnail: "/images/sd-2.jpg"
tags:
- Art
leaflet: true
width: full


---
<div id="image-map"></div>

<script>
    // Using leaflet.js to pan and zoom a big image.

    // create the slippy map
    var map = L.map('image-map', {
      minZoom: 1,
      maxZoom: 4,
      center: [0, 0],
      zoom: 1,
      crs: L.CRS.Simple
    });

    // dimensions of the image
    var w = 2000,
        h = 2000,
        url = '/images/surface-detail-2.jpg';

    // calculate the edges of the image, in coordinate space
    var southWest = map.unproject([0, h], map.getMaxZoom()-1);
    var northEast = map.unproject([w, 0], map.getMaxZoom()-1);
    var bounds = new L.LatLngBounds(southWest, northEast);

    // add the image overlay, 
    // so that it covers the entire map
    L.imageOverlay(url, bounds).addTo(map);

    // tell leaflet that the map is exactly as big as the image
    map.setMaxBounds(bounds);
    map.addControl(new L.Control.Fullscreen());
</script>


