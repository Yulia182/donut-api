import axios from "axios";
import DonutResponse from "../models/DonutResponse";
import Donut from "../models/Donut";

const baseUrl = "https://grandcircusco.github.io/demo-apis/donuts";

export const getDonuts = (): Promise<DonutResponse> => {
  return axios
    .get(`${baseUrl}.json`, {})
    .then((res) => {
      console.log(res);
      console.log(res.data.results);
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const getDonutById = (id: string): Promise<Donut> => {
  return axios
    .get(`${baseUrl}/${encodeURIComponent(id)}.json`, {})
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
