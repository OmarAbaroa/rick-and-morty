export interface InfoResponseType {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface SimpleResponseType {
  name: string;
  url: string;
}

export interface CharacterResponseType {
  createdAt: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: SimpleResponseType;
  name: string;
  origin: SimpleResponseType;
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface CharactersResponseType {
  info: InfoResponseType;
  results: CharacterResponseType[];
}

export interface EpisodeResponseType {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
}
