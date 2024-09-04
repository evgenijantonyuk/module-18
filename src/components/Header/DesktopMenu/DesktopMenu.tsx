import { Link } from "react-router-dom";
import s from "./DesktopMenu.module.css";

export const DesktopMenu = () => {
  return (
    <nav>
      <Link className={s.link} to="beans">
        Beans
      </Link>
      <Link className={s.link} to="facts">
        Facts
      </Link>
      <Link className={s.link} to="recipes">
        Recipes
      </Link>
      <Link className={s.link} to="combinations">
        Combinations
      </Link>
      <Link className={s.link} to="history">
        History
      </Link>
      <Link className={s.link} to="review">
        Review
      </Link>
    </nav>
  );
};
