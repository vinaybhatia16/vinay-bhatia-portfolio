const revealItems = document.querySelectorAll('.intro, .project, .about, .stack, .contact');

revealItems.forEach((item) => item.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) return;
		entry.target.classList.add('is-visible');
		observer.unobserve(entry.target);
	});
}, { threshold: 0.12 });

revealItems.forEach((item) => revealObserver.observe(item));