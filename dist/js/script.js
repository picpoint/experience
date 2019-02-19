
var head = document.querySelector('.chatline__head');
var chatline = document.querySelector('.chatline');

var getXY = function getCoordinatsXY (e) {
	chatline.style.left = e.pageX - shiftXY(e).shiftX + 'px';
	chatline.style.top = e.pageY - shiftXY(e).shiftY + 'px';
}

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
	var obj = {
		shiftX: e.pageX - getCoordsHeader(head).left,
		shiftY: e.pageY - getCoordsHeader(head).top
	};
	return obj;
}


head.addEventListener('mousedown', function (e) {
	head.style.cursor = 'grabbing';
	document.addEventListener('mousemove', getXY);
});


head.addEventListener('mouseup', function () {
	head.style.cursor = 'grab';
	document.removeEventListener('mousemove', getXY);
});
