import Donut from "../models/Donut";
import DonutView from "./DonutView";
import "./DonutsList.css";

interface Props {
  donuts: Donut[];
}

const DonutsList = ({ donuts }: Props) => {
  return (
    <ul className="DonutsList">
      {donuts.map((donut: Donut) => {
        return <DonutView key={donut.id} donut={donut} />;
      })}
    </ul>
  );
};

export default DonutsList;
