const dictionaries: any = {
	en: () => import('../locales/kg.json').then(r => r.default),
	ru: () => import('../locales/ru.json').then(r => r.default)
}

export const getDectionaries = ({ lang }: { lang: string }) => {
	return dictionaries[lang]()
}