const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll('[data-copy]').forEach((button) => {
	button.addEventListener('click', async () => {
		const label = button.querySelector('small');
		try {
			await navigator.clipboard.writeText(button.dataset.copy);
			if (label) label.textContent = 'Kopiert! Jetzt in Discord suchen';
		} catch {
			if (label) label.textContent = `Discord: ${button.dataset.copy}`;
		}
	});
});
