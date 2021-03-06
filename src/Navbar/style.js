import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #fff;
`;
export const Nav = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 0;

  @media (max-width: 768px) {
    width: 100%;
    padding: 13px 10px;
  }
`;
export const Logo = styled.img`
  height: 100%;
`;
export const Search = styled.div`
  position: relative;
  min-width: fit-content;
  margin-right: 60px;
`;
export const Input = styled.input`
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  height: 35px;
  padding: 0 10px 0 32px;
  width: 22em;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const NavList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const I = styled.i`
  position: absolute;
  top: 12px;
  left: 5px;
  color: #e8e8e8;
  font-size: 17px;

  @media (max-width: 768px) {
    position: initial;
  }
`;
export const Ul = styled.ul`
  list-style: none;
  width: max-content;
`;
export const Li = styled.li`
  display: inline;
  margin-right: 20px;
  font-size: 16px;
  color: #6f6f6f;
`;
export const Ellipsis = styled.i``;
export const Sign = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const SignIn = styled.button`
  display: ${(props) => (props.signed ? "none" : "block")};
  padding: 8px 12px;
  border: 1px solid #6f6f6f;
  border-radius: 5px;
  margin-left: 12px;
  background-color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  font-size: small;
`;
export const SignUp = styled(SignIn)`
  background-color: #da5431;
  color: #fff;
  border-color: transparent;
  /* text-decoration: none; */
  /* font-weight: 700; */
  /* font-size: small; */
`;
export const User = styled.div`
  display: ${(props) => (props.signed ? "flex" : "none")};
  min-width: 40px;
  min-height: 40px;
  border: none;
  background: #455a67;
  color: #fff;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;
export const UserName = styled.span`
  font-size: 18px;
  font-weight: 700;
  text-transform: capitalize;
`;
export const Logout = styled.a`
  display: ${(props) => (props.signed ? "block" : "none")};
  min-width: fit-content;
  text-decoration: none;
  color: #da5431;
  font-size: 15px;
  margin-left: 12px;
  border: 1px solid;
  padding: 4px;
  border-radius: 4px;
`;
