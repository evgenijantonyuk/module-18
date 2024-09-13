import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { Error } from "../../components/Error/Error";
import { Loader } from "../../components/Loader/Loader";
import { RecipeCard } from "../../components/RecipeCard/RecipeCard";
import { RecipesSelector } from "../../Redux/recipes/recipesSelector";
import { useAppDispatch } from "../../Redux/store";
import "./style.css";
import {getRecipes} from "../../api/recipes";

export const RecipesPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, data, totalPages, isError } = useSelector(RecipesSelector);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (data.length % 15) return;
    if (data.length / 15 !== page) {
      dispatch(getRecipes(page));
    }
  }, [dispatch, page]);

  const load = () => {
    setPage(page + 1);
  };

  return (
    <div className="recipes_container">
      <h1>Recipes ...</h1>
      {isLoading && data.length === 0 ? (
        <Loader />
      ) : (
        <InfiniteScroll
          next={load}
          dataLength={data.length}
          loader={<Loader />}
          hasMore={page < totalPages}
        >
          {data.map((item) => (
            <RecipeCard key={item.recipeId} data={item} />
          ))}
        </InfiniteScroll>
      )}
      {isError && <Error />}
    </div>
  );
};
