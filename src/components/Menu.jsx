import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './Menu.scss';

const MenuItem = (props) => {
  let link;
  console.log(props.path);
  if (props.external === true) {
    link = <a href={ props.path }>{ props.name }</a>;
  } else {
    link = <Link to={ props.path}>{ props.name }</Link>;
  }

  return (
    <span className="MenuItem">
        { link }
    </span>
  );
}
MenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  external: PropTypes.bool,
}

const Menu = (props) => {
  return (
    <div>
      <h1>Acorn Animal Hospital</h1>
      <Router>
        <div className="MenuBar">
          <MenuItem path="/" name="Home" />
          <MenuItem path="/team" name="Team" />
          <MenuItem path="/veterinary-care" name="Veterinary Care" />
          <MenuItem path="/boarding" name="Boarding" />
          <MenuItem path="/grooming" name="Grooming" />
          <MenuItem path="/maggie-fund" name="MaggieFund" />
          <MenuItem path="/explore" name="Explore" />
          <MenuItem path="/blog" name="Blog" />
          <MenuItem path="/contact" name="Contact" />
          <MenuItem
              path={ "https://dashboard.petdesk.com/WebApptRequest/?placeGUID=04211d3b-eac1-48d1-a939-045d22296e50" }
              name={ "Request Appointment" }
              external={ true }
          />

          <Switch>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/veterinary-care">
              <VetCare />
            </Route>
            <Route path="/boarding">
              <Boarding />
            </Route>
            <Route path="/grooming">
              <Grooming />
            </Route>
            <Route path="/maggie-fund">
              <MaggieFund />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

function Home() {
  return <h2>Home</h2>;
}

function Team() {
  return <h2>Team</h2>;
}

function VetCare() {
  return <h2>Veterinary Care</h2>;
}

function Boarding() {
  return <h2>Boarding</h2>;
}

function Grooming() {
  return <h2>Grooming</h2>;
}

function MaggieFund() {
  return <h2>Maggie Fund</h2>;
}

function Explore() {
  return <h2>Explore</h2>;
}

function Blog() {
  return <h2>Blog</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

export default Menu;
