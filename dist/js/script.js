// переменная head - доступ к заголовку формы
var head = document.querySelector('.chatline__head');

// переменная chatline - доступ к форме
var chatline = document.querySelector('.chatline');

// переменная chatlineClose - доступ к кнопке-крестик закрытия/открытия формы
var chatlineClose = document.querySelector('.chatline__close');



// получение координат захвата на форме
var getXY = function getCoordinatsXY (e) {
	chatline.style.left = e.pageX - chatline.offsetWidth / 2 + 'px';
	chatline.style.top = e.pageY - chatline.offsetHeight / 15 + 'px';
};

// событие на head при нажатии кнопки мыши, ставит значёк зажатой руки
// а так же получает координаты формы при перемещении по документу
head.addEventListener('mousedown', function (e) {
	head.style.cursor = 'grabbing';
	document.addEventListener('mousemove', getXY);
});

// добавляет на заголовок событие нажатия мыши,
// функция chatlineEffect добавляет визуализацию тени и увеличения формы при нажатии
head.addEventListener('mousedown', chatlineEffect);

// добавляет на заголовок событие при перемещении по заголовку
// функция hideButtonClose при перемещении показывает кнопку-крестик для закрытия/открытия формы
head.addEventListener('mousemove', hideButtonClose);

// событие на head при отпускании мыши
// событие делает курсор мыши отжатой рукой, так же удаляет событие перемещения и получения
// координат с документа
head.addEventListener('mouseup', function (e) {
	head.style.cursor = 'grab';
	document.removeEventListener('mousemove', getXY);
});

// добавляет событие на head при отпускании клавиши
// ф-ия chatlineNoEffect возвращает эффект тени и масштаб формы в нормальное состояние
head.addEventListener('mouseup', chatlineNoEffect);

// событие mouseup на кнопке-крестик
// ф-ия openCloseChatline переключает класс openbox для показа/скрытия формы
// а так же для вращения кнопки-крестика
chatlineClose.addEventListener('click', openCloseChatline);



// ф-ия ждя добавления эффекта масштаба и тени
function chatlineEffect () {
	chatline.style.transform = 'scale(1.01, 1.01)';
	chatline.style.boxShadow = '0 55px 70px rgba(0,0,0,0.25), 0 45px 100px rgba(0,0,0,0.15)';
	chatline.style.transition = 'ease-out 0.2s';
}

// ф-ия для возвращения в нормальное состояние масштаба и тени
function chatlineNoEffect () {
	chatline.style.transform = 'scale(1, 1)';
	chatline.style.boxShadow = '0 9px 20px rgba(0,0,0,0.25), 0 7px 7px rgba(0,0,0,0.22)';
	chatline.style.transition = 'ease-out 0.2s';
}

// ф-ия для показа кнопки-крестик
function hideButtonClose() {
	chatlineClose.style.display = 'block';
}

// ф-ия для переключения класса openbox и вращения кнопки-крестик
function openCloseChatline (e) {
	chatline.classList.toggle('openbox');
	chatlineClose.classList.toggle('rotate');
	console.log(e.target);
	console.log(e.target.tagName);
	console.log(e.target.classList);
	console.log(e.currentTarget);
	console.log(e.currentTarget.classList);


	if ( (e.target.tagName === 'SPAN') && (e.currentTarget.classList.value === 'chatline__close rotate') ) {
		chatline.style.bottom = '0';
	}


}







// заремаренные ф-ии получения именно тех координат при захвате, где был захват
// на заголовке формы
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