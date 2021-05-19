import React from "react";
import {
  AppBar,
  IconButton,
  makeStyles,
  createStyles,
  Toolbar,
  useTheme,
  Theme,
} from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";

type NavbarProps = {
  setActiveTheme?: React.Dispatch<React.SetStateAction<string>>;
  name?: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.secondary.main,
    },
    toolbar: {
      justifyContent: "space-between",
	  color: theme.palette.primary.main
    },
  })
);

export const Navbar = ({ name, setActiveTheme }: NavbarProps) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        {name && <div>{name}</div>}

        {setActiveTheme && (
          <IconButton
            edge="start"
            onClick={() =>
              setActiveTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
          >
            {theme.palette.type === "light" && (
              <Brightness4Icon
                style={{ color: theme.palette.primary.main }}
              />
            )}

            {theme.palette.type === "dark" && (
              <BrightnessHighIcon
                style={{ color: theme.palette.primary.main }}
              />
            )}
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};
