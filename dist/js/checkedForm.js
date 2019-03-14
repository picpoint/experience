var chatline = document.querySelector('.chatline');
var chatoff = document.querySelector('.chatoff');
var chekbox = document.getElementById('switchForm');

console.log(chatline);
console.log(chatoff);
console.log(chekbox);

function switchForm () {
	if (chekbox.checked) {
		chatline.style.display = 'block';
		chatoff.style.display = 'none';
	} else {
		chatline.style.display = 'none';
		chatoff.style.display = 'block';
	}
}

//switchForm();
chekbox.addEventListener('input', switchForm);