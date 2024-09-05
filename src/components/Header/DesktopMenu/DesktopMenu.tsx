import { Link } from "react-router-dom"
import s from "./DesktopMenu.module.css"

export const DesktopMenu = () => {
    return (
        <nav>
            <Link className={s.link}
                  to="/BeansProject/beans">
                Beans
            </Link>
            <Link className={s.link}
                  to="/BeansProject/facts">
                Facts
            </Link>
            <Link className={s.link}
                  to="/BeansProject/recipes">
                Recipes
            </Link>
            <Link className={s.link}
                  to="/BeansProject/combinations">
                Combinations
            </Link>
            <Link className={s.link}
                  to="/BeansProject/history">
                History
            </Link>
            <Link className={s.link}
                  to="/BeansProject/review">
                Review
            </Link>
        </nav>
    );
};

