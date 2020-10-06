import React from "react";
import { Link } from "react-router-dom";
import "./style.js";
import Log from "../Images/proHunt.jpeg";
import {
  Container,
  Nav,
  Logo,
  Search,
  NavList,
  Sign,
  Input,
  I,
  Ul,
  Li,
  Ellipsis,
  SignIn,
  SignUp,
  User,
  UserName,
  Logout,
} from "./style";

const Navbar = (props) => {
  return (
    <Container>
      <Nav>
        <Link
          to="/"
          style={{ height: "50px", minWidth: "50px", marginRight: "20px" }}
        >
          <Logo src={Log} />
        </Link>
        <Search>
          <I className="fas fa-search" />
          <Input type="text" placeholder="Discover your next favorite thing…" />
        </Search>
        <NavList>
          <Ul>
            <Li>Deals</Li>
            <Li>Jobs</Li>
            <Li>Makers</Li>
            <Li>Radio</Li>
            <Li>Ships</Li>
            <Li>
              <Ellipsis className="fas fa-ellipsis-h" />
            </Li>
          </Ul>
        </NavList>
        <Sign>
          <User signed={props.user != null}>
            <UserName>
              {props.user != null && props.user.name.slice(0, 1)}
            </UserName>
          </User>
          <Logout
            signed={props.user != null}
            href="/home"
            onClick={() => (document.cookie = "jwt=")}
          >
            Log out
          </Logout>
          <SignIn signed={props.user != null}>
            <Link
              to="/signin"
              style={{ textDecoration: "none", color: "black" }}
            >
              sign in
            </Link>
          </SignIn>
          <SignUp signed={props.user != null}>
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "white" }}
            >
              sign up
            </Link>
          </SignUp>
        </Sign>
      </Nav>
    </Container>
  );
};
export default Navbar;
