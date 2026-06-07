const btn = document.getElementById('screamBtn');
const screamer = document.getElementById('screamer');

function playScreamSound() {
	const audio = new Audio('/Practice/Practice/images/jumpscare.mp3');
	audio.volume = 1;
	audio.play();
}

btn.addEventListener('click', () => {
	playScreamSound();
	screamer.classList.add('active');
});

screamer.addEventListener('click', () => {
	screamer.classList.remove('active');
});

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		screamer.classList.remove('active');
	}
});