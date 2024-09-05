import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import s from "./Header.module.css";
import { useIsMobile } from "../../hooks/useMobile";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { DesktopMenu } from "./DesktopMenu/DesktopMenu";

export const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header>
      <div className={s.container}>
        <Link to="/BeansProject" className={s.logo}>
          <img src={logo} alt="logo" />
          <span>Jelly Belly</span>
        </Link>
        {isMobile ? <MobileMenu /> : <DesktopMenu />}
      </div>
    </header>
  );
};
