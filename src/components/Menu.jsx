import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const Menu = (props) => {
  return (
    <div>
      <h1>Acorn Animal Hospital</h1>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/veterinary-care">Veterinary Care</Link>
            </li>
            <li>
              <Link to="/boarding">Boarding</Link>
            </li>
            <li>
              <Link to="/grooming">Grooming</Link>
            </li>
            <li>
              <Link to="/maggie-fund">MaggieFund</Link>
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a href="https://dashboard.petdesk.com/WebApptRequest/?placeGUID=04211d3b-eac1-48d1-a939-045d22296e50">Request Appointment</a>
            </li>
          </ul>

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
