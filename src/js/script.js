
var head = document.querySelector('.chatline__head');
var chatline = document.querySelector('.chatline');

// функция получения координат положения
function getCoordinatsXY (e) {
	chatline.style.left = e.pageX - chatline.offsetWidth / 2 + 'px';
	chatline.style.top = e.pageY - chatline.offsetHeight / 15 + 'px';
}


// событие возникающее при нажатии на хедере формы
head.addEventListener('mousedown', function (e) {
	head.style.cursor = 'grabbing';   // при нажатии, меняет форму курсора
	chatline.style.position = 'absolute'; // меняет позиционирование всей формы
	getCoordinatsXY(e); // при срабатывании нажатия ф-ия получает координаты формы
	document.body.appendChild(chatline); // форма добавляется в боди

	head.addEventListener('mousemove', function (e) {
		getCoordinatsXY(e); // ф-ия mousemove запукается при работе ф-ии mousedown
												// и getCoordinatsXY(e) получает координаты положения
	});

});

// ф-ия срабатывает при отпускании клавиши
head.addEventListener('mouseup', function () {
	document.removeEventListener('mousemove', getCoordinatsXY(e)); // по твоему примеру добавил
																																// ф-ию удаления обработчика
});

