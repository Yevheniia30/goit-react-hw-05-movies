import styles from './LangSwitcher.module.css';
import { useLang } from 'hooks/useInterface';
// import { useContext } from 'react';
// import { LangContext } from 'langContext';

const LangSwitcher = () => {
  //   const { lang, switchLang } = useContext(LangContext);
  const { lang, switchLang } = useLang();
  return (
    <div>
      <span
        onClick={switchLang}
        className={lang === 'ua' ? styles.currentLang : styles.lang}
      >
        UA
      </span>
      |
      <span
        onClick={switchLang}
        className={lang === 'en' ? styles.currentLang : styles.lang}
      >
        EN
      </span>
    </div>
  );
};

export default LangSwitcher;
