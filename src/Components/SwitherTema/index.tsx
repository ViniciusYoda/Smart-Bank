import ThemeOn from "../../assets/images/themeOn.svg";
import ThemeOff from "../../assets/images/themeOff.svg";
import { Icone } from "../UI";

export default function ThemeSwitcher({ isDark }: { isDark: boolean }) {
  return <Icone src={isDark ? ThemeOff : ThemeOn} alt="" />;
}
