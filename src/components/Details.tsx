import { useEffect, useState } from "react";
import "./Details.css";
import DonutView from "./DonutView";
import { useParams } from "react-router-dom";
import Donut from "../models/Donut";
import { getDonutById } from "../services/DonutApiService";
import DonutDesc from "./DonutDesc";

const Details = () => {
  const id: string = useParams().id!;
  console.log(id);
  const [donut, setDonut] = useState<null | Donut>(null);

  useEffect(() => {
    getDonutById(id).then((res) => {
      console.log(res);
      setDonut(res);
    });
  }, [id]);
  return (
    <div className="Details">
      {donut ? <DonutDesc donut={donut} /> : <p>Loading...</p>}
    </div>
  );
};

export default Details;
