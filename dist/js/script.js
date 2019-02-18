var head = document.querySelector('.chatline__head');
var chatline = document.querySelector('.chatline');

var getXY = function getCoordinatsXY (e) {
	chatline.style.left = e.pageX - chatline.offsetWidth / 2 + 'px';
	chatline.style.top = e.pageY - chatline.offsetHeight / 15 + 'px';
}

//head.addEventListener('mousedown', shiftXY);
head.addEventListener('mousedown', function (e) {
	head.style.cursor = 'grabbing';
	document.addEventListener('mousemove', getXY);
});


head.addEventListener('mouseup', function () {
	head.style.cursor = 'grab';
	document.removeEventListener('mousemove', getXY);
});

//ф-ия получения размера элемента и его позиции относительно окна
function getCoordsHeader (elem) {
	var boxHeader = elem.getBoundingClientRect();
	return {
		top: boxHeader.top + pageYOffset,
		left: boxHeader.left + pageXOffset
	}
}

// ф-ия получения координать клика на элементе
function shiftXY (e) {
	var shiftX = e.pageX - getCoordsHeader(head).left;
	var shiftY = e.pageY - getCoordsHeader(head).top;
	console.log('X = ' + shiftX);
	console.log('Y = ' + shiftY);
	console.log('-----------------');
}