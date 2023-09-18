import axios, { AxiosResponse } from "axios";
import { CharactersResponseType } from "../types";

export const getCharacters = async (page: number) => {
  try {
    let url = `${process.env.REACT_APP_API_URL}character`;

    if (page > 1) {
      url += `?page=${page}`;
    }

    const response: AxiosResponse<CharactersResponseType> = await axios.get(
      url,
    );

    return response.data;
  } catch (error) {
    return null;
  }
};
