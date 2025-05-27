import { useState, useEffect } from "react";
import { House, History, Settings, Sun } from "lucide-react";

import styles from "./styles.module.css";

type AvailableThemes = "light" | "dark";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    })

  }
  
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    return () => console.log('cleanup'); //função utilizada para limpar 'sujeiras' no site
  }, [theme]) //executa somente quando 'theme' mudar de valor

  return (
    <nav className={styles.menu}>

      <h1>{theme}</h1>

      <a 
        className={styles.menuLink} 
        href="#" aria-label="Home" 
        title="Home"
      >
        <House />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Task history"
        title="Task history"
      >
        <History />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Settings"
        title="Settings"
      >
        <Settings />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Light/dark theme"
        title="Light/dark theme"
        onClick={handleThemeChange}
      >
        <Sun />
      </a>
    </nav>
  );
}
