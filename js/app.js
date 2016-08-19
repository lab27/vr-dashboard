$('.play-button').on('click', function(){
	$(this).toggleClass('active')
})

$('#time-grid').draggable({axis: "x", containment: [-780, 24, 400, 24]})