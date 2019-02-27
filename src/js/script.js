var head = document.querySelector('.chatline__head');
var chatline = document.querySelector('.chatline');
var chatlineClose = document.querySelector('.chatline__close');

var getXY = function getCoordinatsXY (e) {
	chatline.style.left = e.pageX - chatline.offsetWidth / 2 + 'px';
	chatline.style.top = e.pageY - chatline.offsetHeight / 15 + 'px';
};

head.addEventListener('mousedown', function (e) {
	head.style.cursor = 'grabbing';
	document.addEventListener('mousemove', getXY);
});
head.addEventListener('mousedown', chatlineEffect);
head.addEventListener('mousemove', hideButtonClose);


head.addEventListener('mouseup', function (e) {
	head.style.cursor = 'grab';
	document.removeEventListener('mousemove', getXY);
});
head.addEventListener('mouseup', chatlineNoEffect);
chatlineClose.addEventListener('mouseup', openCloseChatline);
head.addEventListener('mousedown', removeClassopenbox);

function chatlineEffect () {
	chatline.style.transform = 'scale(1.01, 1.01)';
	chatline.style.boxShadow = '0 55px 70px rgba(0,0,0,0.25), 0 45px 100px rgba(0,0,0,0.15)';
	chatline.style.transition = 'ease-out 0.2s';
}

function chatlineNoEffect () {
	chatline.style.transform = 'scale(1, 1)';
	chatline.style.boxShadow = '0 9px 20px rgba(0,0,0,0.25), 0 7px 7px rgba(0,0,0,0.22)';
	chatline.style.transition = 'ease-out 0.2s';
}

function hideButtonClose() {
	chatlineClose.style.display = 'block';
}


function openCloseChatline () {
	chatline.classList.toggle('openbox');
	chatlineClose.classList.toggle('rotate');
}

function removeClassopenbox () {
	chatline.classList.remove('openbox');
}





/*
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
*/