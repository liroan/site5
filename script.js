var button = document.querySelector('.menu-btn');
var counter = 0;
button.addEventListener('click', foo);
function foo() {
	let resp = document.querySelector('.right-top');
	if (!counter) {
		resp.classList.remove('responsive');
		this.classList.add('menu-btn-active');
		counter++;
	}
	else {
		resp.classList.add('responsive');
		this.classList.remove('menu-btn-active');
		counter--;
	}
}