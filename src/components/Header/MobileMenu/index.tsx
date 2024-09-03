import { BurgerMenu } from "../BurgerMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import s from "./styles.module.css";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={s.container}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div className={s.wrapper}>
          <nav>
            <Link className={s.link} to="/BeansProject/beans" onClick={handleLinkClick}>
              Beans
            </Link>
            <Link className={s.link} to="/BeansProject/facts" onClick={handleLinkClick}>
              Facts
            </Link>
            <Link className={s.link} to="/BeansProject/recipes" onClick={handleLinkClick}>
              Recipes
            </Link>
            <Link className={s.link} to="/BeansProject/combinations" onClick={handleLinkClick}>
              Combinations
            </Link>
            <Link className={s.link} to="/BeansProject/history" onClick={handleLinkClick}>
              History
            </Link>
            <Link className={s.link} to="/BeansProject/review" onClick={handleLinkClick}>
              Review
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};
