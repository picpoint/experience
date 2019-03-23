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

	if (this.obj == this.chatoffObj) {
		for (var key in this.chatoffObj) {
			console.log(key);
		}
	}
		/*
		if (chatoffObj[key] == 'chatoffemail') {
			var reg = /^([0-9a-z_\.-]+)@([0-9a-z_\.-]+)\.([a-z]{2,7})$/;
			chatoffemail = reg.test(chatoffemail.value.trim());
		}
		obj[key] = obj[key].value.replace(/\s+/g, ' ').trim();
	}
	*/

}


chatoffsend.addEventListener('click', solidObj);
btnsend.addEventListener('click', solidObj);


/*
// ф-ия с регуляркой, которая ищет пробелы повторяющиеся 1 и более раз и заменяет их на один пробел
// в форму chatmanager
function validationChatmanager () {
	chatmanagername = chatmanagername.value.replace(/\s+/g,' ');
	chatmanagermessage = chatmanagermessage.value.replace(/\s+/g, ' ');
	console.log(chatmanagername);
	console.log(chatmanagermessage);
}
*/



/*
// ф-ия с регуляркой, которая ищет пробелы повторяющиеся 1 и более раз и заменяет их на один пробел
// в форму chatoff
function validationChatoff () {
	var reg = /^([0-9a-z_\.-]+)@([0-9a-z_\.-]+)\.([a-z]{2,7})$/;
	chatoffname = chatoffname.value.replace(/\s+/g, ' ').trim();
  chatoffemail = reg.test(chatoffemail.value.trim());
  if (chatoffemail == false) {
  	console.log("Email is uncorrect");
	}
	chatoffmessage = chatoffmessage.value.replace(/\s+/g, ' ').trim();
	console.log(chatoffname);
	console.log(chatoffemail);
	console.log(chatoffmessage);
}
*/




// событие на кнопке "отправить" формы chatmanager
//btnsend.addEventListener('click', validationChatmanager);

// событие на кнопке "отправить" формы chatoff
//chatoffsend.addEventListener('click', validationChatoff);