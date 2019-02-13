//создаем переменную и туда записываем наш элемент в документе
var head = document.querySelector('.chatline__head');
var chatline = document.querySelector('.chatline');

//добавляем событие mousedown на данном элементе
// и передаём туда ф-ию определения координат на документе
head.addEventListener('mousedown', function (e) {
	chatline.style.position = 'absolute';
	getCoordinatsXY(e);
	document.body.appendChild(head);
});

head.addEventListener('mousemove', function (e) {
	getCoordinatsXY(e);
	chatline.clientX = e.pageX;
	chatline.clientY = e.pageY;
});

head.addEventListener('mouseup', function () {

});

//функция определения координат курсора документа
function getCoordinatsXY (e) {
	this.pageX = e.pageX;
	this.pageY = e.pageY;
	console.log(this.pageX + ' ' + this.pageY);
}

