import Donut from "../models/Donut";
import { Link } from "react-router-dom";
import "./DonutView.css";

interface Props {
  donut: Donut;
}

const DonutView = ({ donut }: Props) => {
  return (
    <li className="DonutView">
      <Link to={`/details/${encodeURIComponent(donut.id)}`}>
        <p>{donut.name}</p>
      </Link>
    </li>
  );
};

export default DonutView;
