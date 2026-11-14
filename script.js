const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const translations = {
	de: {
		'nav.work': 'Arbeiten',
		'nav.about': 'Hi, ich bin Saskia',
		'nav.contact': 'Sag Hallo',
		availability: 'Offen für neue Projekte',
		'hero.kicker': 'EINLADUNGEN · ANIMATION · FILM',
		'hero.line1': "Ich mach's",
		'hero.line2': 'bunt!',
		'hero.intro': 'Ich bin <strong>Saskia</strong>. Ich mache Einladungen, kleine Filme und Designs mit Charakter. Am liebsten bunt, manchmal ein bisschen wild — immer für echte Menschen.',
		'hero.cta': 'Schau dich um',
		'hero.note': 'KONZEPT · GESTALTUNG · FINAL CUT',
		'hero.sticker1': 'SASKIA LEISMANN',
		'hero.sticker2': 'VON DER ERSTEN IDEE BIS ZUM LETZTEN FRAME',
		'hero.collageNote': 'AUS DEM STUDIO · 01—03',
		'hero.collageCaption': 'EINLADUNGEN, BRANDING & MOTION',
		'hero.footer1': 'PORTFOLIO 2026',
		'hero.footer2': 'RUNTER ZU DEN ARBEITEN ↓',
		'hero.footer3': 'GESTALTET VON SASKIA',
		'work.kicker': '01 / AUS MEINEM KOPF IN DIE WELT',
		'work.title1': 'Meine',
		'work.title2': 'Sachen',
		'work.intro': 'Von Hochzeitseinladung bis Sci-Fi-Animation — hier trifft sich alles, worauf ich Lust hatte.',
		'project.wedding.badge': '♡ für immer',
		'project.wedding.type': 'EINLADUNG · HOCHZEIT',
		'project.wedding.desc': 'Save the Date · Einladung',
		'project.caroline.type': 'ILLUSTRATION · GEBURTSTAG',
		'project.caroline.desc': 'Geburtstagseinladung · Illustration',
		'project.sophie.type': 'EINLADUNG · FLORAL',
		'project.sophie.desc': 'Eine blumige Einladung zum Geburtstag.',
		'project.pdf': 'PDF-VERSION ↗',
		'project.dj.type': 'MOTION DESIGN · 5 SEK',
		'project.dj.desc': 'Das Sci-Fi-Poster für DJ Ketanoizer — jetzt animiert.',
		'project.lumi.type': 'BRANDING · SOCIAL MEDIA',
		'project.lumi.desc': 'Ein Instagram-Konzept für eine Pflegebrand mit eigener Produktwelt.',
		'project.dog.type': 'FILM · UNTERWEGS MIT HUND',
		'project.dog.title': 'Draußen unterwegs',
		'project.dog.desc': 'Ein kleiner Spaziergang mit großem Star auf vier Pfoten.',
		'project.gaming.type': 'GAMING · THUMBNAIL',
		'project.gaming.title': 'Neues Update!',
		'project.gaming.desc': 'Starke Licht-Kontraste und große Schrift für mehr Aufmerksamkeit.',
		'work.outro': "Jede Arbeit anders. Genau so mag ich's.",
		'about.kicker': '02 / DAS BIN ICH',
		'about.title1': 'Hi, ich bin',
		'about.lead': 'Ich hab Spaß an Ideen, die ein bisschen anders sind.',
		'about.text': 'Mal gestalte ich eine Einladung für einen großen Tag, mal lasse ich Planeten in einem Sci-Fi-Poster kreisen. Dazwischen filme ich gern die kleinen echten Momente. Mein Stil? Farbe, Gefühl und immer ein eigener Dreh.',
		'service.design': 'Grafikdesign',
		'service.invites': 'Einladungen',
		'service.animation': 'Animation',
		'service.film': 'Film',
		'about.strip1': 'GUTE IDEEN',
		'about.strip2': 'VIEL FARBE',
		'about.strip3': 'EINE PERSÖNLICHE NOTE',
		'contact.kicker': '03 / ZUSAMMEN WAS SCHÖNES MACHEN?',
		'contact.title1': "Du hast 'ne Idee.",
		'contact.title2': 'Ich bin',
		'contact.title3': 'dabei.',
		'contact.text': 'Ob Einladung, Film oder etwas, das es so noch gar nicht gibt: Erzähl mir, was du vorhast. Ich freu mich auf deine Nachricht.',
		'contact.discord': '@s.ldesign · Profil öffnen',
		'contact.email': 'E-Mail',
		'contact.footer': 'SASKIA LEISMANN · OFFEN FÜR DEINE IDEE',
		'footer.top': 'Zurück nach oben ↑',
		title: 'Saskia Leismann — Grafikdesign & Film',
		description: 'Saskia Leismann — Grafikdesign, Einladungen, Animation und Film.'
	},
	en: {
		'nav.work': 'Work',
		'nav.about': 'Meet Saskia',
		'nav.contact': "Let's talk",
		availability: 'Available for new projects',
		'hero.kicker': 'INVITATIONS · ANIMATION · FILM',
		'hero.line1': 'I make it',
		'hero.line2': 'colourful!',
		'hero.intro': "I'm <strong>Saskia</strong>. I make invitations, short films and designs with character. Usually colourful, sometimes a little wild — always made for real people.",
		'hero.cta': 'Take a look',
		'hero.note': 'IDEA · DESIGN · FINAL CUT',
		'hero.sticker1': 'SASKIA LEISMANN',
		'hero.sticker2': 'FROM THE FIRST IDEA TO THE FINAL FRAME',
		'hero.collageNote': 'FROM THE STUDIO · 01—03',
		'hero.collageCaption': 'INVITATIONS, BRANDING & MOTION',
		'hero.footer1': 'PORTFOLIO 2026',
		'hero.footer2': 'SCROLL TO THE WORK ↓',
		'hero.footer3': 'MADE BY SASKIA',
		'work.kicker': '01 / FROM MY HEAD INTO THE WORLD',
		'work.title1': 'My',
		'work.title2': 'work',
		'work.intro': 'From wedding invitations to sci-fi animation — a little bit of everything I love making.',
		'project.wedding.badge': '♡ forever',
		'project.wedding.type': 'INVITATION · WEDDING',
		'project.wedding.desc': 'Save the date · Wedding invitation',
		'project.caroline.type': 'ILLUSTRATION · BIRTHDAY',
		'project.caroline.desc': 'Birthday invitation · Illustration',
		'project.sophie.type': 'INVITATION · FLORAL',
		'project.sophie.desc': 'A floral invitation for a birthday celebration.',
		'project.pdf': 'PDF VERSION ↗',
		'project.dj.type': 'MOTION DESIGN · 5 SEC',
		'project.dj.desc': 'A sci-fi release poster for DJ Ketanoizer — now in motion.',
		'project.lumi.type': 'BRANDING · SOCIAL MEDIA',
		'project.lumi.desc': 'An Instagram concept and product identity for a skincare brand.',
		'project.dog.type': 'FILM · OUT WITH THE DOG',
		'project.dog.title': 'Out for a walk',
		'project.dog.desc': 'A little walk with a very good four-legged co-star.',
		'project.gaming.type': 'GAMING · THUMBNAIL',
		'project.gaming.title': 'New update!',
		'project.gaming.desc': 'Bold lighting and big type designed to grab attention.',
		'work.outro': 'Every project is different. That is exactly how I like it.',
		'about.kicker': '02 / A LITTLE ABOUT ME',
		'about.title1': "Hi, I'm",
		'about.lead': 'I love ideas that are just a little different.',
		'about.text': 'Sometimes I design an invitation for a big day; sometimes I set planets in motion on a sci-fi poster. In between, I love filming the little real moments. My style? Colour, feeling and always a twist of my own.',
		'service.design': 'Graphic design',
		'service.invites': 'Invitations',
		'service.animation': 'Animation',
		'service.film': 'Film',
		'about.strip1': 'GOOD IDEAS',
		'about.strip2': 'LOTS OF COLOUR',
		'about.strip3': 'A PERSONAL TOUCH',
		'contact.kicker': '03 / LET’S MAKE SOMETHING GOOD',
		'contact.title1': 'Got an idea?',
		'contact.title2': "I'm",
		'contact.title3': 'in.',
		'contact.text': 'An invitation, a film or something that does not exist yet — tell me what you have in mind. I would love to hear from you.',
		'contact.discord': '@s.ldesign · open profile',
		'contact.email': 'Email',
		'contact.footer': 'SASKIA LEISMANN · OPEN TO YOUR IDEAS',
		'footer.top': 'Back to top ↑',
		title: 'Saskia Leismann — Graphic Design & Film',
		description: 'Saskia Leismann — graphic design, invitations, animation and film.'
	}
};

