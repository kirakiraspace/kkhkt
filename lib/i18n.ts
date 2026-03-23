import zhTW from '@/data/locales/zh-TW/ui.json';

type Messages = typeof zhTW;

const locales: Record<string, Messages> = {
  'zh-TW': zhTW,
};

const defaultLocale = 'zh-TW';

export function t(key: keyof Messages): string {
  const messages = locales[defaultLocale];
  return messages[key] ?? key;
}
