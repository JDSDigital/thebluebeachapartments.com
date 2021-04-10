import React, { FC, useRef, useState, useEffect } from "react";
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import scrollTo from "gatsby-plugin-smoothscroll";
import {
  AppBar,
  Button,
  Container,
  makeStyles,
  Menu,
  MenuItem,
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

const languagesTranslations = {
  es: "Español",
  en: "English",
};

const Header: FC<Props> = ({ siteTitle }) => {
  const { t } = useTranslation();
  const { language, languages, originalPath } = useI18next();

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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  navRef.current = navBackground;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            {navBackground === "appBarSolid" && (
              <Img fixed={images.logo.childImageSharp.fixed} />
            )}
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
          <Button onClick={() => scrollTo("#apartments")}>
            {t("header.apartments")}
          </Button>
          <Button onClick={() => scrollTo("#contact")}>
            {t("header.contact")}
          </Button>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            {languagesTranslations[language]}
          </Button>
          <Menu
            id="languages-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {languages.map(lng => {
              return (
                <MenuItem onClick={handleClose}>
                  <Link key={lng} to={originalPath} language={lng}>
                    {languagesTranslations[lng]}
                  </Link>
                </MenuItem>
              );
            })}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