function setLanguage(language) {
	const copy = translations[language] || translations.de;

	document.querySelectorAll('[data-i18n]').forEach((element) => {
		const text = copy[element.dataset.i18n];
		if (text === undefined) return;
		if (element.hasAttribute('data-i18n-html')) element.innerHTML = text;
		else element.textContent = text;
	});

	document.querySelectorAll('[data-aria-en]').forEach((element) => {
		element.setAttribute('aria-label', language === 'en' ? element.dataset.ariaEn : element.dataset.ariaDe);
	});
	document.querySelectorAll('[data-alt-en]').forEach((image) => {
		image.alt = language === 'en' ? image.dataset.altEn : image.dataset.altDe;
	});

	document.documentElement.lang = language;
	document.title = copy.title;
	document.querySelector('meta[name="description"]')?.setAttribute('content', copy.description);

	document.querySelectorAll('[data-language]').forEach((button) => {
		const isActive = button.dataset.language === language;
		button.setAttribute('aria-pressed', String(isActive));
		button.classList.toggle('is-active', isActive);
	});

	try {
		localStorage.setItem('saskia-portfolio-language', language);
	} catch {
		// The language still works when storage is disabled.
	}
}

document.querySelectorAll('[data-language]').forEach((button) => {
	button.addEventListener('click', () => setLanguage(button.dataset.language));
});

let savedLanguage = 'de';
try {
	savedLanguage = localStorage.getItem('saskia-portfolio-language') || 'de';
} catch {
	// Default to German when browser storage is disabled.
}
setLanguage(savedLanguage);
