import { useSite } from "../context";

const SwitchTheme = () => {
  const { theme, setTheme } = useSite();

  return (
    <div>
      <hr />
      Switch Mevcut Tema : {theme}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Temayı değiştir
      </button>
    </div>
  );
};

export default SwitchTheme;
