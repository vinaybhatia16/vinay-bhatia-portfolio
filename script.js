const revealItems = document.querySelectorAll('.intro, .project, .about, .education, .stack, .contact');

revealItems.forEach((item) => item.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) return;
		entry.target.classList.add('is-visible');
		observer.unobserve(entry.target);
	});
}, { threshold: 0.12 });

revealItems.forEach((item) => revealObserver.observe(item));

// Scroll progress bar
const progressBar = document.getElementById('progressBar');
function updateProgress() {
	const scrollTop = window.scrollY;
	const docHeight = document.documentElement.scrollHeight - window.innerHeight;
	const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
	if (progressBar) progressBar.style.width = percent + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();