import { Link } from "react-router-dom";
import Donut from "../models/Donut";

interface Props {
  donut: Donut;
}

const DonutDesc = ({ donut }: Props) => {
  console.log(donut.extras);
  return (
    <div className="DonutDesc">
      <Link to="/">Back to the List</Link>
      <h1>Donut</h1>
      <p>Name: {donut.name}</p>
      <p>Calories: {donut.calories}</p>
      <ol>
        Extras:
        {donut.extras.map((el, index) => {
          return <li key={index}>{el}</li>;
        })}
      </ol>
    </div>
  );
};

export default DonutDesc;
