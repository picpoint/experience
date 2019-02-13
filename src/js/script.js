//создаем переменную и туда записываем наш элемент в документе
var head = document.querySelector('.chatline__head');
var chatline = document.querySelector('.chatline');

//добавляем событие mousedown на данном элементе
// и передаём туда ф-ию определения координат на документе
head.addEventListener('mousedown', function (e) {
	head.style.cursor = 'grabbing';
	chatline.style.position = 'absolute';
	getCoordinatsXY(e);
	document.body.appendChild(chatline);
});

/*
chatline.addEventListener('mousemove', function (e) {
	getCoordinatsXY(e);
});
*/

head.addEventListener('mousemove', function (e) {
	// передаём сюда эту ф-ию для того чтобы при срабатывании события
	// перемещения мышки событие знало о координатах куда мышка переместилась
	// и на каждом даже самом маленьком сдвиге перемещало туда же форму
	getCoordinatsXY(e);
});

document.onmousemove = function (e) {
	//getCoordinatsXY(e);
};

//функция определения координат курсора документа
function getCoordinatsXY (e) {
	//параметр означает что блоку chatline нужно присвоить координату
	// окна браузера по Х и вычесть половину размера данной области, чтоб
	// захвать был курсором на середине
	// Делаем для  X и Y перемещения, т.е. горизонт/вертикал
	chatline.style.left = e.pageX - chatline.offsetWidth / 2 + 'px';
	chatline.style.top = e.pageY - chatline.offsetHeight / 15 + 'px';
}

// событие на отпускание клавиши мыши
head.addEventListener('mouseup', function () {
	head.style.cursor = 'grab';
	document.onmousemove = null;
	head.onmousemove = null;
	head.onmouseup = null;
});

// эта функция отменяет стандартный встроенный Drag&Drop браузера
// чтобы наш Drag&Drop не конфликтовал
chatline.ondragstart = function () {
	return false;
};
