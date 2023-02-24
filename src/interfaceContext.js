import { createContext } from 'react';
import { useLocalStorage } from 'hooks/useInterface';

export const InterfaceContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useLocalStorage('lang', 'ua');
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  // const [lang, setLang] = useState(() => localStorage.getItem('lang') ?? 'ua');
  // const [theme, setTheme] = useState(
  //   () => localStorage.getItem('theme') ?? 'light'
  // );

  // useEffect(() => {
  //   localStorage.setItem('theme', theme);
  // }, [theme]);

  // useEffect(() => {
  //   localStorage.setItem('lang', lang);
  // }, [lang]);

  const switchLang = () => {
    setLang(prev => (prev === 'ua' ? 'en' : 'ua'));
  };

  const switchTheme = e => {
    console.log('e', e.target);
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <InterfaceContext.Provider value={{ lang, switchLang, theme, switchTheme }}>
      {children}
    </InterfaceContext.Provider>
  );
};
