import { useContext, useMemo, useState, useEffect } from 'react';
import { InterfaceContext } from 'interfaceContext';

export const useLang = () => {
  const { lang, theme, switchLang, switchTheme } = useContext(InterfaceContext);

  const language = useMemo(() => {
    if (lang === 'ua') return 'uk';
    return 'en';
  }, [lang]);

  return { language, lang, theme, switchLang, switchTheme };
};

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(
    () => localStorage.getItem(key) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState];
};
