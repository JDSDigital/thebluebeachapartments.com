import React, { FC, useRef, useState, useEffect } from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import scrollTo from "gatsby-plugin-smoothscroll";
import {
  AppBar,
  Button,
  Container,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import "./Header.scss";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const useStyles = makeStyles(() => ({
  appBarTransparent: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  appBarSolid: {
    backgroundColor: "white",
  },
}));

type Props = {
  siteTitle: string;
};

const Header: FC<Props> = ({ siteTitle }) => {
  const { t } = useTranslation();
  const images = useStaticQuery(graphql`
    query Header {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

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
          <div className="logo-navbar">
            <Img fixed={images.logo.childImageSharp.fixed} />
          </div>
          <Button onClick={() => scrollTo("#home")}>{t("header.home")}</Button>
          <Button onClick={() => scrollTo("#project")}>
            {t("header.project")}
          </Button>
          <Button onClick={() => scrollTo("#lifestyle")}>
            {t("header.lifestyle")}
          </Button>
          <Button onClick={() => scrollTo("#design")}>
            {t("header.design")}
          </Button>
          <Button onClick={() => scrollTo("#interior")}>
            {t("header.interior")}
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
