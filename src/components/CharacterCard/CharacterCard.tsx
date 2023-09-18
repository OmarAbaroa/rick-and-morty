import { FC } from "react";

import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import {
  MaleRounded,
  FemaleRounded,
  StarOutlineRounded,
} from "@mui/icons-material";

import { CharacterCardType } from "../../shared/types";

import "./characterCard.css";

interface PropsType {
  character: CharacterCardType;
}

export const CharacterCard: FC<PropsType> = ({ character }) => {
  const setGender = (gender: string) => {
    switch (gender) {
      case "Male":
        return <MaleRounded className="male" />;

      case "Female":
        return <FemaleRounded className="female" />;
      default:
        return <StarOutlineRounded className="unknown" />;
    }
  };

  return (
    <CardActionArea className="h100 cardAction">
      <Card className="h100 cardContent" elevation={5}>
        <img
          src={character.image}
          alt={character.name}
          loading="lazy"
          className="fullImage"
        />

        <CardContent>
          <Typography variant="body1" className="nameText">
            {character.name}
          </Typography>

          <Divider className="dividerLine" />

          <Grid container spacing={1}>
            <Grid item xs={12} md={6} lg={6}>
              <Grid container spacing={1}>
                <Grid item>
                  <Typography>{setGender(character.gender)}</Typography>
                </Grid>
                <Grid item>
                  <Typography className="capitalize">
                    {character.gender}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Chip
                avatar={
                  <Avatar className="avatar">{character.episode.length}</Avatar>
                }
                label="Episodios"
                className="chip"
              />
            </Grid>
          </Grid>

          <Divider className="dividerLine" />
          <Typography className="link">
            <Link
              href={`/rick-and-morty/character/${character.id}`}
              variant="body1"
              underline="hover"
            >
              Ver más
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};
