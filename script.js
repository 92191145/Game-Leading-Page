document.addEventListener('click',  Function(e){
	let  body = document.querySelector('body');
	let bullet = document.createElement('span');
	bullet.classList.add('bullet');
	let x = e.offsetX;
	let y = e.offsetY;
	bullet.style.left = x+'px';
	bullet.style.top = y+'px';
	body.appendChild(bullet);
})