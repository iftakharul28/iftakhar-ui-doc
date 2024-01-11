// themeToggle.js
const toggleTheme = (theme: 'dark-theme' | 'light-theme') => {
  const html = document.documentElement;
  html.classList.remove('dark-theme', 'light-theme'); // Remove previous theme classes
  html.classList.add(theme); // Add the specified theme class
};

export default toggleTheme;
