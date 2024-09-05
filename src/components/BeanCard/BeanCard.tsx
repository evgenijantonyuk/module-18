import { FC } from "react";
import { Link } from "react-router-dom";
import { Bean } from "../../types";
import s from "./BeanCard.module.css";

type Props = {
  data: Bean;
};
export const BeanCard: FC<Props> = ({ data }) => {
  return (
    <Link
      to={`/BeansProject/bean/${data.beanId}`}
      className={s.wrapper}
      style={{
        background: data.backgroundColor,
      }}
    >
      <img src={data.imageUrl} alt="" />
      <h3>{data.flavorName}</h3>
      <p>{data.description}</p>
    </Link>
  );
};
