//создаем переменную и туда записываем наш элемент в документе
var head = document.querySelector('.chatline__head');

//добавляем событие mousedown на данном элементе
// и передаём туда ф-ию определения координат на документе
head.addEventListener('mousedown', function (e) {
	getCoordinatsXY(e);
});


//функция определения координат курсора документа
function getCoordinatsXY (e) {
	this.pageX = e.pageX;
	this.pageY = e.pageY;
	console.log(this.pageX + ' ' + this.pageY);
}



