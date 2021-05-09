import { Drawer, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import * as Material from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
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
  },
});

const pages = ["Overview", "Users", "Billing Info", "Sign Off"];

const LeftNavigation = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Material.Divider></Material.Divider>
      <Drawer anchor="left" className={classes.root} variant="permanent">
        <Material.List>
          {pages.map((pageName, index) => (
            <Material.ListItem button key={pageName}>
              <ListItemIcon>
                {(() => {
                  switch (pageName) {
                    case "Overview": return <Dashboard/>;
                    case "Users": return <Group/>;
                    case "Billing Info": return <Payment/>;
                    case "Sign Off": return <EmojiPeople/>;
                    default: return;
                  }
                })()}    
              </ListItemIcon>
              <Material.ListItemText primary={pageName} />
            </Material.ListItem>
              ))}
        </Material.List>
      </Drawer>
    </div>
  );
};

export default LeftNavigation;
