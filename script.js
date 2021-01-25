let numbers = 1;
function oncl(number) {
	let vars = document.querySelector('.text' + number);
	for (let i = 1; i < 6; i++) {
		if (i == number)
			continue;
		if (document.querySelector('.text' + i).style.display == 'flex')
			document.querySelector('.text' + i).style.display = 'none';
	}
	if (vars.style.display != 'flex')
		vars.style.display = 'flex';
	else
		vars.style.display = 'none';
}
function navedenie(number) {
	document.querySelector('.disp' + number).style.display = 'block';
	document.querySelector('.dispa' + number).style.display = 'block';
}
function out(number) {
	document.querySelector('.disp' + number).style.display = 'none';
	document.querySelector('.dispa' + number).style.display = 'none';
}
function clickupdown() {
	let el = document.querySelector('#str' + numbers);
	el.classList.remove('displ1');
	if (numbers == 2) {
		numbers--;
	}
	else if (numbers == 1) {
		numbers++;
	}
	document.querySelector('#str' + numbers).classList.add('displ1');
}

