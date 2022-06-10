const rippleButton = document.querySelector('.ripple-button');

function movePositioToCustomProp(e, element) {
	console.log(e);
	let posX = e.offsetX;
	let posY = e.offsetY;

	element.style.setProperty('--x', posX + 'px');
	element.style.setProperty('--y', posY + 'px');
}

rippleButton.addEventListener('click', (e) => {
	movePositioToCustomProp(e, rippleButton);

	rippleButton.classList.add('pulse');

	rippleButton.addEventListener('animationend', () => {
		rippleButton.classList.remove('pulse');
	});
});
