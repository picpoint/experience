
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
		e.stopPropagation();
	});

});


head.addEventListener('mouseup', function (e) {
	chatline.style.position = 'fixed';
	head.style.cursor = 'grab';

	head.addEventListener('mousemove', function (e) {
		chatline.style.left = e.pageX - chatline.offsetWidth / 2 + 'px';
		chatline.style.top = null;
		e.stopPropagation();
	});
});

/*
chatline.ondragstart = function () {
	return false;
};
*/