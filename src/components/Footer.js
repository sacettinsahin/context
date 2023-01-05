import React from "react";
import SwitchTheme from "./SwitchTheme";
import { useSite } from "../context";

const Footer = () => {
  const { language, setLanguage } = useSite();
  return (
    <div>
      Footer
      <br />
      <br />
      <SwitchTheme />
      Mevcut Dil: {language}
      <button onClick={() => setLanguage(language === "tr" ? "en" : "tr")}>
        Dili Değiştir
      </button>
    </div>
  );
};

export default Footer;
