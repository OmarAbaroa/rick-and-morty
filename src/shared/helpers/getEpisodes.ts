import axios, { AxiosResponse } from "axios";
import { EpisodeResponseType } from "../types";

export const getEpisodes = async (episodes: string) => {
  try {
    const url = `${process.env.REACT_APP_API_URL}episode/[${episodes}]`;

    const response: AxiosResponse<EpisodeResponseType[]> = await axios.get(url);
    return response.data;
  } catch (error) {
    return null;
  }
};
