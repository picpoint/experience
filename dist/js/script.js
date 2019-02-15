var head = document.querySelector('.chatline__head');
var chatline = document.querySelector('.chatline');

var getXY = function getCoordinatsXY (e) {
	chatline.style.left = e.pageX - chatline.offsetWidth / 2 + 'px';
	chatline.style.top = e.pageY - chatline.offsetHeight / 15 + 'px';
	console.log('MD');
}

head.addEventListener('mousedown', function () {
	head.style.cursor = 'grabbing';
	document.addEventListener('mousemove', getXY);
});

head.addEventListener('mouseup', function () {
	head.style.cursor = 'grab';
	document.removeEventListener('mousemove', getXY);
});