
var head = document.querySelector('.chatline__head');
var chatline = document.querySelector('.chatline');


function getCoordinatsXY (e) {
	chatline.style.left = e.pageX - chatline.offsetWidth / 2 + 'px';
	chatline.style.top = e.pageY - chatline.offsetHeight / 15 + 'px';
}


head.addEventListener('mousedown', function (e) {
	head.style.cursor = 'grabbing';
	chatline.style.position = 'absolute';
	getCoordinatsXY(e);
	document.body.appendChild(chatline);

	head.addEventListener('mousemove', function (e) {
		getCoordinatsXY(e);
	});

});


head.addEventListener('mouseup', function (e) {
	chatline.style.position = 'fixed';
	head.style.cursor = 'grab';

	//head.onmousemove = null;
	head.addEventListener('mousemove', function (e) {
		chatline.style.left = null;
		chatline.style.top = null;
	});

});


chatline.ondragstart = function () {
	return false;
};
