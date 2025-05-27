import { useState, useEffect } from "react";
import { House, History, Settings, Sun, Moon } from "lucide-react";

import styles from "./styles.module.css";

type AvailableThemes = "light" | "dark";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const localStorageTheme = (localStorage.getItem('theme') as AvailableThemes) || "dark";
    return localStorageTheme;
  });

  const nextThemeIcon = {
    dark: <Sun />,
    light: <Moon />
  }

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    })

  }
  
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem('theme', theme);
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
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
