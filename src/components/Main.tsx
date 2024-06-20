import { useEffect, useState } from "react";
import DonutsList from "./DonutsList";
import "./Main.css";
import Donut from "../models/Donut";
import { getDonuts } from "../services/DonutApiService";

const Main = () => {
  const [results, setResults] = useState<Donut[]>([]);
  useEffect(() => {
    getDonuts().then((res) => {
      setResults(res.results);
    });
  }, []);
  return (
    <main className="Main">
      <h1>Donuts</h1>
      <DonutsList donuts={results} />
    </main>
  );
};

export default Main;
