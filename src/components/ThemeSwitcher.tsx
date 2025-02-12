import { useState } from "react";
import { useTheme, Theme } from "../context/ThemeContext";
import {Settings} from "lucide-react";


const ThemeSwitcher = () => {
  const {  setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const themes: Theme[] = ["light", "dark", "blue", "purple"];

  return (
    <div className="fixed bottom-4 right-4">
      {/* Settings Button */}
      <button
        id="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-all"
      >
        <Settings size={14} />
      </button>

      {/* Theme Selection Menu */}
      {isOpen && (
        <div
          id="button"
          className="absolute bottom-14 right-0 bg-gray-800 text-white shadow-md rounded-lg p-3 flex flex-col gap-2"
        >
          {themes.map((t) => (
            <button
              key={t}
              onClick={() => {
                setTheme(t);
                setIsOpen(false);
              }}
              className={`w-8 h-8 rounded-full transition-all text-sm text-center cursor-pointer border-2 border-gray-500 ${
                t === "light"
                  ? "bg-white border-zinc-600"
                  : t === "dark"
                  ? "bg-[#121212] border-zinc-600"
                  : t === "blue"
                  ? "bg-[#141e30] border-zinc-600"
                  : "bg-[#450086] border-zinc-600"
              }`}
            >
              {/* {t.charAt(0).toUpperCase() + t.slice(1)} */}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
