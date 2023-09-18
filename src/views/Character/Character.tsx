import { FC, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacter, getEpisodes } from "../../shared/helpers";
import { CharacterResponseType, EpisodeResponseType } from "../../shared/types";
import { CharacterData } from "../../components";

export const CharacterPage: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [id, setId] = useState(useParams().id);
  const [character, setCharacter] = useState<CharacterResponseType | null>(
    null,
  );
  const [episodes, setEpisodes] = useState<EpisodeResponseType[]>([]);

  const retrieveCharacter = useCallback(async () => {
    if (id) {
      const response = await getCharacter(parseInt(id));

      const stringEpisodes = response?.episode.map((episode) => {
        return episode.split("episode/")[1];
      });

      if (typeof stringEpisodes === "object") {
        const responseEpisodes = await getEpisodes(stringEpisodes.toString());
        setEpisodes(responseEpisodes || []);
      }

      setCharacter(response);
    }
  }, [id]);

  useEffect(() => {
    retrieveCharacter();
  }, [retrieveCharacter]);

  return (
    <div>
      {character && <CharacterData character={character} episodes={episodes} />}
    </div>
  );
};
