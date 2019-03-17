// переменная chatline доступ к форме оператор ведёт диалог
var chatline = document.querySelector('.chatline');
// переменная chatoff доступ к форме оператор офлайн
var chatoff = document.querySelector('.chatoff');
// переменная chatmanager доступ к форме напишите нам
var chatmanager = document.querySelector('.chatmanager');

// chatlineradio - перключатель radio на форму chatline
var chatlineradio = document.getElementById('chatlineradio');
// chatoffradio - перключатель radio на форму chatoff
var chatoffradio = document.getElementById('chatoffradio');
// chatmanagerradio - перключатель radio на форму chatmanager
var chatmanagerradio = document.getElementById('chatmanagerradio');


// ф-ия для переключения на ту или иную форму
function switchForm () {
	if (chatlineradio.checked) {
		chatline.style.display = 'block';
		chatoff.style.display = 'none';
		chatmanager.style.display = 'none';
	} else if (chatoffradio.checked) {
		chatline.style.display = 'none';
		chatoff.style.display = 'block';
		chatmanager.style.display = 'none';
	} else if (chatmanagerradio.checked) {
		chatline.style.display = 'none';
		chatoff.style.display = 'none';
		chatmanager.style.display = 'block';
	}


}

// событие на переключателе chatlineradio
chatlineradio.addEventListener('input', switchForm);
// событие на переключателе chatoffradio
chatoffradio.addEventListener('input', switchForm);
// событие на переключателе chatmanagerradio
chatmanagerradio.addEventListener('input', switchForm);