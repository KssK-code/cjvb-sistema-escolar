import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

/** Evita mostrar placeholders tipo [NOMBRE_ESCUELA] desde BD; usa Vite en cliente. */
export function resolveSchoolDisplayName(schoolSettings) {
	const raw = typeof schoolSettings?.school_name === 'string' ? schoolSettings.school_name.trim() : '';
	if (!raw || /NOMBRE_ESCUELA|\[NOMBRE_ESCUELA\]/i.test(raw)) {
		return import.meta.env.VITE_SCHOOL_NAME ?? '';
	}
	return raw;
}

export function getPublicCeevaLogoUrl() {
	if (typeof window !== 'undefined' && window.location?.href) {
		return new URL('/logo-ceeva.png', window.location.href).href;
	}
	return '/logo-ceeva.png';
}