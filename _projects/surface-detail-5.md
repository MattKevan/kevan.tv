---
title: Surface Detail 5
date: '2020-3-24 00:00:00'
description: "Abstract artwork with pen, ink, paper and iPad."
thumbnail: "/images/drawing.jpg"
tags:
- Personal project
- Art
leaflet: true


---
<div id="image-map"></div>

<script>
    // Using leaflet.js to pan and zoom a big image.

    // create the slippy map
    var map = L.map('image-map', {
      minZoom: 1,
      maxZoom: 5,
      center: [0, 0],
      zoom: 1,
      crs: L.CRS.Simple
    });

    // dimensions of the image
    var w = 5000,
        h = 5000,
        url = '/images/surface-detail.jpg';

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

