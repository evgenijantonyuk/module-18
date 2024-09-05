import { FC } from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../../types";
import s from "./RecipeCard.module.css";

type Props = {
  data: Recipe;
};
export const RecipeCard: FC<Props> = ({ data }) => {
  return (
    <Link to={`/recipe/${data.recipeId}`} className={s.wrapper}>
      <img src={data.imageUrl} alt="" />
      <div className={s.info}>
        <h3>{data.name}</h3>
        <p className={s.description}>
          {data.description.length > 100
            ? data.description.slice(0, 100) + "..."
            : data.description}
        </p>
        {data.makingAmount && (
          <p className={s.additional_info}> Make: {data.makingAmount}</p>
        )}
        {data.cookTime && (
          <p className={s.additional_info}>Cook Time: {data.cookTime}</p>
        )}
        {data.totalTime && (
          <p className={s.additional_info}>Total Time: {data.totalTime}</p>
        )}
      </div>
    </Link>
  );
};
