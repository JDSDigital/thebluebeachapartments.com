import React, { FC, useRef, useState, useEffect } from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import scrollTo from "gatsby-plugin-smoothscroll";
import {
  AppBar,
  Button,
  Container,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import "./Header.module.scss";

const useStyles = makeStyles(() => ({
  appBarTransparent: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  appBarSolid: {
    backgroundColor: "rgba(17, 17, 17, 0.8)",
  },
}));

type Props = {
  siteTitle: string;
};

const Header: FC<Props> = ({ siteTitle }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const [navBackground, setNavBackground] = useState("appBarTransparent");
  const navRef = useRef<string | undefined>();

  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 200;

      if (show) {
        setNavBackground("appBarSolid");
      } else {
        setNavBackground("appBarTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar position="fixed" className={classes[navRef.current]}>
      <Container>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {siteTitle}
          </Typography>
          <Button onClick={() => scrollTo("#home")}>{t("header.home")}</Button>
          <Button onClick={() => scrollTo("#lifestyle")}>
            {t("header.lifestyle")}
          </Button>
          <Button onClick={() => scrollTo("#contact")}>
            {t("header.contact")}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
