import axios, { AxiosResponse } from "axios";
import { CharacterResponseType } from "../types";

export const getCharacter = async (id: number) => {
  try {
    const url = `${process.env.REACT_APP_API_URL}character/${id}`;

    const response: AxiosResponse<CharacterResponseType> = await axios.get(url);

    return response.data;
  } catch (error) {
    return null;
  }
};
