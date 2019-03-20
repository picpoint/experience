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


// ф-ия с регуляркой, которая ищет пробелы повторяющиеся 1 и более раз и заменяет их на один пробел
// в форму chatmanager
function validationChatmanager () {
	chatmanagername = chatmanagername.value.replace(/\s+/g,' ');
	chatmanagermessage = chatmanagermessage.value.replace(/\s+/g, ' ');
	console.log(chatmanagername);
	console.log(chatmanagermessage);
}

// ф-ия с регуляркой, которая ищет пробелы повторяющиеся 1 и более раз и заменяет их на один пробел
// в форму chatoff
function validationChatoff () {
	chatoffname = chatoffname.value.replace(/\s+/g, ' ');
	chatoffemail = chatoffemail.value.replace(/\s+/g, ' ');
	chatoffmessage = chatoffmessage.value.replace(/\s+/g, ' ');
	console.log(chatoffname);
	console.log(chatoffemail);
	console.log(chatoffmessage);
}

// событие на кнопке "отправить" формы chatmanager
btnsend.addEventListener('mousedown', validationChatmanager);

// // событие на кнопке "отправить" формы chatoff
chatoffsend.addEventListener('mousedown', validationChatoff);