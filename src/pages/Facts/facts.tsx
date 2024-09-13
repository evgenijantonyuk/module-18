import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { Error } from "../../components/Error/Error";
import { FactCard } from "../../components/FactCard/FactCard";
import { Loader } from "../../components/Loader/Loader";
import { FactsSelector } from "../../Redux/facts/factsSelector";
import { useAppDispatch } from "../../Redux/store";
import "./styles.css";
import { getFacts } from "../../api/facts";

export const FactsPage = () => {
  const dispatch = useAppDispatch();
  const { data, totalPages, isLoading, isError } = useSelector(FactsSelector);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (data.length % 15) return;
    if (data.length / 15 !== page) {
      dispatch(getFacts(page));
    }
  }, [dispatch, page]);

  const load = () => {
    setPage(page + 1);
  };
  return (
    <div className="facts_container">
      <h1>Facts ...</h1>
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
            <FactCard key={`fact_item_${item.factId}`} data={item} />
          ))}
        </InfiniteScroll>
      )}
      {isError && <Error />}
    </div>
  );
};
