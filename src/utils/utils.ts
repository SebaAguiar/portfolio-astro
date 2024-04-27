import { ui, defaultLang } from '../i18n/ui';

export const getLangFromUrl = (url: URL) => {
	const [, lang] = url.pathname.split('/');
	if (lang in ui) return lang as keyof typeof ui;
	return defaultLang;
};

export const useTranslations = (lang: keyof typeof ui) => {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] || ui[defaultLang][key];
	};
};

export const getPathFromUrl = (url: URL, lang: keyof typeof ui) => {
	const [, path] = url.pathname.split(`/${lang}`);
	return path;
};

export const dateFormater = (date: string, lang: string, options: object) => {
	const locales = lang === 'en' ? 'en-US' : 'es-ES';
	const newDate = new Date(date);
	const birth = newDate.toLocaleDateString(locales, options);
	return birth;
};

export const capitalizeFirstLetter = (word: string) => {
	return word.charAt(0).toUpperCase() + word.slice(1);
};
