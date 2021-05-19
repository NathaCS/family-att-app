import "./App.css";
import Overview from "./components/Overview";
import Users from "./components/Users";
import Billing from "./components/Billing";
import Signoff from "./components/Signoff";
import Header from "./components/Header";
import { AppBar } from "@material-ui/core";
import LeftNavigation from "./components/LeftNavigation";
import Footer from "./components/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <BrowserRouter>
        <LeftNavigation></LeftNavigation>
        <Route exact path="/" render={(props) => <Overview />} />
        <Route exact path="/Users" render={(props) => <Users />} />
        <Route exact path="/Billing" render={(props) => <Billing />} />
        <Route exact path="/Signoff" render={(props) => <Signoff />} />
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
