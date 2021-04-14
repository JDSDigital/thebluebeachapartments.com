import React, { FC, useRef, useState, useEffect } from "react";
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import scrollTo from "gatsby-plugin-smoothscroll";
import {
  AppBar,
  Button,
  Container,
  Hidden,
  IconButton,
  List,
  ListItem,
  makeStyles,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Toolbar,
} from "@material-ui/core";
import "./Header.scss";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";

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
      es: file(relativePath: { eq: "flags/sp.jpg" }) {
        childImageSharp {
          fixed(height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      en: file(relativePath: { eq: "flags/uk.jpg" }) {
        childImageSharp {
          fixed(height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ru: file(relativePath: { eq: "flags/ru.jpg" }) {
        childImageSharp {
          fixed(height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      it: file(relativePath: { eq: "flags/it.jpg" }) {
        childImageSharp {
          fixed(height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const classes = useStyles();

  const [navBackground, setNavBackground] = useState("appBarTransparent");
  const navRef = useRef<string | undefined>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  navRef.current = navBackground;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => (event: any) => {
    setIsDrawerOpen(open);
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
            <Img fixed={images.logo.childImageSharp.fixed} />
          </div>

          <Hidden smDown>
            <Button onClick={() => scrollTo("#home")}>
              {t("header.home")}
            </Button>
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
            <Button onClick={() => scrollTo("#gallery")}>
              {t("header.gallery")}
            </Button>
            <Button onClick={() => scrollTo("#contact")}>
              {t("header.contact")}
            </Button>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <Img
                fixed={images[language].childImageSharp.fixed}
                alt={language}
              />
              <ExpandMoreIcon />
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
                  <MenuItem key={lng} onClick={handleClose}>
                    <Link to={originalPath} language={lng}>
                      <Img
                        fixed={images[lng].childImageSharp.fixed}
                        alt={lng}
                        className="mr-1"
                      />
                      {languagesTranslations[lng]}
                    </Link>
                  </MenuItem>
                );
              })}
            </Menu>
          </Hidden>

          <Hidden mdUp>
            <IconButton
              aria-label="open drawer"
              className="ml-auto"
              onClick={toggleDrawer(true)}
              classes={{ root: "color-white" }}
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              open={isDrawerOpen}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              <div
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                className="side-menu"
              >
                <div className="side-menu--logo">
                  <Link to="/">
                    <Img
                      fixed={images.logo.childImageSharp.fixed}
                      alt={siteTitle}
                    />
                  </Link>
                </div>
                <List disablePadding className="side-menu--list">
                  <ListItem button>
                    <Link to="/#home">{t("header.home")}</Link>
                  </ListItem>
                  <ListItem button>
                    <Link to="/#project">{t("header.project")}</Link>
                  </ListItem>
                  <ListItem button>
                    <Link to="/#lifestyle">{t("header.lifestyle")}</Link>
                  </ListItem>
                  <ListItem button>
                    <Link to="/#design">{t("header.design")}</Link>
                  </ListItem>
                  <ListItem button>
                    <Link to="/#interior">{t("header.interior")}</Link>
                  </ListItem>
                  <ListItem button>
                    <Link to="/#apartments">{t("header.apartments")}</Link>
                  </ListItem>
                  <ListItem button>
                    <Link to="/#gallery">{t("header.gallery")}</Link>
                  </ListItem>
                  <ListItem button>
                    <Link to="/#contact">{t("header.contact")}</Link>
                  </ListItem>
                  <ListItem className="languages-menu">
                    {languages.map(lng => {
                      return (
                        <Link key={lng} to={originalPath} language={lng}>
                          <Img
                            fixed={images[lng].childImageSharp.fixed}
                            alt={lng}
                          />
                        </Link>
                      );
                    })}
                  </ListItem>
                </List>
              </div>
            </SwipeableDrawer>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
