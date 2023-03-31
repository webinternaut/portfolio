import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
      <div>
        <button className="text-gray-400 hover:text-gray-500 mx-3" onClick={() => setTheme('light')}>
        <FaSun size={20} />
        </button>
        <button className="text-gray-400 hover:text-gray-500 mx-3" onClick={() => setTheme('dark')}>
        <FaMoon size={20} />
        </button>
      </div>
  );
};

export default ThemeChanger;
