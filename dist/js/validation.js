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
	validFields(chatmanager);
	validFields(chatoffObj);
}

function validFields (obj) {
	var reg = /^([0-9a-z_\.-]+)@([0-9a-z_\.-]+)\.([a-z]{2,7})$/;
	var arr_err = [];

	for (var key in obj) {
		if (!obj[key].value) {
			obj[key].style.border = '1px solid red';
			obj[key].value = 'Поле не заполнено';
			arr_err.push(obj[key].value);
			setTimeout(function () {
				for (var key in obj) {
					obj[key].value = '';
				}
			}, 2000);
		} else if (key === 'chatoffemail') {
			obj[key].style.border = '1px solid gray';
			console.log(reg.test(obj[key].value));
		} else {
			obj[key].style.border = '1px solid gray';
			obj[key] = obj[key].value.replace(/\s+/g, ' ').trim();
			console.log(key + '-' + obj[key]);
		}
	}
	//console.log(arr_err);
	if (arr_err.length > 0) {
		console.log('Здесь делаем отправку ajax на сервер!');
	}

}

chatoffsend.addEventListener('click', solidObj);
btnsend.addEventListener('click', solidObj);
