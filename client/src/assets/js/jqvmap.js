$(function(e){
  'use strict'

	//world map
	if ($('#world-map-gdp').length ){

		$('#world-map-gdp').vectorMap({
			map: 'world_en',
			backgroundColor: null,
			color: '#ffffff',
			hoverOpacity: 0.7,
			selectedColor: '#199319 ',
			enableZoom: true,
			showTooltip: true,
			values: sample_data,
			scaleColors: ['#199319 ', '#4801ff'],
			normalizeFunction: 'polynomial'
		});

	}

	

	//us map
	$('#usa_map').vectorMap({
		map: 'usa_en',
		color: '#f10075',
		borderColor: '#fff',
		backgroundColor: 'null',
		regionStyle : {
			initial : {
			fill : '#664dc9'
			}
			},
		hoverColor: '#f10075',
		showLabels: true
	});
	
	$('#german').vectorMap({
		map: 'germany_en',
		color: '#3bb001',
		borderColor: '#fff',
		backgroundColor: 'null',
		regionStyle : {
			initial : {
			fill : '#664dc9'
			}
			},
		hoverColor: '#212229',
		showLabels: true
	});
	
	$('#russia').vectorMap({
		map: 'russia_en',
		color: '#3bb001',
		borderColor: '#fff',
		backgroundColor: 'null',
		regionStyle : {
			initial : {
			fill : '#664dc9'
			}
			},
		hoverColor: '#212229',
		showLabels: true
	});


});