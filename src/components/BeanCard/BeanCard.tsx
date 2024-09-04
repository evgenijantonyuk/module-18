import { FC } from "react";
import { Link } from "react-router-dom";
import { Bean } from "../../types";
import styles from "./BeanCard.module.css";

type Props = {
  data: Bean;
};
export const BeanCard: FC<Props> = ({ data }) => {
  return (
    <Link
      to={`/module-18/BeansProject/bean/${data.beanId}`}
      className={styles.wrapper}
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
