var image = document.getElementsByClassName('conclusions__photo');
new simpleParallax(image, {
	overflow: true
});

var polygonSeries = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
      geoJSON: boroughBoundaries
    })
  );

