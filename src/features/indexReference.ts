const languageValues = ['en', 'ja', 'fr'] as const;
export type LanguageType = typeof languageValues[number];

export function getResource(language: LanguageType) {
  // 有効な言語かどうかをチェック
  if (!languageValues.includes(language as LanguageType)) {
    throw new Error('Invalid language');
  }

  return {
    en: { Hello: 'Hello' },
    ja: { Hello: 'こんにちは' },
    fr: { Hello: 'Bonjour' },
  }[language];
}