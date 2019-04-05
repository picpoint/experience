// переменная chatmanagername - доступ к input name формы chatmanager "напиши мне я онлайн"
var chatmanagername = document.getElementById('chatmanagername');

// chatmanagermessage - доступ к полю "введите сообщение" формы chatmanager
var chatmanagermessage = document.getElementById('chatmanagermessage');

// btnsend - кнопка "отправить" на форме chatmanager "напиши мне я онлайн"
var btnsend = document.getElementById('btnsend');

// chatoffname - поле name формы chatoff
var chatoffname = document.getElementById('chatoffname');

// chatoffemail - поле email формы chatoff
var chatoffemail = document.getElementById('chatoffemail');

// chatoffmessage - поле message формы chatoff
var chatoffmessage = document.getElementById('chatoffmessage');

// chatoffsend - кнопка "отправить" на форме chatoff
var chatoffsend = document.getElementById('chatoffsend');

// ф-ия с 2мя объектами для валидации. Каждый объект есть набор полей конкретной формы
function solidObj () {
	var chatmanager = {
		'chatmanagername': chatmanagername,
		'chatmanagermessage': chatmanagermessage
	};
	var chatoffObj = {
		'chatoffname': chatoffname,
		'chatoffemail': chatoffemail,
		'chatoffmessage': chatoffmessage
	};
	validFields(chatmanager); // передача объекта chatmanager в ф-ию валидации
	validFields(chatoffObj);  // передача объекта chatoffObj в ф-ию валидации
}


// ф-ия валидации полей формы
function validFields (obj) {
	var reg = /^([0-9a-z_\.-]+)@([0-9a-z_\.-]+)\.([a-z]{2,7})$/;  // RegExp для проверки поля email
	var arr_err = [];  // пустой массив для проверки, если не заполнено какое либо поле, то отправка данных на сервер не производится

	for (var key in obj) {   // перебираем все ключи и значения объекта
		if (!obj[key].value) {  // если поле пустое
			arr_err.push(obj[key].value);  // в массив пушится пустая строка
			obj[key].style.border = '1px solid red'; // подсвечивается красной обводкой для указания какое поле не заполнено
			obj[key].value = 'Поле не заполнено'; // высвечивается надпись *Поле не заполнено* в незаполненом поле
			setTimeout(function () { // ф-ия SetTimeout заменяет через 2сек надпись *Поле не заполнено* на пустое место
				for (var key in obj) {
					obj[key].value = '';
				}
			}, 2000);
		} else if (key === 'chatoffemail') {  // следующий шаг итерации проверяет если ключ 'chatoffemail'
			obj[key].style.border = '1px solid gray'; // заменяет красную обводку на серую если поле заполнено
			var valid_mail = reg.test(obj[key].value);  // проверяем поле 'chatoffemail' RegExp-ом и если true то записываем значение в valid_mail
			if (valid_mail) {  // если true
				obj[key] = obj[key].value;  // в данное поле мы записываем не true а значение, чтобы потом передать это значение в json файле
				console.log(obj[key]);  // просто консолим для вывода(потом убрать)
			} else {  // далее если  valid_mail != true
				obj[key].style.border = '1px solid red'; // подсвечиваем поле красным
				obj[key].value = 'не корректный Email'; // говорим что поле не соответствует стандарту и не проходит по RegExp-y
			}
		} else {  // далее если поле не 'chatoffemail'
			obj[key].style.border = '1px solid gray'; // убираем красную подсветку
			obj[key] = obj[key].value.replace(/\s+/g, ' ').trim(); //заменяем в значении поля длинные пробелы на одинарный и обрезаем спереди и сзади пробелы
			console.log(key + '-' + obj[key]);  // просто консолим для себя
		}
	}

	console.log(arr_err); // консолим объект ошибок для себя

	if (arr_err.length == 0) {  // если обхект пуст, значит все поля заполнены и можно отправлять данные на сервер
		var xhr = new XMLHttpRequest();
		var url = 'manager.php';
		var result = JSON.stringify(obj);
		xhr.responseType = 'json';
		xhr.open('POST', url, true);
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xhr.addEventListener('readystatechange', function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				var object = xhr.response;
				console.log(object); // консолим для себя чтоб посмотреть содержимое файла
			}
		});
		xhr.send(result);
	}

}

chatoffsend.addEventListener('click', solidObj);  // добавляем клик на кнопку формы chatoff
btnsend.addEventListener('click', solidObj);  // добавляем клик на кнопку формы chatmanager
