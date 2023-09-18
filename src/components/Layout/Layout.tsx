import { FC } from "react";

import { Container, Grid, Link } from "@mui/material";

import RickMortyLogo from "../../assets/rickMortyLogo.png";

import "./layout.css";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useLocation();

  return (
    <div className={`layout ${router.pathname !== "/" ? "morty" : "rick"}`}>
      <Grid container className="logoContainer">
        <Grid item xs={12} md={6} lg={4}>
          <Link href="/">
            <img
              className="imageLogo"
              src={RickMortyLogo}
              alt="Rick & Morty logo"
            />
          </Link>
        </Grid>
      </Grid>
      <main>
        <Container className="container">{children}</Container>
      </main>
    </div>
  );
};
