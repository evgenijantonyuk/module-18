import "./Home.module.css"
import image from "../../images/main.gif"
import s from "./Home.module.css"

export const Home = () => {
  return (
    <div className={s.home_container}>
      <img src={image} alt="" />
      <div className={s.info}>
        <h1>Welcome to the World of Jelly Belly:</h1>
        <p>A Rainbow of Flavors Awaits!</p>
      </div>
    </div>
  );
};
