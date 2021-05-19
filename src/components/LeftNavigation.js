import { Drawer, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import * as Material from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { withRouter } from "react-router-dom";
import {
  Payment,
  Dashboard,
  Group,
  EmojiPeople,
  GroupAdd,
} from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    color: "gray",
    fontSize: "2em",
    width: "200px",
  },
  container: {
    display: "flex",
  },
});

const LeftNavigation = (props) => {
  const classes = useStyles();
  console.log("props: ", props);
  const { history } = props;

  const pages = [
    {
      text: "Overview",
      icon: <Dashboard />,
      onClick: () => history.push("/"),
    },
    {
      text: "Users",
      icon: <Group />,
      onClick: () => history.push("/Users"),
    },
    {
      text: "Billing Info",
      icon: <Payment />,
      onClick: () => history.push("/Billing"),
    },
    {
      text: "Sign off",
      icon: <EmojiPeople />,
      onClick: () => history.push("/Signoff"),
    },
  ];

  return (
    <div className={classes.container}>
      <Drawer anchor="left" variant="permanent" className={classes.root}>
        <Material.List>
          {pages.map((page, index) => {
            const { text, icon, onClick } = page;
            return (
              <Material.ListItem button key={text} onClick={onClick}>
                {icon && <Material.ListItemIcon>{icon}</Material.ListItemIcon>}
                <Material.ListItemText primary={text} />
              </Material.ListItem>
            );
          })}
        </Material.List>
      </Drawer>
    </div>
  );
};

export default withRouter(LeftNavigation);
