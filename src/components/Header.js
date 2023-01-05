import { useSite, useAuth } from "../context";

const Header = () => {
  const { theme, setTheme, language, setLanguage } = useSite();
  const { user, setUser } = useAuth();

  const Login = () => {
    setUser(true);
  };
  const Logout = () => {
    setUser(false);
  };

  return (
    <div>
      Header
      <br />
      {(user && <button onClick={Logout}>Çıkış Yap</button>) || (
        <button onClick={Login}>Giriş Yap</button>
      )}
      <br />
      <br />
      Header Mevcut Tema : {theme}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Temayı değiştir
      </button>
      <br />
      <br />
      Mevcut Dil : {language}
      <button onClick={() => setLanguage(language === "tr" ? "en" : "tr")}>
        Dili değiştir
      </button>
    </div>
  );
};

export default Header;
