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
} from "./style";

const Navbar = () => {
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
          <SignIn>Log in</SignIn>
          <SignUp>Sign up</SignUp>
        </Sign>
      </Nav>
    </Container>
  );
};
export default Navbar;
