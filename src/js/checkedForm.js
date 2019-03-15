var chatline = document.querySelector('.chatline');
var chatoff = document.querySelector('.chatoff');
var chekbox = document.getElementById('switchForm');

function switchForm () {
	if (chekbox.checked) {
		chatline.style.display = 'block';
		chatoff.style.display = 'none';
	} else {
		chatline.style.display = 'none';
		chatoff.style.display = 'block';
	}
}

chekbox.addEventListener('input', switchForm);