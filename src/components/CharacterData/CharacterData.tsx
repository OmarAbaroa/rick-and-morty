import { FC } from "react";
import { CharacterResponseType, EpisodeResponseType } from "../../shared/types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { LiveTvRounded, ExpandMoreRounded } from "@mui/icons-material";

import "./CharacterData.css";

interface CharacterDataProps {
  character: CharacterResponseType;
  episodes: EpisodeResponseType[];
}

export const CharacterData: FC<CharacterDataProps> = ({
  character,
  episodes,
}) => {
  const theme = useTheme();
  const mobileQuery = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div>
      <Grid spacing={4} container>
        <Grid item xs={12} md={5}>
          <div
            className={`nameContainer ${
              mobileQuery ? "columnReverse" : "column"
            }`}
          >
            <img className="image" src={character.image} alt={character.name} />
            <Typography variant="h2" className="name">
              {character.name}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <Card className="dataContainer">
            <Grid container>
              <Grid item xs={6}>
                <Typography className="rickLetter">Origen</Typography>
              </Grid>
              <Grid item xs={6}>
                {character.origin.name}
              </Grid>

              <Grid item xs={6}>
                <Typography className="rickLetter">Locación</Typography>
              </Grid>
              <Grid item xs={6}>
                {character.location.name}
              </Grid>

              <Grid item xs={6}>
                <Typography className="rickLetter">Género</Typography>
              </Grid>
              <Grid item xs={6}>
                {character.gender}
              </Grid>

              <Grid item xs={6}>
                <Typography className="rickLetter">Status</Typography>
              </Grid>
              <Grid item xs={6}>
                {character.status}
              </Grid>

              <Grid item xs={6}>
                <Typography className="rickLetter">Especie</Typography>
              </Grid>
              <Grid item xs={6}>
                {character.species}
              </Grid>

              <Grid item xs={6}>
                <Typography className="rickLetter">Tipo</Typography>
              </Grid>
              <Grid item xs={6}>
                {character.type ? character.type : " - "}
              </Grid>
            </Grid>
          </Card>

          <Accordion defaultExpanded={!mobileQuery ? false : true}>
            <AccordionSummary expandIcon={<ExpandMoreRounded />}>
              <Typography className="rickLetter">Episodios</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <List>
                {episodes.map((episode) => (
                  <ListItem key={episode.id} disablePadding>
                    <ListItemIcon className="listIcon">
                      <LiveTvRounded />
                    </ListItemIcon>
                    <ListItemText>
                      {episode.episode} - {episode.name}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </div>
  );
};
