import CardRight from "./cardRight";
import CardLeft from "./cardLeft";
import "./index.scss";

const Card = () => {
  return (
    <div className="card">
      <CardLeft />
      <CardRight />
    </div>
  );
};

export default Card;
