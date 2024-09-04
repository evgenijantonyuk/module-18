import {Link} from "react-router-dom"
import s from "./DesktopMenu.module.css"

export const DesktopMenu = () => {
    return (
        <nav>
            <Link className={s.link} to="/module-18/BeansProject/beans">Beans</Link>
            <Link className={s.link} to="/module-18/BeansProject/facts">Facts</Link>
            <Link className={s.link} to="/module-18/BeansProject/recipes">Recipes</Link>
            <Link className={s.link} to="/module-18/BeansProject/combinations">Combinations</Link>
            <Link className={s.link} to="/module-18/BeansProject/history">History</Link>
            <Link className={s.link} to="/module-18/BeansProject/review">Review</Link>
        </nav>
    );
};
