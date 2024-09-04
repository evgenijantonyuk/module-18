import { FC } from "react";
import { Fact } from "../../types";
import s from "./Fact.module.css";
type Props = {
  data: Fact;
};
export const FactCard: FC<Props> = ({ data }) => {
  return (
    <div className={s.wrapper}>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
};
