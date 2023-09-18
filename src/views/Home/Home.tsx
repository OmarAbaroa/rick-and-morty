import { FC, useCallback, useEffect, useState } from "react";

import { Container, Grid, Pagination } from "@mui/material";

import { CharacterCard } from "../../components";
import { getCharacters } from "../../shared/helpers";
import {
  CharactersResponseType,
  CharacterResponseType,
} from "../../shared/types";

import "./home.css";

export const HomePage: FC = () => {
  const [characters, setCharacters] = useState<CharacterResponseType[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const retrieveCharacters = useCallback(async () => {
    setIsLoading(true);
    const response: CharactersResponseType | null = await getCharacters(
      currentPage,
    );
    if (typeof response?.results === "object") {
      setCharacters(response.results);
    }

    if (typeof response?.info === "object") {
      if (response.info.prev === null) setCurrentPage(1);
      else {
        if (response.info.next === null) {
          setCurrentPage(response.info.pages);
        } else {
          const count = response.info.next.split("?page=")[1];
          setCurrentPage(parseInt(count) - 1);
        }
      }

      setPageCount(response.info.pages);
    }

    setIsLoading(false);
  }, [currentPage]);

  const handleChangePagination = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    retrieveCharacters();
  }, [retrieveCharacters]);

  return (
    <>
      <Grid container spacing={3}>
        {characters.map((character) => (
          <Grid key={character.id} item xs={6} md={4} lg={3}>
            <CharacterCard character={character} />
          </Grid>
        ))}
      </Grid>

      {pageCount > 0 && (
        <Container className="paginationContainer">
          <Pagination
            disabled={isLoading}
            color="primary"
            count={pageCount}
            variant="outlined"
            page={currentPage}
            onChange={handleChangePagination}
          />
        </Container>
      )}
    </>
  );
};
