import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "react-feather";

import styles from "./toggle-theme.module.css";

const THEMES = {
  DARK: "dark",
  LIGHT: "light",
};

export default function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeToggleClick = () => {
    if (resolvedTheme === THEMES.DARK) setTheme(THEMES.LIGHT);
    if (resolvedTheme === THEMES.LIGHT) setTheme(THEMES.DARK);
  };

  const dynamicButtonProps =
    resolvedTheme === THEMES.DARK
      ? {
          title: `Switch to light mode`,
          icon: <Sun />,
        }
      : { title: `Switch to dark mode`, icon: <Moon /> };

  return (
    <div className={styles.toggleContainer}>
      <button
        className={styles.toggleButton}
        onClick={handleThemeToggleClick}
        title={dynamicButtonProps.title}
      >
        {dynamicButtonProps.icon}
      </button>
    </div>
  );
}
